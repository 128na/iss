const mergeImages = require('./lib/mergeImages');
const pak = require('./lib/pak');
const copyFile = require('./lib/copyFile');


const logger = (message, ...args) => {
  const d = new Date();
  console.log(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] ------ ${message} ------`, ...args);
}

const fs = require('fs');
class FileUpdateManager {
  constructor() {
    this.fileSet = { };
  }

  put(filepath) {
    const current = fs.lstatSync(filepath).mtime;
    this.fileSet[filepath] = current;
  }
  updated(filepath) {
    const old = this.fileSet[filepath] || false;
    if (!old) {
      return true;
    }
    const current = fs.lstatSync(filepath).mtime;
    return current > old;
  }
}
const fileUpdateManager = new FileUpdateManager();

/**
 * 画像レイヤをマージしてpak化する
 * @param {string} makeobjPath makobjのパス
 * @param {string} targetDir ソースディレクトリ
 * @param {string} outputDir 出力ディレクトリ
 * @param {array} definitions dat定義配列
 * @returns
 */
module.exports = async function (makeobjPath, targetDir, outputDir, definitions) {
  const pakFiles = await Promise.all(definitions.map(async def => {
    // 画像をマージして出力
    for (const [key, value] of Object.entries(def.imageSet)) {
      if (value.some(v => fileUpdateManager.updated(`${targetDir}/${v}`))) {
        value.map(v => fileUpdateManager.put(`${targetDir}/${v}`));
        logger('mergeImages', key, value);
        await mergeImages(`${outputDir}/${key}`, value.map(v => `${targetDir}/${v}`))
      }
    }

    // datコピー
    const datFiles = def.datFiles.map(d => {
      const dir = `${outputDir}/${d}`;
      copyFile(`${targetDir}/${d}`, dir);
      return dir;
    });
    logger('copyFile', datFiles);

    // 定義単位でpak化
    const pakFile = `${outputDir}/${def.pakFile}`;
    logger('pak', pakFile, datFiles);
    pak(makeobjPath, def.size, pakFile, datFiles);
    return pakFile;
  }));
  return pakFiles;
};
