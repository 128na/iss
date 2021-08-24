// https://www.npmjs.com/package/merge-images#nodejs-usage
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
const fs = require('fs');

module.exports = async function (output, images = []) {
  try {
    const base64 = await mergeImages(images, { Canvas, Image });
    // https://gist.github.com/miguelmota/4e9864f182c053d7a51d
    const raw = base64.replace(/^data:image\/png;base64,/, '');
    return fs.writeFileSync(output, raw, 'base64');
  } catch (e) {
    console.error(e.message);
  }
};
