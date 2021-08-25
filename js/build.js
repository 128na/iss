const emptyDir = require('./lib/emptyDir');
const makePak = require('./makePak');

const definitions = require(process.argv[2] || '../src/definitions.js');
const targetDir = './src';
const outputDir = process.argv[3] || './dist';
const makeobjPath = process.env.MAKEOBJ_PATH;

emptyDir(outputDir);
return makePak(makeobjPath, targetDir, outputDir, definitions)
  .then(() => 0)
  .catch(e => {
    console.error(e);
    return 1;
  });
