import { Command } from 'commander';
import { serveCommandOption } from './interface';
import Serve from './libs/Serve';

require('dotenv').config();

const runner = new Command('build');
runner
  .description('ソースファイルの更新を監視して自動ビルド、検証用シムトラを起動します。')
  .option('-d, --definition <file>', 'Definition file path', './src/definitions.js')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './dist')
  .option('-p, --paklib <file>', 'Output pak file library path', 'dev.pak')
  .action((options: serveCommandOption) => {
    const command = new Serve(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
