module.exports = [
  {
    size: 256,
    pakFile: 'iss_road_way.pak',
    datFiles: ['way/road/ground.dat', 'way/road/elevated.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'way/road/0030.png': ['way/road/base_low.png', 'way/road/noise.png', 'way/road/line_lowest.png', 'way/center_ec.png', 'way/road/barrier.png'],
      'way/road/0050.png': ['way/road/base_mid.png', 'way/road/noise.png', 'way/road/line_low.png', 'way/center_ec.png', 'way/road/barrier.png'],
      'way/road/0060.png': ['way/road/base_high.png', 'way/road/line_red.png', 'way/road/noise.png', 'way/road/line_yellow.png', 'way/single_ec.png', 'way/road/barrier.png'],
      'way/road/0080.png': ['way/road/base_high.png', 'way/road/noise.png', 'way/road/line_yellow.png', 'way/single_ec.png', 'way/road/barrier.png'],
      'way/road/0120.png': ['way/road/base_high.png', 'way/road/noise.png', 'way/road/line_mid.png', 'way/single_ec.png', 'way/road/barrier.png'],
      'way/road/1200.png': ['way/road/base_high.png', 'way/road/noise.png', 'way/road/line_high.png', 'way/single_ec.png', 'way/road/barrier.png'],

      'way/road/low.png': ['way/road/base_low.png', 'way/road/noise.png', 'way/center_ec.png'],
      'way/road/mid.png': ['way/road/base_mid.png', 'way/road/noise.png', 'way/center_ec.png'],
      'way/road/high.png': ['way/road/base_high.png', 'way/road/noise.png', 'way/center_ec.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_tunnel.pak',
    datFiles: [
      'tunnel/road/tunnel.dat',
      'tunnel/road/underground.dat',
    ],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'tunnel/road/1200.png': ['tunnel/road/1200_base.png', 'tunnel/road/1200.png', 'tunnel/road/1200_noise.png'],
      'tunnel/road/0120.png': ['tunnel/road/0120_base.png', 'tunnel/road/0120.png', 'tunnel/road/0120_noise.png'],
      'tunnel/road/1200_under.png': ['way/road/base_high.png', 'way/road/noise.png', 'way/road/line_high.png', 'way/single_ec.png', 'way/road/barrier.png', 'tunnel/road/shield.png'],
      'tunnel/road/0120_under.png': ['way/road/base_high.png', 'way/road/noise.png', 'way/road/line_mid.png', 'way/single_ec.png', 'way/road/barrier.png', 'tunnel/road/box.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_road_sign.pak',
    datFiles: ['road/roadsign/sign1.dat', 'road/roadsign/sign2.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'road/roadsign/sign1_kt.png': ['road/roadsign/sign1.png'],
      'road/roadsign/sign2_kt.png': ['road/roadsign/sign2.png'],
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
      'way/rail/narrow.dat',
      'way/rail/tram.dat',
      'way/rail/track_wood.dat',
      'way/rail/track_concrete.dat',
      'way/rail/track_ladder.dat',
      'way/rail/track_ffu.dat',
      'way/rail/track_slab.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'way/rail/narrow_kt.png': ['way/rail/narrow.png', 'way/rail/narrow_fix.png', 'way/center_ec.png'],
      'way/rail/standard_kt.png': ['way/rail/standard.png', 'way/rail/standard_fix.png', 'way/center_ec.png'],

      'way/rail/wall_single_surface.png': ['way/wall_surface.png'],
      'way/rail/wall_front_surface.png': ['way/wall_surface.png'],
      'way/rail/wall_center_surface.png': ['way/wall_center_surface.png'],
      'way/rail/wall_back_surface.png': ['way/wall_center_surface.png'],

      'way/rail/standard_wood_g_single.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/single_ec.png'],
      'way/rail/standard_wood_g_front.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/front_ec.png'],
      'way/rail/standard_wood_g_center.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/center_ec.png'],
      'way/rail/standard_wood_g_back.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/back_ec.png'],
      'way/rail/standard_wood_e_single.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/single_ec.png', 'way/wall_rear.png'],
      'way/rail/standard_wood_e_front.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/front_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_wood_e_center.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/center_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_wood_e_back.png': ['way/rail/brown.png', 'way/rail/noise.png', 'way/rail/standard_wood.png', 'way/rail/standard_fix.png', 'way/back_ec.png', 'way/wall_rear.png'],

      'way/rail/standard_concrete_g_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/single_ec.png'],
      'way/rail/standard_concrete_g_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/front_ec.png'],
      'way/rail/standard_concrete_g_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/center_ec.png'],
      'way/rail/standard_concrete_g_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/back_ec.png'],
      'way/rail/standard_concrete_e_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/single_ec.png', 'way/wall_rear.png'],
      'way/rail/standard_concrete_e_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/front_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_concrete_e_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/center_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_concrete_e_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_concrete.png', 'way/rail/standard_fix.png', 'way/back_ec.png', 'way/wall_rear.png'],

      'way/rail/standard_ffu_g_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/single_ec.png'],
      'way/rail/standard_ffu_g_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/front_ec.png'],
      'way/rail/standard_ffu_g_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/center_ec.png'],
      'way/rail/standard_ffu_g_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/back_ec.png'],
      'way/rail/standard_ffu_e_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/single_ec.png', 'way/wall_rear.png'],
      'way/rail/standard_ffu_e_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/front_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_ffu_e_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/center_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_ffu_e_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ffu.png', 'way/rail/standard_fix.png', 'way/back_ec.png', 'way/wall_rear.png'],

      'way/rail/standard_ladder_g_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/single_ec.png'],
      'way/rail/standard_ladder_g_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/front_ec.png'],
      'way/rail/standard_ladder_g_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/center_ec.png'],
      'way/rail/standard_ladder_g_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/back_ec.png'],
      'way/rail/standard_ladder_e_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/single_ec.png', 'way/wall_rear.png'],
      'way/rail/standard_ladder_e_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/front_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_ladder_e_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/center_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_ladder_e_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_ladder.png', 'way/rail/standard_fix.png', 'way/back_ec.png', 'way/wall_rear.png'],

      'way/rail/standard_slab_g_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/single_ec.png'],
      'way/rail/standard_slab_g_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/front_ec.png'],
      'way/rail/standard_slab_g_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/center_ec.png'],
      'way/rail/standard_slab_g_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/back_ec.png'],
      'way/rail/standard_slab_e_single.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/single_ec.png', 'way/wall_rear.png'],
      'way/rail/standard_slab_e_front.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/front_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_slab_e_center.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/center_ec.png', 'way/wall_center_rear.png'],
      'way/rail/standard_slab_e_back.png': ['way/rail/gray.png', 'way/rail/noise.png', 'way/rail/standard_slab.png', 'way/rail/standard_fix.png', 'way/back_ec.png', 'way/wall_rear.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_rail_tunnel.pak',
    datFiles: [
      'tunnel/rail/tunnel.dat',
      'tunnel/rail/under_way.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'tunnel/rail/tunnel_surface.png': ['tunnel/tunnel_surface.png', 'tunnel/tunnel_surface_noise.png'],
      'tunnel/rail/tunnel_rear.png': ['tunnel/tunnel_rear.png', 'tunnel/tunnel_rear_noise.png'],
      'tunnel/rail/rail.png': ['tunnel/shield.png', 'way/rail/standard_ffu.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev_way.pak',
    datFiles: [
      'way/maglev/transrapid.dat',
      'way/maglev/linear.dat',
      'way/maglev/marine.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'way/maglev/wall_single_surface.png': ['way/wall_surface.png'],
      'way/maglev/wall_front_surface.png': ['way/wall_surface.png'],
      'way/maglev/wall_center_surface.png': ['way/wall_center_surface.png'],
      'way/maglev/wall_back_surface.png': ['way/wall_center_surface.png'],

      'way/maglev/linear_single_rear.png': ['way/maglev/linear_base.png', 'way/maglev/linear_noise.png', 'way/maglev/linear.png', 'way/single_ec.png', 'way/wall_rear.png'],
      'way/maglev/linear_front_rear.png': ['way/maglev/linear_base.png', 'way/maglev/linear_noise.png', 'way/maglev/linear.png', 'way/front_ec.png', 'way/wall_center_rear.png'],
      'way/maglev/linear_center_rear.png': ['way/maglev/linear_base.png', 'way/maglev/linear_noise.png', 'way/maglev/linear.png', 'way/center_ec.png', 'way/wall_center_rear.png'],
      'way/maglev/linear_back_rear.png': ['way/maglev/linear_base.png', 'way/maglev/linear_noise.png', 'way/maglev/linear.png', 'way/back_ec.png', 'way/wall_rear.png'],

      'way/maglev/transrapid_g.png': ['way/maglev/transrapid.png', 'way/maglev/transrapid_noise.png'],
      'way/maglev/transrapid_e_front.png': ['way/pier_front.png', 'way/maglev/transrapid.png', 'way/maglev/transrapid_noise.png'],
      'way/maglev/transrapid_e_center.png': ['way/pier_center.png', 'way/maglev/transrapid.png', 'way/maglev/transrapid_noise.png'],
      'way/maglev/transrapid_e_back.png': ['way/pier_back.png', 'way/maglev/transrapid.png', 'way/maglev/transrapid_noise.png'],

      'way/maglev/marine_g.png': ['way/maglev/marine.png', 'way/maglev/marine_noise.png'],
      'way/maglev/marine_e_front_kt.png': ['way/pier_front.png', 'way/maglev/marine_rear.png', 'way/maglev/marine_noise.png'],
      'way/maglev/marine_e_center_kt.png': ['way/pier_center.png', 'way/maglev/marine_rear.png', 'way/maglev/marine_noise.png'],
      'way/maglev/marine_e_back_kt.png': ['way/pier_back.png', 'way/maglev/marine_rear.png', 'way/maglev/marine_noise.png'],
      'way/maglev/marine_e_surface_kt.png': ['way/maglev/marine_surface.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev_way-object.pak',
    datFiles: [
      'way-object/maglev/linear_guide.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'way-object/maglev/linear_guide_rear.png': ['way-object/maglev/linear_guide_rear.png'],
      'way-object/maglev/linear_guide_surface.png': ['way-object/maglev/linear_guide_surface.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_maglev_tunnel.pak',
    datFiles: [
      'tunnel/maglev/tunnel.dat',
      'tunnel/maglev/under_way.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'tunnel/maglev/tunnel_surface.png': ['tunnel/tunnel_surface.png', 'tunnel/tunnel_surface_noise.png'],
      'tunnel/maglev/tunnel_rear.png': ['tunnel/tunnel_rear.png', 'tunnel/tunnel_rear_noise.png'],

      'tunnel/maglev/marine_u_rear_kt.png': ['way/maglev/marine_rear.png'],
      'tunnel/maglev/marine_u_surface_kt.png': ['way/maglev/marine_surface.png'],
      'tunnel/maglev/transrapid.png': ['tunnel/shield.png', 'way/maglev/transrapid.png'],
      'tunnel/maglev/linear.png': ['tunnel/shield.png', 'way/maglev/linear.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_monorail_way.pak',
    datFiles: [
      'way/monorail/straddle.dat',
      'way/monorail/suspended.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'way/monorail/straddle_g.png': ['way/monorail/straddle.png', 'way/monorail/straddle_noise.png'],
      'way/monorail/straddle_e_front.png': ['way/pier_front.png', 'way/monorail/straddle.png', 'way/monorail/straddle_noise.png'],
      'way/monorail/straddle_e_center.png': ['way/pier_center.png', 'way/monorail/straddle.png', 'way/monorail/straddle_noise.png'],
      'way/monorail/straddle_e_back.png': ['way/pier_back.png', 'way/monorail/straddle.png', 'way/monorail/straddle_noise.png'],

      'way/monorail/suspended_g_back_surface.png': ['way/monorail/suspended_back_surface.png'],
      'way/monorail/suspended_g_back_rear.png': ['way/monorail/suspended_back_rear.png'],
      'way/monorail/suspended_g_center_surface.png': ['way/monorail/suspended_back_surface.png', 'way/monorail/suspended_front_surface.png'],
      'way/monorail/suspended_g_center_rear.png': ['way/monorail/suspended_back_rear.png', 'way/monorail/suspended_front_rear.png'],
      'way/monorail/suspended_g_front_surface.png': ['way/monorail/suspended_front_surface.png'],
      'way/monorail/suspended_g_front_rear.png': ['way/monorail/suspended_front_rear.png'],

      'way/monorail/suspended_e_back_surface.png': ['way/monorail/suspended_back_surface.png'],
      'way/monorail/suspended_e_back_rear.png': ['way/monorail/suspended_pier_back.png', 'way/monorail/suspended_back_rear.png'],
      'way/monorail/suspended_e_center_surface.png': ['way/monorail/suspended_pier_front.png', 'way/monorail/suspended_back_surface.png', 'way/monorail/suspended_front_surface.png'],
      'way/monorail/suspended_e_center_rear.png': ['way/monorail/suspended_pier_back.png', 'way/monorail/suspended_back_rear.png', 'way/monorail/suspended_front_rear.png'],
      'way/monorail/suspended_e_front_surface.png': ['way/monorail/suspended_pier_front.png', 'way/monorail/suspended_front_surface.png'],
      'way/monorail/suspended_e_front_rear.png': ['way/monorail/suspended_front_rear.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_monorail_tunnel.pak',
    datFiles: [
      'tunnel/monorail/tunnel.dat',
      'tunnel/monorail/under_way.dat',
    ],
    imageSet: {
      'icon2.png': ['icon2.png', 'icon_ec.png'],
      'tunnel/monorail/tunnel_surface.png': ['tunnel/tunnel_surface.png', 'tunnel/tunnel_surface_noise.png'],
      'tunnel/monorail/tunnel_rear.png': ['tunnel/tunnel_rear.png', 'tunnel/tunnel_rear_noise.png'],
      'tunnel/monorail/straddle.png': ['tunnel/shield.png', 'way/monorail/straddle.png'],
      'tunnel/monorail/suspended_rear.png': ['tunnel/shield.png', 'tunnel/monorail/suspended_rear.png'],
      'tunnel/monorail/suspended_surface.png': ['tunnel/monorail/suspended_surface.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_round-about.pak',
    datFiles: ['util/round-about/round_about.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/round-about/round_about1_kt.png': ['util/round-about/round_about1.png', 'util/round-about/round_about1_ec.png'],
      'util/round-about/round_about2_kt.png': ['util/round-about/round_about2.png', 'util/round-about/round_about2_ec.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_intersection.pak',
    datFiles: ['util/intersection/intersection.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/intersection/intersection_kt.png': ['util/intersection/intersection.png', 'util/intersection/intersection_ec.png'],
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
      'util/pier/ground/pier5_rear.png': ['util/pier/ground/pier5_rear.png'],
      'util/pier/ground/pier5_surface.png': ['util/pier/ground/pier5_surface.png'],
      'util/pier/ground/pier6_rear.png': ['util/pier/ground/pier6_rear.png'],
      'util/pier/ground/pier6_surface.png': ['util/pier/ground/pier6_surface.png'],
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
    datFiles: ['util/sidewalk/ground.dat', 'util/sidewalk/elevated.dat',],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/sidewalk/sidewalk.png': ['util/sidewalk/sidewalk.png', 'util/sidewalk/sidewalk_ec.png'],
    }
  },
  {
    size: 512,
    pakFile: 'iss_util_gently-point.pak',
    datFiles: ['util/gently-point/point.dat'],
    imageSet: {
      'icon3.png': ['icon3.png', 'icon_ec.png'],
      'util/gently-point/point.png': ['util/gently-point/point_barrast.png', 'util/gently-point/point_noise.png', 'util/gently-point/point.png', 'util/gently-point/point_fix.png', 'util/gently-point/point_ec.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_rail-yard.pak',
    datFiles: ['util/rail-yard/table.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/rail-yard/table.png': ['util/rail-yard/table_base.png', 'util/rail-yard/barrast_noise.png', 'util/rail-yard/table_ec.png', 'util/rail-yard/table.png', 'util/rail-yard/table_concrete_noise.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_electric.pak',
    datFiles: ['util/electric/pole.dat'],
    imageSet: {
      'icon1.png': ['icon1.png', 'icon_ec.png'],
      'util/electric/pole_kt.png': ['util/electric/pole.png'],
    }
  },
];
