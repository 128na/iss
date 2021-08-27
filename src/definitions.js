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
    pakFile: 'iss_way_road.pak',
    datFiles: ['way/road/ground.dat', 'way/road/elevated.dat'],
    imageSet: {
      'way/road/rg_0030.png': ['way/road/0030_base.png', 'way/road/0030_ground.png', 'way/road/0030_noise.png'],
      'way/road/rg_0050.png': ['way/road/0050_base.png', 'way/road/0050_ground.png', 'way/road/0050_noise.png'],
      'way/road/rg_0080.png': ['way/road/0100_base.png', 'way/road/0080_ground.png', 'way/road/0100_noise.png'],
      'way/road/rg_0120.png': ['way/road/0100_base.png', 'way/road/0120_ground.png', 'way/road/0100_noise.png'],
      'way/road/rg_1200.png': ['way/road/1200_base.png', 'way/road/1200_ground.png', 'way/road/1200_noise.png'],
      'way/road/re_0030.png': ['way/road/0030_base.png', 'way/road/0030_elevated.png', 'way/road/0030_noise.png'],
      'way/road/re_0050.png': ['way/road/0050_base.png', 'way/road/0050_elevated.png', 'way/road/0050_noise.png'],
      'way/road/re_0080.png': ['way/road/0100_base.png', 'way/road/0080_elevated.png', 'way/road/0100_noise.png'],
      'way/road/re_0120.png': ['way/road/0100_base.png', 'way/road/0120_elevated.png', 'way/road/0100_noise.png'],
      'way/road/re_1200.png': ['way/road/1200_base.png', 'way/road/1200_elevated.png', 'way/road/1200_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_tunnel_road.pak',
    datFiles: ['tunnel/road/tunnel.dat'],
    imageSet: {
      'tunnel/road/rt_1200.png': ['tunnel/road/1200_base.png', 'tunnel/road/1200.png', 'tunnel/road/1200_noise.png'],
      'tunnel/road/rt_0120.png': ['tunnel/road/0120_base.png', 'tunnel/road/0120.png', 'tunnel/road/0120_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_sign_road.pak',
    datFiles: ['sign/road/sign.dat'],
    imageSet: {
      'sign/road/sign1.png': ['sign/road/sign1.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_way-object_road.pak',
    datFiles: ['way-object/road/wall.dat'],
    imageSet: {
      'way-object/road/wall.png': ['way-object/road/wall_base.png', 'way-object/road/wall.png', 'way-object/road/wall_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_way_tram.pak',
    datFiles: ['way/tram/pier.dat'],
    imageSet: {
      'way/tram/pier1.png': ['way/tram/pier1_base.png', 'way/tram/pier1.png', 'way/tram/pier1_noise.png'],
    }
  },
];
