/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = [
  {
    size: 256,
    pakFile: 'iss_road_way.pak',
    datFiles: ['way/road/ground.dat', 'way/road/elevated.dat'],
    imageSet: {
      'way/road/ground_0030.png': ['way/road/0030_base.png', 'way/road/0030_ground.png', 'way/road/0030_noise.png'],
      'way/road/ground_0050.png': ['way/road/0050_base.png', 'way/road/0050_ground.png', 'way/road/0050_noise.png'],
      'way/road/ground_0080.png': ['way/road/0100_base.png', 'way/road/0080_ground.png', 'way/road/0100_noise.png'],
      'way/road/ground_0120.png': ['way/road/0100_base.png', 'way/road/0120_ground.png', 'way/road/0100_noise.png'],
      'way/road/ground_1200.png': ['way/road/1200_base.png', 'way/road/1200_ground.png', 'way/road/1200_noise.png'],
      'way/road/elevated_0030.png': ['way/road/0030_base.png', 'way/road/0030_elevated.png', 'way/road/0030_noise.png'],
      'way/road/elevated_0050.png': ['way/road/0050_base.png', 'way/road/0050_elevated.png', 'way/road/0050_noise.png'],
      'way/road/elevated_0080.png': ['way/road/0100_base.png', 'way/road/0080_elevated.png', 'way/road/0100_noise.png'],
      'way/road/elevated_0120.png': ['way/road/0100_base.png', 'way/road/0120_elevated.png', 'way/road/0100_noise.png'],
      'way/road/elevated_1200.png': ['way/road/1200_base.png', 'way/road/1200_elevated.png', 'way/road/1200_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_tunnel.pak',
    datFiles: ['tunnel/road/tunnel.dat'],
    imageSet: {
      'tunnel/road/1200.png': ['tunnel/road/1200_base.png', 'tunnel/road/1200.png', 'tunnel/road/1200_noise.png'],
      'tunnel/road/0120.png': ['tunnel/road/0120_base.png', 'tunnel/road/0120.png', 'tunnel/road/0120_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_sign.pak',
    datFiles: ['roadsign/road/sign1.dat', 'roadsign/road/sign2.dat'],
    imageSet: {
      'roadsign/road/sign1.png': ['roadsign/road/sign1.png'],
      'roadsign/road/sign2.png': ['roadsign/road/sign2.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_way-object.pak',
    datFiles: ['way-object/road/wall.dat'],
    imageSet: {
      'way-object/road/wall.png': ['way-object/road/wall_base.png', 'way-object/road/wall.png', 'way-object/road/wall_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_tram_way.pak',
    datFiles: ['way/tram/pier.dat'],
    imageSet: {
      'way/tram/pier1.png': ['way/tram/pier1_base.png', 'way/tram/pier1.png', 'way/tram/pier1_noise.png'],
      'way/tram/pier2.png': ['way/tram/pier2_base.png', 'way/tram/pier2.png', 'way/tram/pier2_noise.png'],
      'way/tram/pier3.png': ['way/tram/pier3_base.png', 'way/tram/pier3.png', 'way/tram/pier3_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_track_way.pak',
    datFiles: ['way/track/pier.dat'],
    imageSet: {
      'way/track/pier1.png': ['way/track/pier1_base.png', 'way/track/pier1.png', 'way/track/pier1_noise.png'],
      'way/track/pier2.png': ['way/track/pier2_base.png', 'way/track/pier2.png', 'way/track/pier2_noise.png'],
      'way/track/pier3.png': ['way/track/pier3_base.png', 'way/track/pier3.png', 'way/track/pier3_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_track_way_bridge.pak',
    datFiles: ['way/track/bridge.dat'],
    imageSet: {
      'way/track/bridge1.png': ['way/track/bridge1_base_shift.png', 'way/track/bridge1_shift.png', 'way/track/bridge1_base_shift_noise.png'],
      'way/track/bridge_icon.png': ['way/track/bridge_icon_base.png', 'way/track/bridge_icon.png', 'way/track/bridge_icon_noise.png'],
    }
  },
];
