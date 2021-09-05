import { Command } from 'commander';
import ImageManager from './managers/ImageManager';

/**
 * npx ts-node .\js\ShiftImageCommand.ts --source=.\src\path\to\file.png
 */
const runner = new Command('build');
runner
  .description('画像分割')
  .option('-i, --inputSize <pixcel>', 'Split size', '128')
  .option('-o, --outputSize <pixcel>', 'Split size', '256')
  .option('-s, --source <directory>', 'Source file path')
  .action(async (options: { inputSize: string, outputSize: number, source: string }) => {
    const inputSize = Number(options.inputSize);
    const outputSize = Number(options.outputSize);
    const source = options.source;

    const imageManager = new ImageManager();

    await imageManager.shiftImage(source, inputSize, outputSize, source.replace('.png', '_shift.png'));
  })
  .showHelpAfterError()
  .parse();
