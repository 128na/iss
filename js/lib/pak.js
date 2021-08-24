require('dotenv').config();
const { spawnSync } = require('child_process');

module.exports = function (makeobjPath, size = 256, pakFile, datFiles = []) {
  const result = spawnSync(makeobjPath, ['QUIET', `PAK${size}`, pakFile, ...datFiles]);
  console.log({
    status: result.status,
    stderr: result.stderr.toString(),
    stdout: result.stdout.toString(),
  });
  if (result.status !== 0) {
    throw new Error('pak failed ' + pakFile);
  }
}
