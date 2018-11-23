import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

import { getStorybook } from '@storybook/react';

import {
  configure as configureViewport,
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import infoAddon from '@storybook/addon-info';
import { checkA11y } from 'storybook-addon-a11y';
import Container from './Container';
import { initializeRTL } from '../src/rtl-addon';
initializeRTL();

// addDecorator(checkA11y);
addDecorator((story, context) => <Container story={story} context={context} />);

// addon-info
setDefaults({
  styles: stylesheet => {
    return {
      ...stylesheet,
      header: {
        ...stylesheet.header,
        h1: {
          ...stylesheet.header.h1,
          fontFamily: '"Open Sans",sans-serif',
          fontWeight: 700,
        },
        h2: {
          ...stylesheet.header.h2,
          color: '#888C8F',
          fontFamily: '"Open Sans",sans-serif',
          fontSize: '16px',
          fontWeight: 600,
        },
      },
      infoBody: {
        ...stylesheet.infoBody,
        fontFamily: '"Open Sans",sans-serif',
        fontWeight: 400,
      },
    };
  },
  inline: false, // Toggles display of header with component name and description
});

setAddon(infoAddon);

/* Add Viewports */
const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

/*
configureViewport({
  defaultViewport: 'iphone6',
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
});*/

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'WFP UI Kit',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: true,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\./,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off mulitple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  const req = require.context('../src', true, /\-story\.js$/);

  let keys = req.keys();

  keys.unshift('./documentation/Intro-story.js');

  keys.forEach(filename => req(filename));
}

function loadHtml() {
  const req = require.context('../src', true, /\.html$/);

  let keys = req.keys();
  keys.forEach(filename => req(filename));

  console.log(keys);
}

console.log(loadHtml());

/*
import React from 'react';
import { storiesOf } from '@storybook/react';

import { exampleStory } from '../../../.storybook/lucid-docs-addon';
import HtmlComponent from '../../documentation/HtmlComponent';

import { withReadme } from 'storybook-readme';
import readme from '../../documentation/HTML-README.md';

import Html from '!!raw-loader!./Credits.html';



storiesOf('Credits', module)
  .addDecorator(withReadme([readme]))
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .add(
    'html',
    (() => null)
  );

*/

configure(loadStories, module);

export { getStorybook };
