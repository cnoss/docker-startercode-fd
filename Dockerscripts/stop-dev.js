const shell = require('shelljs');
const config = require('../Dockerconfig.json');
const alive = require('./is-docker-running');

const pwd = process.cwd();

const imageName = `${config.name}-dev`;
const dockerCheck = `docker ps -q -f name=${imageName}`;
const dockerStop = `docker stop ${imageName}`;

console.log('');
console.log('// ----------------------------------------------------------------------');
console.log('// Stopping Container');

const container = shell.exec(dockerCheck, { silent: true }).stdout;
if (container.length > 0) {
  if (shell.exec(dockerStop).code !== 0) {
    shell.echo(`Error with command: ${dockerStop}`);
    shell.exit(1);
  }
}
