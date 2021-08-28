import chokidar from 'chokidar';

export default function (target: string[], cb: () => {}) {
  chokidar.watch(target, { ignoreInitial: true, awaitWriteFinish: true })
    .on('ready', cb)
    .on('change', cb)
    .on('add', cb)
};
