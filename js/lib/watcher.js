require('dotenv').config();
const chokidar = require('chokidar');

module.exports = function (target, cb) {
  chokidar.watch(target, { ignoreInitial: true, awaitWriteFinish: true })
    .on('ready', cb)
    .on('change', cb)
    .on('add', cb)
};
