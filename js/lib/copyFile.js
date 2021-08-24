const fs = require('fs-extra');

/**
 * ファイルコピー
 * @see https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md
 */
module.exports = function (from, to, overwrite = true) {
  fs.copySync(from, to, { overwrite });
};
