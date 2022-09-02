import { transform } from '@svgr/core';
import fs from 'fs';

import path from 'path';
import { svgConfig as defaultSvgConfig } from './svgConfig';

import { pascalCase } from 'change-case';

const fsPromises = fs.promises;

export async function jsx(fileName, distName, svgConfig = defaultSvgConfig) {
  const svgCode = fs.readFileSync(fileName, 'utf8');

  const name = pascalCase(path.parse(fileName).name);

  const jsCode = await transform(svgCode, svgConfig(defaultSvgConfig()), {
    componentName: name,
  });

  if (!fs.existsSync(path.dirname(distName))) {
    console.log('Create directory: ', path.dirname(distName));
    fs.mkdirSync(path.dirname(distName), { recursive: true });
  }

  const output = path.join(path.dirname(distName), name + '.js');
  await fsPromises.writeFile(output, jsCode);
  return output;
}
