import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { convertFolder, jsx, svgOptimized } from '@un/icons-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = path.resolve(__dirname, '../pictograms/src');
const distFolder = path.resolve(__dirname, 'dist/jsx');

convertFolder(srcFolder, distFolder, jsx);
/*convertFolder(
  srcFolder,
  path.resolve(__dirname, 'dist/svg'),
  convertToSvgOptimized
);
*/
