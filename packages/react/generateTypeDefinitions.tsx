import { rm, stat, readdir, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { parse } from 'react-docgen-typescript';

const distUrl = path.resolve(__dirname, '../../website/types/');

const options = {
  savePropValueAsString: true,
  propFilter: (prop, component) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find(
        (declaration) => {
          return !declaration.fileName.includes('node_modules');
        }
      );

      return Boolean(hasPropAdditionalDescription);
    }

    return true;
  },
};

export default async function walk(directory: string) {
  let fileList: string[] = [];

  const files = await readdir(directory);
  for (const file of files) {
    const p = path.join(directory, file);
    if ((await stat(p)).isDirectory()) {
      fileList = [...fileList, ...(await walk(p))];
    } else {
      fileList.push(p);
    }
  }

  const tsxFileList = fileList.filter(
    (file) => file.endsWith('.tsx') && !file.includes('stories')
  );

  await Promise.all(
    tsxFileList.map(async (file) => {
      const propTypes = JSON.parse(JSON.stringify(parse(file, options)));

      try {
        await mkdir(path.dirname(path.join(distUrl, file)), {
          recursive: true,
        });
      } catch (error) {
        console.log('collectTypes error', error);
      }

      console.log(
        'propTypes',
        path.join(distUrl, file.replace('.tsx', '.json'))
      );
      await writeFile(
        path.join(distUrl, file.replace('.tsx', '.json')),
        JSON.stringify(propTypes, null, 2)
      );
      return null;
    })
  );

  return fileList;
}

async function startGenerateTypes() {
  await rm(distUrl, { recursive: true, force: true });

  await walk('./src');
  process.exit();
}

startGenerateTypes();
