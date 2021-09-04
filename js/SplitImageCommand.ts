import fs from 'fs-extra';
import { Command } from 'commander';
import { createCanvas, Image, loadImage } from 'canvas';

/**
 * npx ts-node .\js\SplitImageCommand.ts --source=.\src\path\to\file.png
 */
const runner = new Command('build');
runner
  .description('画像分割')
  .option('-i, --inputSize <pixcel>', 'Split size', '128')
  .option('-s, --source <directory>', 'Source file path')
  .action((options: { inputSize: string, source: string }) => {
    const inputSize = Number(options.inputSize);
    const source = options.source;
    console.log({ inputSize, source });
    loadImage(source)
      .then(image => splitImage(image, inputSize, source))
      .catch(e => console.log({ e }))
  })
  .showHelpAfterError()
  .parse();

function splitImage(image: Image, size: number = 128, output: string): void {
  const [width, height] = [image.width, image.height];

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, -x, -y);

      const filepath = output.replace('.png', `_${y}.${x}.png`);
      fs.ensureFileSync(filepath);
      fs.writeFileSync(filepath, canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
    }
  }
}
