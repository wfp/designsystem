import path from 'path';
import fs from 'fs';
import read from 'fs-readdir-recursive';
import rollup from './rollup';
import del from 'del';
const fsPromises = fs.promises;

export async function convertFolder(
  srcFolder,
  distFolder,
  convertFile,
  config
) {
  const deletedDirectoryPaths = del.sync([distFolder]);
  fs.mkdirSync(distFolder, { recursive: true });

  var files = read(srcFolder);

  files = files.filter((file) => path.extname(file) === '.svg');

  console.log('files: ', files);

  await Promise.all(
    files.map(async (file) => {
      return convertFile(
        path.join(srcFolder, file),
        path.join(distFolder, `${path.parse(file).name}`),
        config
      );
    })
  );

  const exportEntries = read(distFolder).map((filePath) => {
    console.log(filePath);
  });

  function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      //console.log(filePath);

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
  await writeIndex(distIndex);

  console.log(`Generated index: ${distIndex}`);

  rollup(distIndex);
}
