import { transform } from '@svgr/core';
import fs from 'fs';
import path from 'path';

import { pascalCase } from 'change-case';

export default async function convertFile(fileName, distName) {
  const svgCode = fs.readFileSync(fileName, 'utf8');

  const name = pascalCase(path.parse(fileName).name);

  const jsCode = await transform(
    svgCode,
    {
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      icon: true,
    },
    { componentName: name }
  );

  console.log('Create directory', path.dirname(distName));
  if (!fs.existsSync(path.dirname(distName))) {
    fs.mkdirSync(path.dirname(distName), { recursive: true });
  }

  const output = path.join(path.dirname(distName), name + '.jsx');

  fs.writeFile(output, jsCode, function (err) {
    if (err) return console.log(err);
    console.log(`${fileName} > ${output}`);
  });
}
