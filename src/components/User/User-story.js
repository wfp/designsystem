import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';
import User from '../User';

import HtmlComponent from '../../documentation/HtmlComponent';
import Html from '!!raw-loader!./User.html';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

storiesOf('User', module)
  .addDecorator(story => (
    <SingleComponent pageWidth="wide">{story()}</SingleComponent>
  ))
  .addWithInfo(
    'default',
    `
      The example below shows an User Icon.

      ~~~js
      import { User } from '@wfp/ui';
      ~~~
    `,
    () => <User name="Max Mustermann" />
  )
  .addWithInfo(
    'Small',
    `
      The example below shows an User Icon with the Username only visible on desktop devices.
    `,
    () => <User small name="Very long and difficult username" />
  )
  .addWithInfo(
    'Ellipsis',
    `
      The example below shows an User Icon.
    `,
    () => <User ellipsis name="Very long and difficult username" />
  )
  .addWithInfo(
    'Image only',
    `
      The example below shows an User Icon.
    `,
    () => <User />
  );

storiesOf('User', module)
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