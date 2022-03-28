import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';

export async function svgOptimized(fileName, distName) {
  const svgCode = fs.readFileSync(fileName, 'utf8');

  const result = optimize(svgCode, {
    // all config fields are also available here
    multipass: true,
  });
  const optimizedSvgString = result.data;

  console.log('Create directory', path.dirname(distName));
  if (!fs.existsSync(path.dirname(distName))) {
    fs.mkdirSync(path.dirname(distName), { recursive: true });
  }

  const output = distName + '.svg';

  fs.writeFile(output, optimizedSvgString, function (err) {
    if (err) return console.log(err);
    console.log(`${fileName} > ${output}`);
  });
}
