import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';

import { getStorybook } from '@storybook/react';
import withAutoNotes from './wfp-storybook';

import Container from './Container';

import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

import wfpTheme from './wfpTheme';

//require('prismjs');
//require('prismjs/themes/prism.css');

addDecorator(
  withTests({
    results,
  })
);

addParameters({
  backgrounds: [
    { name: 'WFP white (ui-01)', value: '#fbfcfc', default: true },
    { name: 'WFP background (ui-02)', value: '#eff2f5', default: true },
    { name: 'WFP brand (brand-01)', value: '#0a6eb4' },
  ],
});

addDecorator(addReadme);

addDecorator((story, context) => <Container story={story} context={context} />);

addDecorator(withAutoNotes);

addParameters({
  options: {
    name: 'WFP UI',
    url: 'https://github.com/wfp/ui',
    theme: wfpTheme,
    showPanel: true,
    isToolshown: true,
  },
});

function loadStories() {
  const req = require.context('../src', true, /\-story\.js$/);
  let keys = req.keys();
  keys.unshift('./documentation/Intro/Intro-story.js');
  keys.forEach(filename => req(filename));
}

configure(loadStories, module);

export { getStorybook };
