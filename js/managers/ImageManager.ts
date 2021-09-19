import fs from 'fs-extra';
import { Canvas, createCanvas, Image, loadImage } from 'canvas';
import { eraseColor, mergeImage, replaceSpecialColor, shiftImage, splitImage } from 'simutrans-image-util';

export default class ImageManager {
  static SPECIAL_KEYWORD = 'special_color.png';
  static ERASE_KEYWORD = 'erase_color.png';
  static ERASE_COLOR = '255,0,0';

  public async merge(output: string, sources: string[]): Promise<void> {
    let canvas;
    let ctx;

    for (const source of sources) {
      const image = await loadImage(source);
      if (!canvas || !ctx) {
        canvas = createCanvas(image.width, image.height);
        ctx = canvas.getContext('2d');
      }
      ctx.drawImage(image, 0, 0);

      if (!source.endsWith(ImageManager.SPECIAL_KEYWORD)) {
        replaceSpecialColor(canvas);
      }
      if (source.endsWith(ImageManager.ERASE_KEYWORD)) {
        eraseColor(canvas, ImageManager.ERASE_COLOR);
      }
    }
    if (canvas) {
      this.write(output, canvas.toDataURL());
    }
  }

  private write(output: string, dataURI: string): void {
    fs.ensureFileSync(output);
    fs.writeFileSync(output, dataURI.replace(/^data:image\/png;base64,/, ''), 'base64');
  }

  public async shiftImage(source: string, is: number = 128, os: number = 256, output: string): Promise<void> {
    const image = await loadImage(source);
    const canvas = shiftImage(image, is, os);

    fs.ensureFileSync(output);
    fs.writeFileSync(output, canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
  }

  public async splitImage(source: string, size: number = 128): Promise<void> {
    const image = await loadImage(source);

    splitImage(image, size, (canvas, x, y) => {
      const filepath = source.replace('.png', `_${y}.${x}.png`);
      fs.ensureFileSync(filepath);
      fs.writeFileSync(filepath, canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
    });
  }
}
