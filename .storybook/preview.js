import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { addReadme } from 'storybook-readme';

import { getStorybook } from '@storybook/react';
import withAutoNotes from './wfp-storybook';
import { withA11y } from '@storybook/addon-a11y';

import Container from './Container';

import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

import wfpTheme from './wfpTheme';

addDecorator(
  withTests({
    results,
  })
);

addDecorator(withA11y);

addParameters({
  backgrounds: [
    { name: 'WFP white (ui-01)', value: '#fbfcfc', default: true },
    { name: 'WFP background (ui-02)', value: '#eff2f5', default: true },
    { name: 'WFP brand (interactive-01)', value: '#0a6eb4' },
  ],
});

addDecorator(addReadme);

addDecorator((story, context) => <Container story={story} context={context} />);

addDecorator(withAutoNotes);

function sortEachDepth(orderPerDepth) {
  return (a, b) => {
    // If the two stories have the same story kind, then use the default
    // ordering, which is the order they are defined in the story file.
    if (a[1].kind === b[1].kind) {
      return 0;
    }
    const storyKindA = a[1].kind.split('/');
    const storyKindB = b[1].kind.split('/');
    let depth = 0;
    let nameA, nameB, indexA, indexB;
    let ordering = orderPerDepth[0] || [];
    while (true) {
      nameA = storyKindA[depth] ? storyKindA[depth] : '';
      nameB = storyKindB[depth] ? storyKindB[depth] : '';

      if (nameA === nameB) {
        // We'll need to look at the next part of the name.
        depth++;
        ordering = orderPerDepth[depth] || [];
        continue;
      } else {
        // Look for the names in the given `ordering` array.
        indexA = ordering.indexOf(nameA);
        indexB = ordering.indexOf(nameB);

        // If at least one of the names is found, sort by the `ordering` array.
        if (indexA !== -1 || indexB !== -1) {
          // If one of the names is not found in `ordering`, list it at the place of '...' or last.
          if (indexA === -1) {
            indexA = ordering.indexOf('...') || ordering.length;
          }
          if (indexB === -1) {
            indexB = ordering.indexOf('...') || ordering.length;
          }
          return indexA - indexB;
        }
      }
      // Otherwise, use alphabetical order.
      return nameA.localeCompare(nameB);
    }
  };
}

addParameters({
  options: {
    theme: wfpTheme,
    showPanel: true,
    isToolshown: true,
    /* storySort: sortEachDepth([
      ['Getting started|Getting started', 'Core', 'Buttons', '...'][('Intro', '...', 'System')], // 1. level - ordered like this rest default order // 2. level - Intro first, System last in between default order
      ['Overview', '...'], // 3. level - Intro first rest default order
    ]),*/

    storySort: (a, b) => {
      /*if (
        a[1].parameters.options.sort === undefined ||
        b[1].parameters.options.sort === undefined
      ) {
        return null;
      }*/

      //a[1].kind === b[1].kind && 1 === 2
      return a[1].parameters.options.sort
        ? a[1].parameters.options.sort.localeCompare(
            b[1].parameters.options.sort,
            undefined,
            {
              numeric: true,
            }
          )
        : b[1].kind.split('|')[0] === 'Design' &&
          a[1].kind.split('|')[0] !== 'Design'
        ? 1
        : b[1].kind.split('|')[0] === 'Getting started' &&
          a[1].kind.split('|')[0] !== 'Getting started'
        ? 1
        : 0 /* a[1].id.localeCompare(b[1].id, undefined, { numeric: true }) */;

      /*return a[1].kind === b[1].kind
        ? 0
        : a[1].name.toString().localeCompare(b[1].name.toString(), undefined, {
            numeric: true,
          });*/

      return a[1].name.length > b[1].name.length ? 1 : 0;
      //return a[1].parameters.options.sort > b[1].parameters.options.sort;

      return a[1].kind === b[1].kind
        ? 0
        : a[1].parameters.options.sort > b[1].parameters.options.sort;
      //: a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },
});

function loadStories() {
  const req = require.context('../src', true, /\-story\.js$/);
  let keys = req.keys();

  console.log(keys);
  //keys.unshift('./documentation/Intro/Intro-story.js');
  keys.forEach(filename => req(filename));
}

configure(loadStories, module);

export { getStorybook };
