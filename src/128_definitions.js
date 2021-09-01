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
      'way/road/ground_0030.png': ['way/road/128_0030_base.png', 'way/road/128_0030_ground.png', 'way/road/128_0030_noise.png'],
      'way/road/ground_0050.png': ['way/road/128_0050_base.png', 'way/road/128_0050_ground.png', 'way/road/128_0050_noise.png'],
      'way/road/ground_0080.png': ['way/road/128_0100_base.png', 'way/road/128_0080_ground.png', 'way/road/128_0100_noise.png'],
      'way/road/ground_0120.png': ['way/road/128_0100_base.png', 'way/road/128_0120_ground.png', 'way/road/128_0100_noise.png'],
      'way/road/ground_1200.png': ['way/road/128_1200_base.png', 'way/road/128_1200_ground.png', 'way/road/128_1200_noise.png'],
      'way/road/elevated_0030.png': ['way/road/128_0030_base.png', 'way/road/128_0030_elevated.png', 'way/road/128_0030_noise.png'],
      'way/road/elevated_0050.png': ['way/road/128_0050_base.png', 'way/road/128_0050_elevated.png', 'way/road/128_0050_noise.png'],
      'way/road/elevated_0080.png': ['way/road/128_0100_base.png', 'way/road/128_0080_elevated.png', 'way/road/128_0100_noise.png'],
      'way/road/elevated_0120.png': ['way/road/128_0100_base.png', 'way/road/128_0120_elevated.png', 'way/road/128_0100_noise.png'],
      'way/road/elevated_1200.png': ['way/road/128_1200_base.png', 'way/road/128_1200_elevated.png', 'way/road/128_1200_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_tunnel.pak',
    datFiles: ['tunnel/road/tunnel.dat'],
    imageSet: {
      'tunnel/road/1200.png': ['tunnel/road/128_1200_base.png', 'tunnel/road/128_1200.png', 'tunnel/road/128_1200_noise.png'],
      'tunnel/road/0120.png': ['tunnel/road/128_0120_base.png', 'tunnel/road/128_0120.png', 'tunnel/road/128_0120_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_sign.pak',
    datFiles: ['roadsign/road/sign1.dat', 'roadsign/road/sign2.dat'],
    imageSet: {
      'roadsign/road/sign1.png': ['roadsign/road/128_sign1.png'],
      'roadsign/road/sign2.png': ['roadsign/road/128_sign2.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_way-object.pak',
    datFiles: ['way-object/road/wall.dat'],
    imageSet: {
      'way-object/road/wall.png': ['way-object/road/128_wall_base.png', 'way-object/road/128_wall.png', 'way-object/road/128_wall_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_tram_way.pak',
    datFiles: ['way/tram/pier.dat', 'way/tram/round_about.dat'],
    imageSet: {
      'way/tram/pier1.png': ['way/tram/128_pier1_base.png', 'way/tram/128_pier1.png', 'way/tram/128_pier1_noise.png'],
      'way/tram/pier2.png': ['way/tram/128_pier2_base.png', 'way/tram/128_pier2.png', 'way/tram/128_pier2_noise.png'],
      'way/tram/pier3.png': ['way/tram/128_pier3_base.png', 'way/tram/128_pier3.png', 'way/tram/128_pier3_noise.png'],
      'way/tram/round_about.png': ['way/tram/128_round_about_base.png', 'way/tram/128_round_about.png', 'way/tram/128_round_about_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_track_way.pak',
    datFiles: ['way/track/pier.dat'],
    imageSet: {
      'way/track/pier1.png': ['way/track/128_pier1_base.png', 'way/track/128_pier1.png', 'way/track/128_pier1_noise.png'],
      'way/track/pier2.png': ['way/track/128_pier2_base.png', 'way/track/128_pier2.png', 'way/track/128_pier2_noise.png'],
      'way/track/pier3.png': ['way/track/128_pier3_base.png', 'way/track/128_pier3.png', 'way/track/128_pier3_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_track_way_bridge.pak',
    datFiles: ['way/track/bridge.dat'],
    imageSet: {
      'way/track/bridge1.png': ['way/track/128_bridge1_base_shift.png', 'way/track/128_bridge1_shift.png', 'way/track/128_bridge1_base_shift_noise.png'],
      'way/track/bridge_icon.png': ['way/track/128_bridge_icon_base.png', 'way/track/128_bridge_icon.png', 'way/track/128_bridge_icon_noise.png'],
    }
  },
];
