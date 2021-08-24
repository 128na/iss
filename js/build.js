const makePak = require('./makePak');

const definitions = require('../src/definitions');
const targetDir = process.env.TARGET_DIR || './src';
const outputDir = process.env.OUTPUT_DIR || './dist';
const makeobjPath = process.env.MAKEOBJ_PATH;

makePak(makeobjPath, targetDir, outputDir, definitions);
