const { config } = require('./config');

config({
  source: `tokens/**/*.json`,
  buildPath: `distDark`,
  themeName: 'dark',
});
