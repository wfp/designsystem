const fs = require('fs');
const path = require('path');
const testFolder = path.resolve(__dirname, '../src/svg/16');

var categoryList = '';
var icons = '';
fs.readdirSync(testFolder).forEach((file) => {
  categoryList = `${categoryList}
  - ${file.replace('.svg', '')}`;

  icons = `${icons}
- name: ${file.replace('.svg', '')}
  friendly_name: ${file.replace('.svg', '')}
  aliases:
    - WFP legacy icons
  sizes:
    - 16`;
});

console.log(icons);

// Write data in 'Output.txt' .
fs.writeFile('icons-output.yml', icons, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
