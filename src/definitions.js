module.exports = [
  {
    size: 256,
    pakFile: 'iss_road_way.pak',
    datFiles: ['road/way/ground.dat', 'road/way/elevated.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'road/way/0030.png': ['road/way/0030_base.png', 'road/way/0030.png', 'road/way/0030_noise.png', 'road/way/road2_ec.png'],
      'road/way/0050.png': ['road/way/0050_base.png', 'road/way/0050.png', 'road/way/0050_noise.png', 'road/way/road2_ec.png'],
      'road/way/0060.png': ['road/way/0060_base.png', 'road/way/0060.png', 'road/way/0100_noise.png', 'road/way/road_ec.png'],
      'road/way/0080.png': ['road/way/0100_base.png', 'road/way/0080.png', 'road/way/0100_noise.png', 'road/way/road_ec.png'],
      'road/way/0120.png': ['road/way/0100_base.png', 'road/way/0120.png', 'road/way/0100_noise.png', 'road/way/road_ec.png'],
      'road/way/1200.png': ['road/way/1200_base.png', 'road/way/1200.png', 'road/way/1200_noise.png', 'road/way/road_ec.png'],
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
      'icon1.png': ['icon1.png', 'icon_ec.png'],
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
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'road/roadsign/sign1_kt.png': ['road/roadsign/sign1.png'],
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
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'road/way-object/wall_back_kt.png': ['road/way-object/wall_back_base.png', 'road/way-object/wall_back.png', 'road/way-object/wall_back_noise.png'],
      'road/way-object/wall_front_kt.png': ['road/way-object/wall_front_base.png', 'road/way-object/wall_front.png', 'road/way-object/wall_front_noise.png'],
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
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'rail/way/narrow.png': ['rail/way/narrow.png'],
      'rail/way/standard.png': ['rail/way/standard.png'],
      'rail/way/standard_wood_single.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/single_ec.png'],
      'rail/way/standard_wood_front.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/front_ec.png'],
      'rail/way/standard_wood_center.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/center_ec.png'],
      'rail/way/standard_wood_back.png': ['rail/way/barrast_brown.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_wood.png', 'rail/way/back_ec.png'],
      'rail/way/standard_concrete_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/single_ec.png'],
      'rail/way/standard_concrete_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/front_ec.png'],
      'rail/way/standard_concrete_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/center_ec.png'],
      'rail/way/standard_concrete_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_concrete.png', 'rail/way/back_ec.png'],
      'rail/way/standard_ffu_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/single_ec.png'],
      'rail/way/standard_ffu_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/front_ec.png'],
      'rail/way/standard_ffu_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/center_ec.png'],
      'rail/way/standard_ffu_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ffu.png', 'rail/way/back_ec.png'],
      'rail/way/standard_ladder_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/single_ec.png'],
      'rail/way/standard_ladder_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/front_ec.png'],
      'rail/way/standard_ladder_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/center_ec.png'],
      'rail/way/standard_ladder_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_ladder.png', 'rail/way/back_ec.png'],
      'rail/way/standard_slab_single.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/single_ec.png'],
      'rail/way/standard_slab_front.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/front_ec.png'],
      'rail/way/standard_slab_center.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/center_ec.png'],
      'rail/way/standard_slab_back.png': ['rail/way/barrast_gray.png', 'rail/way/barrast_noise.png', 'rail/way/barrast_noise2.png', 'rail/way/standard_slab.png', 'rail/way/back_ec.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_rail_tunnel.pak',
    datFiles: [
      'rail/tunnel/tunnel.dat',
      'rail/tunnel/under_way.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'rail/tunnel/tunnel_surface.png': ['maglev/tunnel/tunnel_surface.png', 'maglev/tunnel/tunnel_surface_noise.png'],
      'rail/tunnel/tunnel_rear.png': ['maglev/tunnel/tunnel_rear.png', 'maglev/tunnel/tunnel_rear_noise.png'],
      'rail/tunnel/rail.png': ['rail/tunnel/rail.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev_way.pak',
    datFiles: [
      'maglev/way/transrapid.dat',
      'maglev/way/linear.dat',
      'maglev/way/marine.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'maglev/way/linear_single.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/single_ec.png', 'maglev/way/linear.png'],
      'maglev/way/linear_front.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/front_ec.png', 'maglev/way/linear.png'],
      'maglev/way/linear_center.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/center_ec.png', 'maglev/way/linear.png'],
      'maglev/way/linear_back.png': ['maglev/way/linear_base.png', 'maglev/way/linear_noise.png', 'maglev/way/back_ec.png', 'maglev/way/linear.png'],

      'maglev/way/transrapid_g.png': ['maglev/way/transrapid.png', 'maglev/way/transrapid_noise.png'],
      'maglev/way/transrapid_e_front.png': ['maglev/way/pier_front.png', 'maglev/way/transrapid.png', 'maglev/way/transrapid_noise.png'],
      'maglev/way/transrapid_e_center.png': ['maglev/way/pier_center.png', 'maglev/way/transrapid.png', 'maglev/way/transrapid_noise.png'],
      'maglev/way/transrapid_e_back.png': ['maglev/way/pier_back.png', 'maglev/way/transrapid.png', 'maglev/way/transrapid_noise.png'],

      'maglev/way/marine_g.png': ['maglev/way/marine.png', 'maglev/way/marine_noise.png'],
      'maglev/way/marine_e_front_kt.png': ['maglev/way/pier_front.png', 'maglev/way/marine_rear.png', 'maglev/way/marine_noise.png'],
      'maglev/way/marine_e_center_kt.png': ['maglev/way/pier_center.png', 'maglev/way/marine_rear.png', 'maglev/way/marine_noise.png'],
      'maglev/way/marine_e_back_kt.png': ['maglev/way/pier_back.png', 'maglev/way/marine_rear.png', 'maglev/way/marine_noise.png'],
      'maglev/way/marine_e_surface_kt.png': ['maglev/way/marine_surface.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev_way-object.pak',
    datFiles: [
      'maglev/way-object/wall.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'maglev/way-object/wall_single.png': ['maglev/way-object/wall_single.png', 'maglev/way-object/wall_single_noise.png'],
      'maglev/way-object/wall_back.png': ['maglev/way-object/wall_back.png', 'maglev/way-object/wall_back_noise.png'],
      'maglev/way-object/wall_center.png': ['maglev/way-object/wall_center.png', 'maglev/way-object/wall_center_noise.png'],
      'maglev/way-object/wall_front.png': ['maglev/way-object/wall_front.png', 'maglev/way-object/wall_front_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev_tunnel.pak',
    datFiles: [
      'maglev/tunnel/tunnel.dat',
      'maglev/tunnel/under_way.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'maglev/tunnel/tunnel_surface.png': ['maglev/tunnel/tunnel_surface.png', 'maglev/tunnel/tunnel_surface_noise.png'],
      'maglev/tunnel/tunnel_rear.png': ['maglev/tunnel/tunnel_rear.png', 'maglev/tunnel/tunnel_rear_noise.png'],

      'maglev/tunnel/marine_u_rear_kt.png': ['maglev/way/marine_rear.png'],
      'maglev/tunnel/marine_u_surface_kt.png': ['maglev/way/marine_surface.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_monorail_way.pak',
    datFiles: [
      'monorail/way/straddle.dat',
      'monorail/way/suspended.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'monorail/way/straddle_g.png': ['monorail/way/straddle.png', 'monorail/way/straddle_noise.png'],
      'monorail/way/straddle_e_front.png': ['maglev/way/pier_front.png', 'monorail/way/straddle.png', 'monorail/way/straddle_noise.png'],
      'monorail/way/straddle_e_center.png': ['maglev/way/pier_center.png', 'monorail/way/straddle.png', 'monorail/way/straddle_noise.png'],
      'monorail/way/straddle_e_back.png': ['maglev/way/pier_back.png', 'monorail/way/straddle.png', 'monorail/way/straddle_noise.png'],

      'monorail/way/suspended_g_back_surface.png': ['monorail/way/suspended_back_surface.png'],
      'monorail/way/suspended_g_back_rear.png': ['monorail/way/suspended_back_rear.png'],
      'monorail/way/suspended_g_center_surface.png': ['monorail/way/suspended_back_surface.png', 'monorail/way/suspended_front_surface.png'],
      'monorail/way/suspended_g_center_rear.png': ['monorail/way/suspended_back_rear.png', 'monorail/way/suspended_front_rear.png'],
      'monorail/way/suspended_g_front_surface.png': ['monorail/way/suspended_front_surface.png'],
      'monorail/way/suspended_g_front_rear.png': ['monorail/way/suspended_front_rear.png'],

      'monorail/way/suspended_e_back_surface.png': ['monorail/way/suspended_back_surface.png'],
      'monorail/way/suspended_e_back_rear.png': ['monorail/way/suspended_pier_back.png', 'monorail/way/suspended_back_rear.png'],
      'monorail/way/suspended_e_center_surface.png': ['monorail/way/suspended_pier_front.png', 'monorail/way/suspended_back_surface.png', 'monorail/way/suspended_front_surface.png'],
      'monorail/way/suspended_e_center_rear.png': ['monorail/way/suspended_pier_back.png', 'monorail/way/suspended_back_rear.png', 'monorail/way/suspended_front_rear.png'],
      'monorail/way/suspended_e_front_surface.png': ['monorail/way/suspended_pier_front.png', 'monorail/way/suspended_front_surface.png'],
      'monorail/way/suspended_e_front_rear.png': ['monorail/way/suspended_front_rear.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_monorail_tunnel.pak',
    datFiles: [
      'monorail/tunnel/tunnel.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'monorail/tunnel/tunnel_surface.png': ['maglev/tunnel/tunnel_surface.png', 'maglev/tunnel/tunnel_surface_noise.png'],
      'monorail/tunnel/tunnel_rear.png': ['maglev/tunnel/tunnel_rear.png', 'maglev/tunnel/tunnel_rear_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_round-about.pak',
    datFiles: ['util/round-about/round_about.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/round-about/round_about1.png': ['util/round-about/round_about1_base.png', 'util/round-about/round_about1.png', 'util/round-about/round_about1_noise.png'],
      'util/round-about/round_about2.png': ['util/round-about/round_about2_base.png', 'util/round-about/round_about2.png', 'util/round-about/round_about2_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_intersection.pak',
    datFiles: ['util/intersection/intersection.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
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
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/pier/ground/pier1.png': ['util/pier/ground/pier1_base.png', 'util/pier/ground/pier1.png', 'util/pier/ground/pier1_noise.png', 'util/pier/ground/pier1_ec.png'],
      'util/pier/ground/pier2.png': ['util/pier/ground/pier2_base.png', 'util/pier/ground/pier2.png', 'util/pier/ground/pier2_noise.png', 'util/pier/ground/pier2_ec.png'],
      'util/pier/ground/pier3.png': ['util/pier/ground/pier3_base.png', 'util/pier/ground/pier3.png', 'util/pier/ground/pier3_noise.png', 'util/pier/ground/pier3_ec.png'],
      'util/pier/elevated/pier1.png': ['util/pier/elevated/pier1_base.png', 'util/pier/elevated/pier1.png', 'util/pier/elevated/pier1_noise.png', 'util/pier/elevated/pier1_ec.png'],
      'util/pier/elevated/pier2.png': ['util/pier/elevated/pier2_base.png', 'util/pier/elevated/pier2.png', 'util/pier/elevated/pier2_noise.png', 'util/pier/elevated/pier2_ec.png'],
      'util/pier/elevated/pier3.png': ['util/pier/elevated/pier3_base.png', 'util/pier/elevated/pier3.png', 'util/pier/elevated/pier3_noise.png', 'util/pier/elevated/pier3_ec.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_bridge.pak',
    datFiles: ['util/bridge/bridge.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/bridge/bridge1_kt.png': ['util/bridge/bridge1_base_shift.png', 'util/bridge/bridge1_shift.png', 'util/bridge/bridge1_base_shift_noise.png', 'util/bridge/bridge1_ec.png', 'util/bridge/bridge1_sc.png'],
      'util/bridge/bridge_cursor.png': ['util/bridge/bridge_cursor_base.png', 'util/bridge/bridge_cursor.png', 'util/bridge/bridge_cursor_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_embankment.pak',
    datFiles: ['util/embankment/embankment.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
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
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/sidewalk/sidewalk.png': ['util/sidewalk/sidewalk.png'],
    }
  },
  {
    size: 512,
    pakFile: 'iss_util_gently-point.pak',
    datFiles: ['util/gently-point/point.dat'],
    imageSet: {
      'icon3.png': ['icon3.png', 'icon_ec.png'],
      'util/gently-point/point.png': ['util/gently-point/point_barrast.png', 'util/gently-point/point_noise1.png', 'util/gently-point/point_noise2.png', 'util/gently-point/point.png', 'util/gently-point/point_ec.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_rail-yard.pak',
    datFiles: ['util/rail-yard/table.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/rail-yard/table.png': ['util/rail-yard/table_base.png', 'util/rail-yard/table_noise.png', 'util/rail-yard/table_noise2.png', 'util/rail-yard/table_ec.png', 'util/rail-yard/table.png', 'util/rail-yard/table_concrete_noise.png'],
    }
  },
];
