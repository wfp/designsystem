import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
// import { checkA11y } from 'storybook-addon-a11y';

import { getStorybook } from '@storybook/react';
//import { initializeRTL } from 'storybook-addon-rtl';

import Container from './Container';

import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

addDecorator(
  withInfo({
    maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
    styles: stylesheet => {
      console.log('stylesheet', stylesheet);
      return {
        // Setting the style with a function
        ...stylesheet,
        infoBody: {
          ...stylesheet.infoBody,
          fontFamily: 'Open Sans',
          lineHeight: '1.6em',
          fontSize: '1rem',
        },
        propTableHead: {
          ...stylesheet.propTableHead,
          marginTop: '20px',
          marginBottom: '10px',
          fontSize: '1.2rem',
        },
        source: {
          h1: {
            //...stylesheet.source.h1,
            fontSize: '1.4rem',
            margin: '1rem 0',
            fontWeight: '700',
          },
        },
        header: {
          ...stylesheet.header,
          body: {
            ...stylesheet.header.body,
            borderBottom: 'none',
            marginBottom: '0',
            paddingTop: '0',
          },
          h1: {
            ...stylesheet.header.h1,
            fontSize: '2.25rem',
            fontWeight: '700',
          },
          h2: {
            ...stylesheet.header.h2,
            fontSize: '0.9rem',
            color: '#8c9ba5',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            fontWeight: 'normal',
          },
        },
      };
    },
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
