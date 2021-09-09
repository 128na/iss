/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = [
  {
    size: 256,
    pakFile: 'iss_util_describe.pak',
    datFiles: ['util/describe/rail.dat'],
    imageSet: {
      'util/describe/red.png': ['util/describe/red.png'],
      'util/describe/blue.png': ['util/describe/blue.png'],
      'util/describe/green.png': ['util/describe/green.png'],
      'util/describe/yellow.png': ['util/describe/yellow.png'],
    }
  },
];
