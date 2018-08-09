import React from 'react';
import { storiesOf } from '@storybook/react';

import { exampleStory } from '../../../.storybook/lucid-docs-addon';
import HtmlComponent from '../../documentation/HtmlComponent';

import Html from '!!raw-loader!./Checkbox.html';


storiesOf('Checkbox', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  );
