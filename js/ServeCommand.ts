import fs from 'fs-extra';
import { BuildCommandBase } from "./BuildCommandBase";
import watcher from './libs/watcher';
import SimutransManager from './managers/SimutransManager';

class ServeCommand extends BuildCommandBase {
  static watchExt = ['dat', 'png', 'js', 'tab'];

  private paklib?: string;
  private simutransjManager: SimutransManager

  public constructor({ definition, source, output, paklib }: serveCommandOption) {
    super({ definition, source, output });
    this.paklib = paklib;
    this.simutransjManager = new SimutransManager(
      process.env.SIMUTRANS_PAKDIR,
      process.env.SIMUTRANS_EXECUTABLE
    );
  }

  public async run() {
    fs.emptyDirSync(this.output);

    const target = ServeCommand.watchExt.map(ext => `${this.source}/**/*.${ext}`);
    watcher(target, async () => {
      const pakFiles = await this.handleDefinitions();
      const mergePakFile = this.merge(pakFiles);
      this.copyToPakDirectory(mergePakFile);
      this.reRunSimutrans();
    });
  }

  private merge(pakFiles: string[]): string {
    const pakFileLib = `${this.output}/${this.paklib}`;
    const result = this.makeobjManager.merge(pakFileLib, pakFiles);
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
      this.simutransjManager.copyToPakDirectory(`${this.output}/text`, '/text');
    }
  }

  private reRunSimutrans() {
    logger('reRunSimutrans');
    this.simutransjManager.reRun();
  }
}

import { Command } from 'commander';
import { serveCommandOption, logger } from './interface';
const runner = new Command('build');
runner
  .description('ソースファイルの更新を監視して自動ビルド、検証用シムトラを起動します。')
  .option('-d, --definition <file>', 'Definition file path', '../src/definition.js')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './dist')
  .option('-p, --paklib <file>', 'Output pak file library path', 'dev.pak')
  .action((options: serveCommandOption) => {
    const command = new ServeCommand(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
