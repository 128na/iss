import fs from 'fs-extra';
import { Canvas, Image, loadImage } from 'canvas';
import { mergeImage, replaceSpecialColor, shiftImage, splitImage } from 'simutrans-image-util';

export default class ImageManager {
  static SPECIAL_KEYWORD = 'special_color.png';
  static ERASE_COLOR = '255,0,0';

  public async merge(output: string, sources: string[]): Promise<void> {
    const hasSpecialImage = sources[sources.length - 1].includes(ImageManager.SPECIAL_KEYWORD);
    const images = await Promise.all(sources.map(loadImage));
    const canvas = this.mergeImages(images, hasSpecialImage);

    this.write(output, canvas.toDataURL());
  }

  private write(output: string, dataURI: string): void {
    fs.ensureFileSync(output);
    fs.writeFileSync(output, dataURI.replace(/^data:image\/png;base64,/, ''), 'base64');
  }

  private mergeImages(images: Image[], hasSpecialImage = false): Canvas {
    const special = hasSpecialImage ? images.pop() : undefined;

    // 画像サイズはすべて同じ想定
    const canvas = mergeImage(images);
    replaceSpecialColor(canvas);

    if (hasSpecialImage && special) {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(special, 0, 0);
    }

    return canvas;
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
