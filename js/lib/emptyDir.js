const fs = require('fs-extra');

/**
 * ディレクトリを空にする。ディレクトリが無ければ再帰的に作成する
 * @see https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir-sync.md
 */
module.exports = function (dir) {
  fs.emptyDirSync(dir);
};

