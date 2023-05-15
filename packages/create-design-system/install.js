#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const proc = require('child_process');
const githubFilesFetcher = require('./fetcher');
const prompts = require('prompts');
const shell = require('shelljs');

var projectName = process.argv[2];
const currentPath = process.cwd();
const git_repo = 'https://github.com/wfp/designsystem/tree/un-core-v1/wfp';

async function main() {
  console.log(
    chalk.blue.bold('UN core'),
    chalk.white('| create-design-system CLI')
  );

  const onCancel = (prompt) => {
    return true;
  };

  if (process.argv.length < 3) {
    const project = await prompts({
      type: 'text',
      name: 'value',
      hint: 'For example: npx @un/create-my-design-system my-design-system',
      message: `You have to provide a name to your design system. What's your project name?`,
      onCancel,
    });
    projectName = project.value;
    if (!projectName) process.exit();
  }

  const projectPath = path.join(currentPath, projectName);

  // Enable to detect CTRL+C
  process.on('SIGINT', () => {
    if (projectPath !== '') cleanUpOutputDirectory(projectPath);
  });

  function cleanUpOutputDirectory(projectPath) {
    if (projectPath !== undefined) {
      //shell.rm('-rf', projectPath);
      process.exit();
      return;
    }
  }

  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      const response = await prompts({
        type: 'confirm',
        name: 'value',
        message: `The folder ${projectName} already exist in the current directory, do you want to use override the existing directory?`,
        initial: true,
        onCancel,
      });
    } else {
      if (!response) {
        cleanUpOutputDirectory(projectPath);
      }
    }
  }

  console.log('Downloading files to project path:', chalk.blue(projectPath));

  const response = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'What repository style do you want to use?',
    choices: [
      { title: 'Yarn/lerna mono repository', value: 'yarn' },
      { title: 'npm (not available yet)', value: 'npm', disabled: true },
    ],
    max: 2,
    hint: '- Space to select. Return to submit',
    onCancel,
  });

  const fetcher = await githubFilesFetcher({
    url: git_repo,
    out: projectPath,
  });

  console.log('Installing dependencies...');

  process.chdir(projectPath);

  proc.execSync('yarn install');

  console.log('Lerna init...');

  proc.execSync('lerna init');

  //console.log('Removing useless files');
  //proc.execSync('npx rimraf ./.git');
  //fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true });

  console.log(chalk.green('The installation is done, this is ready to use!'));

  process.exit();
}
main();
