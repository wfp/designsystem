import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label from '../Label';

const labelInputProps = {
  className: 'some-class',
  id: 'tj-input',
  label: 'Number Input label',
  onChange: action('onChange'),
  onClick: action('onClick'),
  min: 0,
  max: 100,
  value: 50,
  step: 10,
  invalidText: 'Number is not valid',
};

const introText = `
  Label inputs are similar to text fields, but contain controls used to increase or decrease an incremental value. The Number Input component can be passed a starting value, a min, a max, and the step.
`;

storiesOf('Label', module).addWithInfo(
  'default',
  `
      ${introText}
      The example below shows an Label component.
    `,
  () => <Label {...labelInputProps} />
);
