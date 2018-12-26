import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

import { withKnobs, text } from '@storybook/addon-knobs';
import FormHint from './FormHint';

const props = () => ({
  className: 'some-class',
  children: text('Label text (labelText)', 'Lorem Ipsum'),
});

storiesOf('FormHint', module)
  .addDecorator(withKnobs)
  .add(
    'Default (in development)',
    () => (
      <div>
        <label className="wfp--label" htmlFor="input">
          The Label <FormHint {...props()} />
        </label>
        <input id="input" />
      </div>
    ),
    {
      info: {
        text: readme,
      },
    }
  );
