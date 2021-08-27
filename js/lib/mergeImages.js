// https://www.npmjs.com/package/merge-images#nodejs-usage
const { Image, createCanvas } = require('canvas');
const fs = require('fs-extra');
const specialColorReplace = require('./specialColorReplace');

const SPECIAL_KEYWORD = 'special_color.png';

module.exports = async function (output, imageFiles = []) {
  const hasSpecialImage = imageFiles[imageFiles.length - 1].includes(SPECIAL_KEYWORD);
  const images = await Promise.all(imageFiles.map(createImage));

  const canvas = mergeImages(images, hasSpecialImage);

  write(output, canvas.toDataURL());
};

/**
 * @param {string} filename
 * @param {string} dateUri
 */
function write(filename, dateUri) {
  fs.ensureFileSync(filename);
  // https://gist.github.com/miguelmota/4e9864f182c053d7a51d
  fs.writeFileSync(filename, dateUri.replace(/^data:image\/png;base64,/, ''), 'base64');
}

/**
 * @param {string} filepath
 * @returns {Promise<Image>}
 */
async function createImage(filepath) {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = filepath;
  });
}

/**
 * @param {array} images
 * @param {boolean} hasSpecialImage
 * @returns {Canvas}
 */
function mergeImages(images, hasSpecialImage = false) {
  if (hasSpecialImage) {
    const special = images.pop();
  }
  const canvas = createCanvas(images[0].width, images[0].height);
  const ctx = canvas.getContext('2d');
  images.map(img => ctx.drawImage(img, 0, 0));

  specialColorReplace(canvas);

  if (hasSpecialImage) {
    ctx.drawImage(images[images.length - 1], 0, 0);
  }

  return canvas;
}
