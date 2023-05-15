import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { convertFolder, jsx, svgOptimized } from '@un/icons-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = '../humanitarian-icons/src'; // path.resolve(__dirname, '@un/humanitarian-icons/src');
const distFolder = path.resolve(__dirname, 'dist');

const config = (defaultConfig) => {
  return {
    ...defaultConfig,
    replaceAttrValues: {
      ...defaultConfig.replaceAttrValues,
      'url(#a)': 'undefined',
    },
  };
};

convertFolder(srcFolder, distFolder, jsx /* TODO: Check config */);
/*convertFolder(
  srcFolder,
  path.resolve(__dirname, 'dist/svg'),
  convertToSvgOptimized
);
*/
