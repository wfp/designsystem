import { transform } from '@svgr/core';
import fs from 'fs';

const filename = 'abc.js';

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`;

const jsCode = await transform(
  svgCode,
  {
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    icon: true,
  },
  { componentName: 'MyComponent' }
);

fs.writeFile(filename, jsCode, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
