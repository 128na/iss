import fs from 'fs-extra';
import { Image, loadImage } from 'canvas';
import { mergeImage, shiftImage, splitImage } from 'simutrans-image-util';

export default class ImageManager {
  static SPECIAL_KEYWORD = 'special_color.png';
  static ERASE_KEYWORD = 'erase_color.png';
  static ERASE_COLOR = '255,0,0';

  public async merge(output: string, sources: string[]): Promise<void> {
    let images: Image[] = [];
    let canvas;

    for (const source of sources) {
      images.push(await loadImage(source));
      const special = source.endsWith(ImageManager.SPECIAL_KEYWORD);
      const erase = source.endsWith(ImageManager.ERASE_KEYWORD);

      if (special || erase) {
        canvas = mergeImage(images, {
          canvas,
          replaceSpecialColor: special,
          eraseColor: erase ? ImageManager.ERASE_COLOR : undefined,
        });
        images = [];
      }
    }

    if (images.length) {
      canvas = mergeImage(images, {
        canvas,
        replaceSpecialColor: true,
        eraseColor: ImageManager.ERASE_COLOR,
        eraseTransparent: false
      });
    }
    if (canvas) {
      this.write(output, canvas.toDataURL());
    } else {
      throw new Error("missing canvas");
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
