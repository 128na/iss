import { spawnSync } from 'child_process';
import { makeojbResponse } from '../interface';

export default class MakeobjManager {
  private makeobjPath: string;

  constructor(makeobjPath: string = 'makeobj') {
    this.makeobjPath = makeobjPath
  }

  public pak(pakFile: string, datFiles: string[], size = 128): makeojbResponse {
    return this.exec('QUIET', `PAK${size}`, pakFile, ...datFiles);
  }

  public merge(pakFileLib: string, pakFiles: string[]): makeojbResponse {
    return this.exec('QUIET', 'MERGE', pakFileLib, ...pakFiles);
  }

  private exec(...args: string[]): makeojbResponse {
    const result = spawnSync(this.makeobjPath, args);
    return {
      status: result.status,
      stdout: result.stdout.toString(),
      stderr: result.stderr.toString(),
    };
  }
}
