import fs from 'fs-extra';
import { Canvas, createCanvas, Image, loadImage } from 'canvas';

export default class ImageManager {
  static SPECIAL_KEYWORD = 'special_color.png';
  static SPECIAL_COLORS: string[] = [
    '107,107,107',
    '155,155,155',
    '179,179,179',
    '201,201,201',
    '223,223,223',
    '87,101,111',
    '127,155,241',
    '255,255,83',
    '255,33,29',
    '1,221,1',
    '227,227,255',
    '193,177,209',
    '77,77,77',
    '255,1,127',
    '1,1,255',
    '36,75,103',
    '57,94,124',
    '76,113,145',
    '96,132,167',
    '116,151,189',
    '136,171,211',
    '156,190,233',
    '176,210,255',
    '123,88,3',
    '142,111,4',
    '161,134,5',
    '180,157,7',
    '198,180,8',
    '217,203,10',
    '236,226,11',
    '255,249,13',
  ];
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
    const canvas = createCanvas(images[0].width, images[0].height);
    const ctx = canvas.getContext('2d');
    images.map(img => ctx.drawImage(img, 0, 0));

    this.replaceSpecialColor(canvas);

    if (hasSpecialImage && special) {
      ctx.drawImage(special, 0, 0);
    }

    return canvas;
  }

  private replaceSpecialColor(canvas: Canvas): void {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const color = [data[i], data[i + 1], data[i + 2]].join(',');

      if (ImageManager.SPECIAL_COLORS.includes(color)) {
        [data[i], data[i + 1], data[i + 2]] = [
          Math.min(255, data[i] + 1),
          Math.min(255, data[i + 1] + 1),
          Math.min(255, data[i + 2] + 1),
        ];
      }
      if (color === ImageManager.ERASE_COLOR) {
        data[i + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }
}
