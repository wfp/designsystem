import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';
import { Unit } from '../Unit';

storiesOf('Unit', module)
  .addDecorator(story => <SingleComponent pageWidth="wide">{story()}</SingleComponent>)
  .addWithInfo(
    'default',
    `
      The example below shows an Unit.

      ~~~js
      import { Unit } from '@wfp/ui';
      ~~~
    `,
    () => <Unit
            type="Musd"
          >231321133</Unit>
  )
;
