import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';
import User from '../User';

storiesOf('User', module)
  .addDecorator(story => <SingleComponent pageWidth="wide">{story()}</SingleComponent>)
  .addWithInfo(
    'default',
    `
      The example below shows an User Icon.

      ~~~js
      import { User } from '@wfp/ui';
      ~~~
    `,
    () => <User
            title="Max Mustermann"
          />
  )
   .addWithInfo(
    'Ellipsis',
    `
      The example below shows an User Icon.
    `,
    () => <User
            ellipsis
            title="Very long and difficult username"
          />
  )
  .addWithInfo(
    'Image only',
    `
      The example below shows an User Icon.
    `,
    () => <User
          />
  )
;
