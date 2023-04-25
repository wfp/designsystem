import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { convertFolder, jsx, svgOptimized /* rollup*/ } from '@wfp/icons-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = path.resolve(__dirname, 'src/logos');

const distFolder = path.resolve(__dirname, 'dist');

console.log('srcFolder', srcFolder);

convertFolder(srcFolder, distFolder, jsx);
