const { config } = require('./config');

config({
  source: `tokens/**/*.json`,
  buildPath: 'dist', //`distDark`,
  //themeName: 'default', //'dark',
});
