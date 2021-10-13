import { Builder } from "./libs/Builder";
import { Command } from 'commander';
import { buildCommandOption } from './interface';
require('dotenv').config();

const runner = new Command('build');
runner
  .description('ソースファイルをビルドします。')
  .option('-d, --definition <file>', 'Definition file path', './src/definitions.js')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './dist')
  .option('-b, --batch ', 'generate batch file', false)
  .action((options: buildCommandOption) => {
    const command = new Builder(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
