import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import convertFolder from './src/convertFolder.mjs';
import convertToJsx from './src/convertToJsx.mjs';
import convertToSvgOptimized from './src/convertToSvgOptimized.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = path.resolve(__dirname, 'icons');
const distFolder = path.resolve(__dirname, 'dist/jsx');

convertFolder(srcFolder, distFolder, convertToJsx);
convertFolder(
  srcFolder,
  path.resolve(__dirname, 'dist/svg'),
  convertToSvgOptimized
);
