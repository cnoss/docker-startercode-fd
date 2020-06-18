const shell = require('shelljs');

const dockerErrorMessage = 'Cannot connect to the Docker';
const dockerCheck = 'docker info';

console.log('');
console.log('// ----------------------------------------------------------------------');
console.log('// Looking for Docker …');

const dockerAlive = shell.exec(dockerCheck, { silent: true }).stdout;
if (dockerAlive.match(dockerErrorMessage)) {
  console.log('// Cannot connect to the Docker daemon.');
  console.log('// Is the docker daemon running?');
  console.log('// If not: start docker! :)');
  process.exit();
} else {
  console.log('// success :)');
}
