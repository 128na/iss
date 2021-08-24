require('dotenv').config();
const { spawnSync } = require('child_process');

module.exports = function (makeobjPath, pakFileLib, pakFiles = []) {
  const result = spawnSync(makeobjPath, ['QUIET', 'MERGE', pakFileLib, ...pakFiles]);
  console.log({
    status: result.status,
    stderr: result.stderr.toString(),
    stdout: result.stdout.toString(),
  });
  if (result.status !== 0) {
    throw new Error('merge failed ' + pakFileLib);
  }
}
