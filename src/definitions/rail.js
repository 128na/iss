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
      'rail/ground/tram.dat',
      // 'rail/ground/track.dat'
    ],
    imageSet: {
      'icon.png': ['icon.png'],
      'rail/ground/0050_b.png': ['rail/ground/0050_b.png'],
      'rail/ground/0050_s.png': ['rail/ground/0050_s.png'],
      'rail/ground/0050_n.png': ['rail/ground/0050_n.png'],
      'rail/ground/0050_bs.png': ['rail/ground/0050_bs.png'],
      'rail/ground/0050_bn.png': ['rail/ground/0050_bn.png'],
      'rail/ground/0050_sn.png': ['rail/ground/0050_sn.png'],
      // 'rail/ground/1200_slab.png': ['rail/ground/1200_slab.png'],
    }
  },
];
