require('dotenv').config();
const { execSync } = require('child_process');

module.exports = function (makeobjPath, pakFileLib, pakFiles = []) {
  try {
    execSync(`${makeobjPath} merge ${pakFileLib} ${pakFiles.join(' ')}`);
  } catch (err) {
    console.log('merge failed', { err });
  }
}
