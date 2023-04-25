import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { convertFolder, jsx, svgOptimized } from '@wfp/icons-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = '../humanitarian-icons/src'; // path.resolve(__dirname, '@wfp/humanitarian-icons/src');
const distFolder = path.resolve(__dirname, 'dist');

convertFolder(srcFolder, distFolder, jsx, (defaultConfig) => {
  return {
    ...defaultConfig,
    replaceAttrValues: {
      ...defaultConfig.replaceAttrValues,
      'url(#a)': 'undefined',
    },
  };
});
/*convertFolder(
  srcFolder,
  path.resolve(__dirname, 'dist/svg'),
  convertToSvgOptimized
);
*/
