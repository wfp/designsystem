const which = require('npm-which')(__dirname);
console.log('which', which);
const babelPath = which.sync('babel');
console.log('babelPath', babelPath);
