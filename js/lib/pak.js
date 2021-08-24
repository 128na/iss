require('dotenv').config();
const { execSync } = require('child_process');

module.exports = function (makeobjPath, size = 256, pakFile, datFiles = []) {
  try {
    execSync(`${makeobjPath} pak${size} ${pakFile} ${datFiles.join(' ')}`);
  } catch (err) {
    console.log('pak failed', { err });
  }
}
