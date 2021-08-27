
import fs from 'fs-extra';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';

export default class SimutransManager {
  private pakDir: string;
  private exePath: string;
  private childProcess?: ChildProcessWithoutNullStreams;

  public constructor(pakDir: string = '', exePath: string = '') {
    this.pakDir = pakDir;
    this.exePath = exePath;
  }

  public copyToPakDirectory(from: string, to: string): void {
    if (!this.pakDir) {
      throw new Error('invalid pak directory');
    }
    fs.copySync(from, `${this.pakDir}/${to}`, { overwrite: true });
  }

  public reRun() {
    if (!this.exePath) {
      throw new Error('invalid exe path');
    }
    if (this.childProcess) {
      this.childProcess.kill();
    }
    try {
      this.childProcess = spawn(this.exePath, { detached: true });
    } catch (e) {
      console.error(e);
    }
  }
}
