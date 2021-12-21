const fs = require('fs');
const path = require('path');
const testFolder = path.resolve(__dirname, '../src/svg');
const testFolderIllustrations = path.resolve(
  __dirname,
  '../src/svg/illustrations'
);

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
    - WFP legacy icons`;
});

fs.readdirSync(testFolderIllustrations).forEach((file) => {
  const fileending = file.split('.').pop();
  if (fileending !== 'svg') return;

  categoryList = `${categoryList}
        - ${file.replace('.svg', '')}`;

  icons = `${icons}
- name: ${file.replace('.svg', '')}
  friendly_name: ${file.replace('.svg', '')}
  color: true
  aliases:
    - WFP legacy icons`;
});

fs.writeFile('./pictograms.yml', icons, (err) => {
  if (err) throw err;
});

fs.writeFile('./categories.yml', categoryList, (err) => {
  if (err) throw err;
});
