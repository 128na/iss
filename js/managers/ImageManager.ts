import fs from 'fs-extra';
import { Canvas, createCanvas, Image } from 'canvas';

export default class ImageManager {
  static SPECIAL_KEYWORD = 'special_color.png';
  static SPECIAL_COLORS: { [index: string]: [number, number, number] } = {
    '107,107,107': [108, 108, 108],
    '155,155,155': [156, 156, 156],
    '179,179,179': [180, 180, 180],
    '201,201,201': [202, 202, 202],
    '223,223,223': [224, 224, 224],
    '87,101,111': [88, 102, 112],
    '127,155,241': [128, 156, 242],
    '255,255,83': [255, 255, 84],
    '255,33,29': [255, 34, 30],
    '1,221,1': [2, 222, 2],
    '227,227,255': [228, 228, 255],
    '193,177,209': [194, 178, 210],
    '77,77,77': [78, 78, 78],
    '255,1,127': [255, 2, 128],
    '1,1,255': [2, 2, 255],
    '36,75,103': [37, 76, 104],
    '57,94,124': [58, 95, 125],
    '76,113,145': [77, 114, 146],
    '96,132,167': [97, 133, 168],
    '116,151,189': [117, 152, 190],
    '136,171,211': [137, 172, 212],
    '156,190,233': [157, 191, 234],
    '176,210,255': [177, 211, 255],
    '123,88,3': [124, 89, 4],
    '142,111,4': [143, 112, 5],
    '161,134,5': [162, 135, 6],
    '180,157,7': [181, 158, 8],
    '198,180,8': [199, 181, 9],
    '217,203,10': [218, 204, 11],
    '236,226,11': [237, 227, 12],
    '255,249,13': [255, 250, 14],
  };

  public async merge(output: string, sources: string[]): Promise<void> {
    const hasSpecialImage = sources[sources.length - 1].includes(ImageManager.SPECIAL_KEYWORD);
    const images = await Promise.all(sources.map(this.createImage));
    const canvas = this.mergeImages(images, hasSpecialImage);

    this.write(output, canvas.toDataURL());
  }

  private write(output: string, dataURI: string): void {
    fs.ensureFileSync(output);
    fs.writeFileSync(output, dataURI.replace(/^data:image\/png;base64,/, ''), 'base64');
  }

  private createImage(filepath: string): Promise<Image> {
    return new Promise((resolve, reject) => {
      const img = new Image;
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = filepath;
    });
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

      if (ImageManager.SPECIAL_COLORS[color]) {
        [data[i], data[i + 1], data[i + 2]] = ImageManager.SPECIAL_COLORS[color];
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }
}
