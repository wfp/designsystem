import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, object, text } from '@storybook/addon-knobs';
import FormError from '../FormError';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

const props = {
  formError: () => ({
    className: 'some-class',
    message: object('Error message (message)', {
      generic: 'Something went terribly wrong',
      fields: [
        {key: 'fieldkey', message: 'One field which is wrong'},
        {key: 'anotherfieldkey', message: 'Another field which is wrong'}
      ]
    }),
    submitFailed: boolean('Submit failed (submitFailed)', true),
  })
};



storiesOf('FormError (experimental)', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .add(
    'Default',
    withInfo({
      text: `
        The FormError is displayed at the top of the form if a form is not valid when trying to submit it.
      `,
    })(() => (
      <FormError {...props.formError()} />
    ))
  );
