const progress = require('@gyumeijie/cli-progress');
const colors = require('colors');

// Customizable progress bar
const bar = new progress.Bar({
  format: `fetcher |${colors.cyan('{bar}')}| {percentage}% || {value}/{total} File(s) || {status} || authenticated: {doesUseAuth}`,
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
});

module.exports = {
  bar,
};
