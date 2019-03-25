import React from 'react';
import { storiesOf } from '@storybook/react';

import { exampleStory } from '../../.storybook/lucid-docs-addon';
import HtmlComponent from '../documentation/HtmlComponent';

import readme from '../documentation/HTML-README.md';

function importAll(r) {
  return r.keys().map(r);
}

/* Import all html documents */
const req = require.context('./', true, /\.hbs$/);

const htmlData = importAll(req);

let keys = req.keys();

keys.forEach(function(element, i) {
  var split = element.split('/');

  const additionalName = split[split.length - 1]
    .replace('.hbs', '')
    .replace(split[split.length - 2] + '-', ' ');

  storiesOf('Components|' + split[split.length - 2], module)
    .addDecorator(
      exampleStory({
        code: htmlData[i],
        options: { showAddonPanel: true },
      })
    )
    .addDecorator(story => (
      <HtmlComponent html={htmlData[i]}>{story()}</HtmlComponent>
    ))
    .add('html ' + additionalName, () => null, {
      info: {
        text: readme,
        source: false,
        propTables: false,
      },
    });
});
