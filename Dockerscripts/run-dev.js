const shell = require('shelljs');
const config = require('../Dockerconfig.json');
const alive = require('./is-docker-running');

const pwd = process.cwd();

const imageName = `${config.name}-dev`;
const dockerRun = `docker run --rm -t -d -p ${config.port}:8080 -p 35729:35729 -v ${pwd}:/srv --name ${imageName} ${imageName}`;
const dockerExec = `docker exec ${imageName} rm htdocs && ln -sf src/ htdocs`;


console.log('');
console.log('// ----------------------------------------------------------------------');
console.log('// Starting Container in Development mode ...');

if (shell.exec(dockerRun).code !== 0) {
  shell.echo(`Error with command: ${dockerRun}`);
  shell.exit(1);
}

if (shell.exec(dockerExec).code !== 0) {
  shell.echo(`Error with command: ${dockerExec}`);
  shell.exit(1);
}

console.log('');
console.log('// ----------------------------------------------------------------------');
console.log(`HTTP Server available on: http://127.0.0.1:${config.port}`);
console.log('Live Reload available on port http://127.0.0.1:35729');
console.log('');
