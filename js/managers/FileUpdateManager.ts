import fs from 'fs-extra';

export default class FileUpdateManager {
  private fileSet: { [index: string]: Date };

  constructor() {
    this.fileSet = { };
  }

  put(filepath: string): void {
    const current = fs.lstatSync(filepath).mtime;
    this.fileSet[filepath] = current;
  }
  updated(filepath: string): boolean {
    const old = this.fileSet[filepath] || false;
    if (!old) {
      return true;
    }
    const current = fs.lstatSync(filepath).mtime;
    return current > old;
  }
}
