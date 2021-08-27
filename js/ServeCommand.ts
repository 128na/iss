import fs from 'fs-extra';
import { CommandBase } from "./CommandBase";
import watcher from './managers/watcher';

class ServeCommand extends CommandBase {
  static watchExt = ['dat', 'png', 'js'];

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
}

import { Command } from 'commander';
import { commandOption } from './interface';
const runner = new Command('build');
runner
  .description('ソースファイルの更新を監視して自動ビルド、検証用シムトラを起動します。')
  .option('-d, --definition <file>', 'Definition file path', '../src/definition.js')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './dist')
  .option('-p, --paklib <file>', 'Output pak file library path', 'dev.pak')
  .action((options: commandOption) => {
    const serveCommand = new ServeCommand(options);
    try {
      serveCommand.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
