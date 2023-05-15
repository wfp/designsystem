import { readFileSync, existsSync, mkdirSync, writeFile } from 'fs';
import { dirname } from 'path';
import { optimize } from 'svgo';

export async function svgOptimized(fileName, distName) {
  const svgCode = readFileSync(fileName, 'utf8');

  const result = optimize(svgCode, {
    // all config fields are also available here
    multipass: true,
  });
  const optimizedSvgString = result.data;

  console.log('Create directory', dirname(distName));
  if (!existsSync(dirname(distName))) {
    mkdirSync(dirname(distName), { recursive: true });
  }

  const output = distName + '.svg';

  writeFile(output, optimizedSvgString, function (err) {
    if (err) return console.log(err);
    console.log(`${fileName} > ${output}`);
  });
}
