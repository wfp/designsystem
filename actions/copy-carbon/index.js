const request = require('request');
const unzipper = require('unzipper');

request(
  'https://github.com/carbon-design-system/carbon/archive/refs/heads/main.zip'
).pipe(unzipper.Extract({ path: 'output' }));
