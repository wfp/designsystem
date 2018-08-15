import React from 'react';
import { storiesOf } from '@storybook/react';

import { exampleStory } from '../../../.storybook/lucid-docs-addon';
import HtmlComponent from '../../documentation/HtmlComponent';

import { withReadme } from 'storybook-readme';
import readme from '../../documentation/HTML-README.md';

import Html from '!!raw-loader!./TextInput.html';

storiesOf('TextInput', module)
  .addDecorator(withReadme([readme]))
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html only',
    `
     html view
    `,
    () => null
  );
