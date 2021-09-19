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
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'road/way/0030.png': ['road/way/0030_base.png', 'road/way/0030.png', 'road/way/0030_noise.png', 'road/way/erase_color.png'],
      'road/way/0050.png': ['road/way/0050_base.png', 'road/way/0050.png', 'road/way/0050_noise.png', 'road/way/erase_color.png'],
      'road/way/0060.png': ['road/way/0060_base.png', 'road/way/0060.png', 'road/way/0100_noise.png', 'road/way/erase_color.png'],
      'road/way/0080.png': ['road/way/0100_base.png', 'road/way/0080.png', 'road/way/0100_noise.png', 'road/way/erase_color.png'],
      'road/way/0120.png': ['road/way/0100_base.png', 'road/way/0120.png', 'road/way/0100_noise.png', 'road/way/erase_color.png'],
      'road/way/1200.png': ['road/way/1200_base.png', 'road/way/1200.png', 'road/way/1200_noise.png', 'road/way/erase_color.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_tunnel.pak',
    datFiles: [
      'road/tunnel/tunnel.dat',
      'road/tunnel/underground.dat',
    ],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'road/tunnel/1200.png': ['road/tunnel/1200_base.png', 'road/tunnel/1200.png', 'road/tunnel/1200_noise.png'],
      'road/tunnel/0120.png': ['road/tunnel/0120_base.png', 'road/tunnel/0120.png', 'road/tunnel/0120_noise.png'],
      'road/tunnel/0120_under.png': ['road/tunnel/0120_under_base.png', 'road/tunnel/0120_under.png', 'road/tunnel/0120_under_noise.png'],
      'road/tunnel/1200_under.png': ['road/tunnel/1200_under_base.png', 'road/tunnel/1200_under.png', 'road/tunnel/1200_under_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_sign.pak',
    datFiles: ['road/roadsign/sign1.dat', 'road/roadsign/sign2.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'road/roadsign/sign1.png': ['road/roadsign/sign1.png'],
      'road/roadsign/sign2.png': ['road/roadsign/sign2.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_way-object.pak',
    datFiles: [
      'road/way-object/wall.dat',
      'road/way-object/center_divider.dat',
      'road/way-object/wall_with_center_divider.dat',
    ],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'road/way-object/wall_back.png': ['road/way-object/wall_back_base.png', 'road/way-object/wall_back.png', 'road/way-object/wall_back_noise.png'],
      'road/way-object/wall_front.png': ['road/way-object/wall_front_base.png', 'road/way-object/wall_front.png', 'road/way-object/wall_front_noise.png'],
      'road/way-object/center_divider_back.png': ['road/way-object/center_divider_back.png'],
      'road/way-object/center_divider_front.png': ['road/way-object/center_divider_front.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_rail_way.pak',
    datFiles: [
      'rail/way/narrow.dat',
      'rail/way/tram.dat',
      'rail/way/track_wood.dat',
      'rail/way/track_concrete.dat',
      'rail/way/track_ladder.dat',
      'rail/way/track_ffu.dat',
      'rail/way/track_slab.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_erase_color.png'],
      'rail/way/narrow.png': ['rail/way/narrow.png'],
      'rail/way/standard.png': ['rail/way/standard.png'],
      'rail/way/standard_wood_single.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/single_erase_color.png'],
      'rail/way/standard_wood_front.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/front_erase_color.png'],
      'rail/way/standard_wood_center.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/center_erase_color.png'],
      'rail/way/standard_wood_back.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/back_erase_color.png'],
      'rail/way/standard_concrete_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/single_erase_color.png'],
      'rail/way/standard_concrete_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/front_erase_color.png'],
      'rail/way/standard_concrete_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/center_erase_color.png'],
      'rail/way/standard_concrete_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/back_erase_color.png'],
      'rail/way/standard_ffu_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/single_erase_color.png'],
      'rail/way/standard_ffu_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/front_erase_color.png'],
      'rail/way/standard_ffu_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/center_erase_color.png'],
      'rail/way/standard_ffu_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/back_erase_color.png'],
      'rail/way/standard_ladder_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/single_erase_color.png'],
      'rail/way/standard_ladder_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/front_erase_color.png'],
      'rail/way/standard_ladder_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/center_erase_color.png'],
      'rail/way/standard_ladder_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/back_erase_color.png'],
      'rail/way/standard_slab_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/single_erase_color.png'],
      'rail/way/standard_slab_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/front_erase_color.png'],
      'rail/way/standard_slab_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/center_erase_color.png'],
      'rail/way/standard_slab_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/back_erase_color.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev.pak',
    datFiles: [
      'maglev/way/transrapid.dat',
      'maglev/way/linear.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_erase_color.png'],
      'maglev/way/transrapid_g.png': ['maglev/way/transrapid_g.png'],
      'maglev/way/transrapid_e.png': ['maglev/way/transrapid_e.png'],

      'maglev/way/linear_single_back.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/single_erase_color.png', 'maglev/way/linear_back.png'],
      'maglev/way/linear_front_back.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/front_erase_color.png', 'maglev/way/linear_back.png'],
      'maglev/way/linear_center_back.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/center_erase_color.png', 'maglev/way/linear_back.png'],
      'maglev/way/linear_back_back.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/back_erase_color.png', 'maglev/way/linear_back.png'],
      'maglev/way/linear_front.png': ['maglev/way/linear_front.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_round-about.pak',
    datFiles: ['util/round-about/round_about.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'util/round-about/round_about1.png': ['util/round-about/round_about1_base.png', 'util/round-about/round_about1.png', 'util/round-about/round_about1_noise.png'],
      'util/round-about/round_about2.png': ['util/round-about/round_about2_base.png', 'util/round-about/round_about2.png', 'util/round-about/round_about2_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_intersection.pak',
    datFiles: ['util/intersection/intersection.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'util/intersection/intersection.png': ['util/intersection/intersection_base.png', 'util/intersection/intersection.png', 'util/intersection/intersection_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_pier.pak',
    datFiles: [
      'util/pier/ground/pier.dat',
      'util/pier/elevated/pier.dat',
    ],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'util/pier/ground/pier1.png': ['util/pier/ground/pier1_base.png', 'util/pier/ground/pier1.png', 'util/pier/ground/pier1_noise.png', 'util/pier/ground/pier1_erase_color.png'],
      'util/pier/ground/pier2.png': ['util/pier/ground/pier2_base.png', 'util/pier/ground/pier2.png', 'util/pier/ground/pier2_noise.png', 'util/pier/ground/pier2_erase_color.png'],
      'util/pier/ground/pier3.png': ['util/pier/ground/pier3_base.png', 'util/pier/ground/pier3.png', 'util/pier/ground/pier3_noise.png', 'util/pier/ground/pier3_erase_color.png'],
      'util/pier/elevated/pier1.png': ['util/pier/elevated/pier1_base.png', 'util/pier/elevated/pier1.png', 'util/pier/elevated/pier1_noise.png', 'util/pier/elevated/pier1_erase_color.png'],
      'util/pier/elevated/pier2.png': ['util/pier/elevated/pier2_base.png', 'util/pier/elevated/pier2.png', 'util/pier/elevated/pier2_noise.png', 'util/pier/elevated/pier2_erase_color.png'],
      'util/pier/elevated/pier3.png': ['util/pier/elevated/pier3_base.png', 'util/pier/elevated/pier3.png', 'util/pier/elevated/pier3_noise.png', 'util/pier/elevated/pier3_erase_color.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_bridge.pak',
    datFiles: ['util/bridge/bridge.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'util/bridge/bridge1.png': ['util/bridge/bridge1_base_shift.png', 'util/bridge/bridge1_shift.png', 'util/bridge/bridge1_base_shift_noise.png', 'util/bridge/bridge1_erase_color.png', 'util/bridge/bridge1_special_color.png'],
      'util/bridge/bridge_cursor.png': ['util/bridge/bridge_cursor_base.png', 'util/bridge/bridge_cursor.png', 'util/bridge/bridge_cursor_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_embankment.pak',
    datFiles: ['util/embankment/embankment.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'util/embankment/embankment1.png': ['util/embankment/embankment_base.png', 'util/embankment/embankment1.png', 'util/embankment/embankment_noise.png'],
      'util/embankment/embankment2.png': ['util/embankment/embankment_base.png', 'util/embankment/embankment2.png', 'util/embankment/embankment_noise.png'],
      'util/embankment/embankment3.png': ['util/embankment/embankment_base.png', 'util/embankment/embankment3.png', 'util/embankment/embankment_noise.png'],
      'util/embankment/embankment4.png': ['util/embankment/embankment_base.png', 'util/embankment/embankment4.png', 'util/embankment/embankment_noise.png'],
      'util/embankment/embankment5.png': ['util/embankment/embankment_base.png', 'util/embankment/embankment5.png', 'util/embankment/embankment_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_sidewalk.pak',
    datFiles: ['util/sidewalk/sidewalk.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_erase_color.png'],
      'util/sidewalk/sidewalk.png': ['util/sidewalk/sidewalk.png'],
    }
  },
  {
    size: 512,
    pakFile: 'iss_util_gently-point.pak',
    datFiles: ['util/gently-point/point.dat'],
    imageSet: {
      'icon3.png': ['icon3.png', 'icon_erase_color.png'],
      'util/gently-point/point.png': ['util/gently-point/point_barrast.png', 'util/gently-point/point_noise1.png', 'util/gently-point/point_noise2.png', 'util/gently-point/point.png', 'util/gently-point/point_erase_color.png'],
    }
  },
];
