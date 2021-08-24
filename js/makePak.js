const mergeImages = require('./lib/mergeImages');
const pak = require('./lib/pak');
const copyFile = require('./lib/copyFile');
const emptyDir = require('./lib/emptyDir');


const logger = (message, ...args) => {
  const d = new Date();
  console.log(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] ------ ${message} ------`, ...args);
}
/**
 * 画像レイヤをマージしてpak化する
 * @param {string} makeobjPath makobjのパス
 * @param {string} targetDir ソースディレクトリ
 * @param {string} outputDir 出力ディレクトリ
 * @param {array} definitions dat定義配列
 * @param {string} mergePakFile 出力ファイル名
 * @returns
 */
module.exports = async function (makeobjPath, targetDir, outputDir, definitions) {
  logger('emptyDir', outputDir);
  emptyDir(outputDir);
  const pakFiles = await Promise.all(definitions.map(async def => {
    // 画像をマージして出力
    await Promise.all(Object.entries(def.imageSet).map(([key, value]) => {
      logger('mergeImages', key, value);
      return mergeImages(`${outputDir}/${key}`, value.map(v => `${targetDir}/${v}`))
    }));

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
