import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text } from '@storybook/addon-knobs';
import FormHint from './FormHint';

import { Tooltip } from 'react-tippy';

const props = () => ({
  className: 'some-class',
  children: text('Label text (labelText)', 'Lorem Ipsum'),
});

storiesOf('Components|FormHint', module)
  .addDecorator(withKnobs)
  .add('Default (in development)', () => (
    <label className="wfp--label" htmlFor="input">
      The Label <FormHint {...props()} TooltipComponent={Tooltip} />
    </label>
  ));
