import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
// import { checkA11y } from 'storybook-addon-a11y';

import { getStorybook } from '@storybook/react';
//import { initializeRTL } from 'storybook-addon-rtl';


import Container from './Container';

addDecorator(
  withInfo({
    maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
  })
);

//initializeRTL();
 

addDecorator((story, context) => <Container story={story} context={context} />);

addDecorator(
  withOptions({
    name: `WFP UI`,
    url: 'https://github.com/wfp/ui',
    hierarchySeparator: /\./,
  })
);

// addDecorator(checkA11y);

function loadStories() {
  const req = require.context('../src', true, /\-story\.js$/);

  let keys = req.keys();

  keys.unshift('./documentation/Intro-story.js');

  keys.forEach(filename => req(filename));
}

function loadHtml() {
  const req = require.context('../src', true, /\.hbs$/);

  let keys = req.keys();
  keys.forEach(filename => req(filename));

}

configure(loadStories, module);

export { getStorybook };
