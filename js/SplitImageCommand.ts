import { Command } from 'commander';
import ImageManager from './libs/ImageManager';

/**
 * npx ts-node .\js\SplitImageCommand.ts --source=.\src\path\to\file.png
 */
const runner = new Command('build');
runner
  .description('画像分割')
  .option('-i, --inputSize <pixcel>', 'Split size', '128')
  .option('-s, --source <directory>', 'Source file path')
  .action(async (options: { inputSize: string, source: string }) => {
    const inputSize = Number(options.inputSize);
    const source = options.source;

    const imageManager = new ImageManager();

    await imageManager.splitImage(source, inputSize);
  })
  .showHelpAfterError()
  .parse();
