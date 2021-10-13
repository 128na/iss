import { logger } from '../util';
import watcher from './watcher';
import { Builder } from "./Builder";
import { serveCommandOption } from "../interface";
import { Makeobj } from 'simutrans-makeobj-wrapper';
import SimutransManager from "./SimutransManager";

export default class Serve {
  static watchExt = ['dat', 'png', 'js', 'tab'];
  private source: string;
  private output: string;
  private paklib: string;
  private simutransjManager: SimutransManager;
  private makeobj: Makeobj;
  private builder: Builder;
  private successFirstTime = false;

  public constructor({ definition, source, output, paklib }: serveCommandOption) {
    this.builder = new Builder({ definition, source, output, batch: false });
    this.source = source;
    this.output = output;
    this.paklib = paklib;
    this.simutransjManager = new SimutransManager(
      process.env.SIMUTRANS_PAKDIR,
      process.env.SIMUTRANS_EXECUTABLE
    );
    this.makeobj = new Makeobj(process.env.MAKEOBJ_PATH);
  }

  public async run() {
    const target = Serve.watchExt.map(ext => `${this.source}/**/*.${ext}`);
    watcher(target, async (file) => {
      logger('changed file', { file });
      console.time('serve');
      const pakFiles = await this.builder.run(this.handleFile(file));
      const mergePakFile = this.merge(pakFiles);
      this.copyToPakDirectory(mergePakFile);
      this.reRunSimutrans();
      this.successFirstTime = true;
      console.timeEnd('serve');
    });
  }

  private handleFile(file: string): string | undefined {
    if (!this.successFirstTime) {
      return undefined;
    }
    file = file?.replace(/\\/gi, '/').replace(this.source, '');
    return file;
  }

  private merge(pakFiles: string[]): string {
    const pakFileLib = `${this.output}/${this.paklib}`;
    const result = this.makeobj.merge(pakFileLib, ...pakFiles);
    logger('merge', result);
    if (result.status !== 0) {
      throw new Error('merge failed ' + pakFileLib);
    }
    return pakFileLib;
  }

  private copyToPakDirectory(mergePakFile: string) {
    if (this.paklib) {
      logger('copyToPakDirectory', mergePakFile);
      this.simutransjManager.copyToPakDirectory(mergePakFile, this.paklib);
    }
  }

  private reRunSimutrans() {
    logger('reRunSimutrans');
    this.simutransjManager.reRun();
  }
}
