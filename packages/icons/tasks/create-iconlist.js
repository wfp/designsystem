const fs = require('fs');
const path = require('path');
const testFolder = path.resolve(__dirname, '../src/svg');
const testFolder16 = path.resolve(__dirname, '../src/svg/16');

var categoryList = `categories:
- name: Actions
  subcategories:
    - name: Controls
      members:`;
var icons = '';

fs.readdirSync(testFolder).forEach((file) => {
  const fileending = file.split('.').pop();
  if (fileending !== 'svg') return;

  categoryList = `${categoryList}
        - ${file.replace('.svg', '')}`;

  icons = `${icons}
- name: ${file.replace('.svg', '')}
  friendly_name: ${file.replace('.svg', '')}
  aliases:
    - WFP legacy icons
  sizes:
    - glyph`;
});

fs.readdirSync(testFolder16).forEach((file) => {
  const fileending = file.split('.').pop();
  if (fileending !== 'svg') return;

  categoryList = `${categoryList}
        - ${file.replace('.svg', '')}`;

  icons = `${icons}
- name: ${file.replace('.svg', '')}
  friendly_name: ${file.replace('.svg', '')}
  aliases:
    - Carbon icons
  sizes:
    - 16`;
});

fs.writeFile('./icons.yml', icons, (err) => {
  if (err) throw err;
});

fs.writeFile('./categories.yml', categoryList, (err) => {
  if (err) throw err;
});
