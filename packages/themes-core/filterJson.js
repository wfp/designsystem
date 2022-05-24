const { readFileSync, writeFileSync } = require('fs');
const _ = require('lodash');
const filterDeep = require('deepdash/getFilterDeep')(_);

const json = JSON.parse(
  readFileSync('./tokens/design-tokens.tokens.json', 'utf8')
);

let filtrate = filterDeep(json, (value, key, parent) => {
  console.log(key, parent);
  if (key == 'description') return false;
  if (key == 'good' && value == true) return true;
  return true;
});

writeFileSync(
  './tokens/design-tokens.tokens.new.json',
  JSON.stringify(filtrate)
);
