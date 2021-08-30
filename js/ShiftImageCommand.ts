import fs from 'fs-extra';
import { Command } from 'commander';
import { createCanvas, Image } from 'canvas';

/**
 * npx ts-node .\js\ShiftImageCommand.ts --source=.\src\path\to\file.png
 */
const runner = new Command('build');
runner
  .description('画像分割')
  .option('-i, --inputSize <pixcel>', 'Split size', '128')
  .option('-o, --outputSize <pixcel>', 'Split size', '256')
  .option('-s, --source <directory>', 'Source directory path')
  .action((options: { inputSize: string, outputSize: number, source: string }) => {
    const inputSize = Number(options.inputSize);
    const outputSize = Number(options.outputSize);
    const source = options.source;
    console.log({ inputSize, outputSize, source });
    createImage(source)
      .then(image =>
        shiftImage(image, inputSize, outputSize, source.replace('.png', '_shift.png')))
      .catch(e => console.log({ e }))
  })
  .showHelpAfterError()
  .parse();


function createImage(filepath: string): Promise<Image> {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = filepath;
  });
}
function shiftImage(image: Image, is: number = 128, os: number = 256, output: string): void {
  const n = (image.width - is * 2) / is;
  if (!Number.isInteger(n)) {
    throw new Error("invalid size:" + n);
  }

  const w = os * (n + 1) * 2;
  const h = image.height;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  for (let index = 0; index <= n; index++) {
    const [sx, sy, sw, sh] = [index * is / 2, index * is / 4, is, h - index * is / 4];
    const [dx, dy] = [index * os, 0];
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, sw, sh);
  }
  for (let index = 0; index <= n; index++) {
    const [sx, sy, sw, sh] = [image.width / 2 + index * is / 2, (n - index) * is / 4, is, h - index * is / 4];
    const [dx, dy] = [w / 2 + index * os, 0];
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, sw, sh);
  }
  fs.ensureFileSync(output);
  fs.writeFileSync(output, canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
}
