import path from 'path';
import fs from 'fs';
import read from 'fs-readdir-recursive';

export default function convertFolder(srcFolder, distFolder, convertFile) {
  console.log(`${srcFolder} => ${distFolder}`);
  const files = read(srcFolder);
  files.forEach((fileName) => {
    convertFile(
      path.join(srcFolder, fileName),
      path.join(distFolder, `${path.parse(fileName).name}`)
    );
  });

  function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));

      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `export { default as ${exportName} } from './${basename}'`;
    });
    return exportEntries.join('\n');
  }

  console.log(defaultIndexTemplate(files));

  fs.writeFile(distFolder, files, function (err) {
    if (err) return console.log(err);
    console.log(`${fileName} > ${output}`);
  });
}
