import fs from 'fs-extra';
import { BuildCommandBase } from "./BuildCommandBase";

class BuildCommand extends BuildCommandBase {
  public async run() {
    fs.emptyDirSync(this.output);
    await this.handleDefinitions();
  }
}

import { Command } from 'commander';
import { commandOption } from './interface';
const runner = new Command('build');
runner
  .description('ソースファイルをビルドします。')
  .option('-d, --definition <file>', 'Definition file path', '../src/definition.js')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './dist')
  .action((options: commandOption) => {
    const buildCommand = new BuildCommand(options);
    try {
      buildCommand.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
