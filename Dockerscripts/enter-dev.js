const config = require('../Dockerconfig.json');
const alive = require('./is-docker-running');

const imageName = `${config.name}-dev`;
const dockerExec = `docker exec -it ${imageName} env TERM=xterm-256color /bin/bash`;

console.log('');
console.log('// ----------------------------------------------------------------------');
console.log(`// Type <${dockerExec}> to enter Docker container.`);
console.log('// Type <exit> to exit.');
console.log('// Type <npm run watch> to start watchmode.');
console.log('// Type <npm run> for all available commands.');
console.log('');
