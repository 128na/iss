const reload = require('require-reload')(require);
/*
  pakFile: iss_{waytype.name?}_{obj.name}.pak
  datFile: {obj.name}/{waytype.name}/something
  imageSet: {obj.name}/{waytype.name}/something
 */

module.exports = (() => [
  ...reload('./definitions/road'),
  ...reload('./definitions/rail'),
  ...reload('./definitions/util'),
])();
