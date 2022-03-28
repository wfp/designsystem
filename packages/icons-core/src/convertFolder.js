import path from 'path';
import fs from 'fs';
import read from 'fs-readdir-recursive';
import rollup from './rollup';

const fsPromises = fs.promises;

export function convertFolder(srcFolder, distFolder, convertFile, config) {
  const files = read(srcFolder);
  console.log('convetFolder', srcFolder, distFolder);
  files.forEach((fileName) => {
    convertFile(
      path.join(srcFolder, fileName),
      path.join(distFolder, `${path.parse(fileName).name}`),
      config
    );
  });

  function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));

      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      if (basename !== 'index')
        return `export { default as ${basename} } from './${basename}';`;
    });
    return exportEntries.join('\n');
  }

  const distIndex = path.join(distFolder, '/index.js');

  async function writeIndex(distIndex) {
    try {
      return fsPromises.writeFile(
        distIndex,
        defaultIndexTemplate(read(distFolder))
      );
    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }

  writeIndex(distIndex);

  console.log(`Generated index: ${distIndex}`);

  rollup(distIndex);
}
