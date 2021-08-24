
const watcher = require('./lib/watcher');
const merge = require('./lib/merge');
const copyFile = require('./lib/copyFile');
const makePak = require('./makePak');
const handleSimutrans = require('./lib/handleSimutrans');
const reload = require('require-reload')(require);

const targetDir = process.env.TARGET_DIR || './src';
const outputDir = process.env.OUTPUT_DIR || './dist';
const pakName = process.env.SERVE_PAK_NAME || 'dev.pak';
const makeobjPath = process.env.MAKEOBJ_PATH;
const pakDir = process.env.SIMUTRANS_PAKDIR;
const simutransPath = process.env.SIMUTRANS_EXECUTABLE;

const target = ['dat', 'png', 'js'].map(ext => `${targetDir}/*.${ext}`);
watcher(target, async () => {
  try {
    const definitions = reload('../src/definitions.js');
    const pakFiles = await makePak(makeobjPath, targetDir, outputDir, definitions, pakName);
    const mergePakFile = `${outputDir}/${pakName}`;

    merge(makeobjPath, mergePakFile, pakFiles);
    copyFile(mergePakFile, `${pakDir}/${pakName}`);
    handleSimutrans(simutransPath);
  } catch (e) {
    console.error(e);
  }
});
