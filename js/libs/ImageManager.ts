import fs from 'fs-extra';
import { Image, loadImage } from 'canvas';
import { eraseTransparent, mergeImage, shiftImage, splitImage } from 'simutrans-image-util';

export default class ImageManager {
  private specialKeyword: string;
  private eraseKeyword: string;
  private eraseColor: string;
  private keepTransparentKeyword: string;
  private eraseTransparentThreshold: number;
  private edgeOnlyKeyword: string;

  constructor(
    specialKeyword = '_sc.png',
    eraseKeyword = '_ec.png',
    eraseColor = '255,0,0',
    keepTransparentKeyword = '_kt.png',
    eraseTransparentThreshold: string | number = 0.1,
    edgeOnlyKeyword = '_ed.png',
  ) {
    this.specialKeyword = specialKeyword;
    this.eraseKeyword = eraseKeyword;
    this.eraseColor = eraseColor;
    this.keepTransparentKeyword = keepTransparentKeyword;
    this.eraseTransparentThreshold = Number(eraseTransparentThreshold);
    this.edgeOnlyKeyword = edgeOnlyKeyword;
  }

  public async merge(output: string, sources: string[]) {
    let images: Image[] = [];
    let canvas;

    for (const source of sources) {
      images.push(await loadImage(source));
      const special = source.endsWith(this.specialKeyword);
      const erase = source.endsWith(this.eraseKeyword);

      if (special || erase) {
        canvas = mergeImage(images, {
          canvas,
          replaceSpecialColor: !special,
          eraseColor: erase ? this.eraseColor : undefined,
          eraseTransparentThreshold: this.eraseTransparentThreshold,
        });
        images = [];
      }
    }

    if (images.length) {
      canvas = mergeImage(images, {
        canvas,
        replaceSpecialColor: true,
        eraseColor: this.eraseColor,
      });
    }
    if (canvas) {
      if (output.endsWith(this.keepTransparentKeyword)) {
        return this.write(output, canvas.toDataURL());
      }
      if (output.endsWith(this.edgeOnlyKeyword)) {
        eraseTransparent(canvas, this.eraseTransparentThreshold, true);
        return this.write(output, canvas.toDataURL());
      }
      eraseTransparent(canvas, this.eraseTransparentThreshold);
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
