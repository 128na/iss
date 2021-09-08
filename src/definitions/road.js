/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = [
  {
    size: 256,
    pakFile: 'iss_road_way.pak',
    datFiles: ['road/way/ground.dat', 'road/way/elevated.dat'],
    imageSet: {
      'icon.png': ['icon.png', 'icon_erase.png'],
      'road/way/0030.png': ['road/way/0030_base.png', 'road/way/0030.png', 'road/way/0030_noise.png', 'road/way/overwrite.png'],
      'road/way/0050.png': ['road/way/0050_base.png', 'road/way/0050.png', 'road/way/0050_noise.png', 'road/way/overwrite.png'],
      'road/way/0080.png': ['road/way/0100_base.png', 'road/way/0080.png', 'road/way/0100_noise.png', 'road/way/overwrite.png'],
      'road/way/0120.png': ['road/way/0100_base.png', 'road/way/0120.png', 'road/way/0100_noise.png', 'road/way/overwrite.png'],
      'road/way/1200.png': ['road/way/1200_base.png', 'road/way/1200.png', 'road/way/1200_noise.png', 'road/way/overwrite.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_tunnel.pak',
    datFiles: ['road/tunnel/tunnel.dat'],
    imageSet: {
      'icon.png': ['icon.png', 'icon_erase.png'],
      'road/tunnel/1200.png': ['road/tunnel/1200_base.png', 'road/tunnel/1200.png', 'road/tunnel/1200_noise.png'],
      'road/tunnel/0120.png': ['road/tunnel/0120_base.png', 'road/tunnel/0120.png', 'road/tunnel/0120_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_sign.pak',
    datFiles: ['road/roadsign/sign1.dat', 'road/roadsign/sign2.dat'],
    imageSet: {
      'icon.png': ['icon.png', 'icon_erase.png'],
      'road/roadsign/sign1.png': ['road/roadsign/sign1.png'],
      'road/roadsign/sign2.png': ['road/roadsign/sign2.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_way-object.pak',
    datFiles: ['road/way-object/wall.dat'],
    imageSet: {
      'icon.png': ['icon.png', 'icon_erase.png'],
      'road/way-object/wall.png': ['road/way-object/wall_base.png', 'road/way-object/wall.png', 'road/way-object/wall_noise.png'],
    }
  },
];
