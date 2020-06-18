const shell = require('shelljs');
const config = require('../Dockerconfig.json');
const alive = require('./is-docker-running');

const pwd = process.cwd();

const imageName = `${config.name}-dev`;
const dockerBuild = `docker build -t ${imageName} -f Dockerfile.dev .`;
const dockerCheck = `docker images ${imageName}`;
const dockerRemove = `docker rmi ${imageName} -f`;

console.log('');
console.log('// ----------------------------------------------------------------------');
console.log('// Building Development Container');

const image = shell.exec(dockerCheck, { silent: true }).stdout;
if (image.match(imageName)) {
  console.log('// Remove existing container');
  if (shell.exec(dockerRemove).code !== 0) {
    shell.echo(`Error with command: ${dockerRemove}`);
    shell.exit(1);
  }
}

if (shell.exec(dockerBuild).code !== 0) {
  shell.echo(`Error with command: ${dockerBuild}`);
  shell.exit(1);
}
