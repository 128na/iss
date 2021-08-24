require('dotenv').config();
const { spawn } = require('child_process');

let childProcess = null;
module.exports = function (simutransPath) {
  if (childProcess) {
    childProcess.kill();
  }
  try {
    childProcess = spawn(simutransPath, { detached: true });
  } catch (e) {
    console.error(e);
  }
}
