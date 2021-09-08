/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = [
  {
    size: 256,
    pakFile: 'iss_util_round-about.pak',
    datFiles: ['util/round-about/round_about.dat'],
    imageSet: {
      'icon.png': ['icon.png', 'icon_erase.png'],
      'util/round-about/round_about1.png': ['util/round-about/round_about1_base.png', 'util/round-about/round_about1.png', 'util/round-about/round_about1_noise.png'],
      'util/round-about/round_about2.png': ['util/round-about/round_about2_base.png', 'util/round-about/round_about2.png', 'util/round-about/round_about2_noise.png'],
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
      'icon.png': ['icon.png', 'icon_erase.png'],
      'util/pier/ground/pier1.png': ['util/pier/ground/pier1_base.png', 'util/pier/ground/pier1.png', 'util/pier/ground/pier1_noise.png', 'util/pier/ground/pier1_overwrite.png'],
      'util/pier/ground/pier2.png': ['util/pier/ground/pier2_base.png', 'util/pier/ground/pier2.png', 'util/pier/ground/pier2_noise.png', 'util/pier/ground/pier2_overwrite.png'],
      'util/pier/ground/pier3.png': ['util/pier/ground/pier3_base.png', 'util/pier/ground/pier3.png', 'util/pier/ground/pier3_noise.png', 'util/pier/ground/pier3_overwrite.png'],
      'util/pier/elevated/pier1.png': ['util/pier/elevated/pier1_base.png', 'util/pier/elevated/pier1.png', 'util/pier/elevated/pier1_noise.png', 'util/pier/elevated/pier1_overwrite.png'],
      'util/pier/elevated/pier2.png': ['util/pier/elevated/pier2_base.png', 'util/pier/elevated/pier2.png', 'util/pier/elevated/pier2_noise.png', 'util/pier/elevated/pier2_overwrite.png'],
      'util/pier/elevated/pier3.png': ['util/pier/elevated/pier3_base.png', 'util/pier/elevated/pier3.png', 'util/pier/elevated/pier3_noise.png', 'util/pier/elevated/pier3_overwrite.png'],
    }
  },
  {
    size: 256,
    pakFile: 'iss_util_bridge.pak',
    datFiles: ['util/bridge/bridge.dat'],
    imageSet: {
      'icon.png': ['icon.png', 'icon_erase.png'],
      'util/bridge/bridge1.png': ['util/bridge/bridge1_base_shift.png', 'util/bridge/bridge1_shift.png', 'util/bridge/bridge1_base_shift_noise.png', 'util/bridge/bridge1_overwrite.png', 'util/bridge/bridge1_special_color.png'],
      'util/bridge/bridge_cursor.png': ['util/bridge/bridge_cursor_base.png', 'util/bridge/bridge_cursor.png', 'util/bridge/bridge_cursor_noise.png'],
    }
  },
];
