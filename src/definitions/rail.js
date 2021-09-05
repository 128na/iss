/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = [
  {
    size: 256,
    pakFile: 'iss_rail_way.pak',
    datFiles: [
      'rail/tram.dat',
      'rail/track.dat'
    ],
    imageSet: {
      'icon.png': ['icon.png'],
      'rail/0050_b.png': ['rail/0050_b.png'],
      'rail/0050_s.png': ['rail/0050_s.png'],
      'rail/0050_n.png': ['rail/0050_n.png'],
      'rail/0050_bs.png': ['rail/0050_bs.png'],
      'rail/0050_bn.png': ['rail/0050_bn.png'],
      'rail/0050_sn.png': ['rail/0050_sn.png'],
      'rail/0120.png': ['rail/0120.png'],
    }
  },
];
