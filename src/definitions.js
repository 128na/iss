/*
  size: pak化時のサイズ,
  pakFile: 出力ファイル名,
  datFiles: datファイル名配列,
  imageSet: {
    出力画像名: マージ画像配列(後->前の順),
  }
*/
module.exports = [
  {
    size: 256,
    pakFile: 'road.pak',
    datFiles: ['road.dat'],
    imageSet: {
      'rg_0030.png': [/**'rg_0030_b.png',**/ 'rg_0030_f.png'],
      'rg_0050.png': [/**'rg_0050_b.png',**/ 'rg_0050_f.png'],
      'rg_0100.png': [/**'rg_0100_b.png',**/ 'rg_0100_f.png'],
      'rg_1200.png': [/**'rg_1200_b.png',**/ 'rg_1200_f.png'],
    }
  }
];
