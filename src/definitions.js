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
    pakFile: 'iss_road.pak',
    datFiles: ['rg.dat', 're.dat'],
    imageSet: {
      'rg_0030.png': ['r_0030.png', 'rg_0030.png', 'r_0030_n.png'],
      'rg_0050.png': ['r_0050.png', 'rg_0050.png', 'r_0050_n.png'],
      'rg_0080.png': ['r_0100.png', 'rg_0080.png', 'r_0100_n.png'],
      'rg_0120.png': ['r_0100.png', 'rg_0120.png', 'r_0100_n.png'],
      'rg_1200.png': ['r_1200.png', 'rg_1200.png', 'r_1200_n.png'],
      're_0030.png': ['r_0030.png', 're_0030.png', 'r_0030_n.png'],
      're_0050.png': ['r_0050.png', 're_0050.png', 'r_0050_n.png'],
      're_0080.png': ['r_0100.png', 're_0080.png', 'r_0100_n.png'],
      're_0120.png': ['r_0100.png', 're_0120.png', 'r_0100_n.png'],
      're_1200.png': ['r_1200.png', 're_1200.png', 'r_1200_n.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_sign.pak',
    datFiles: ['sign.dat'],
    imageSet: {
      'sign1.png': ['sign1.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road-object.pak',
    datFiles: ['rw.dat'],
    imageSet: {
      'r_wall.png': ['r_wall.png'],
    }
  }
];
