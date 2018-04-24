import React from 'react';
import { storiesOf } from '@storybook/react';
import User from '../User';

storiesOf('User', module)
  .addWithInfo(
    'default',
    `
      The example below shows an User Icon.
    `,
    () => <User />
  )
;
