#!/usr/bin/env node
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const proc = require('child_process');

if (process.argv.length < 3) {
  console.log('You have to provide a name to your app.');
  console.log('For example :');
  console.log('    npx create-my-design-system my-design-system');
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = 'https://github.com/wfp/designsystem/tree/un-core-v1/wfp';

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log('Downloading files...');
    //proc.execSync(`fetcher  --url="${git_repo}" --out="~/bbb"`);

    var fetcher = proc.spawn(
      `fetcher  --url="${git_repo}" --out="./my-design-system"`,
      {
        shell: true,
        stdio: 'inherit',
      }
    );

    fetcher.on('exit', function (code) {
      console.log(
        `Downloaded from GitHub (${git_repo})process exited with code ${code.toString()}`
      );

      process.chdir(projectPath);

      console.log('Installing dependencies...');
      proc.execSync('yarn install');

      console.log('Removing useless files');
      proc.execSync('npx rimraf ./.git');
      fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true });

      console.log('The installation is done, this is ready to use !');
    });

    //execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);
  } catch (error) {
    console.log(error);
  }
}
main();
