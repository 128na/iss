/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = [
  ...require('./definitions/road'),
  ...require('./definitions/rail'),
  ...require('./definitions/util'),
];
