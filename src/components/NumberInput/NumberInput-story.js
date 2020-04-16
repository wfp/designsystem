import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import NumberInput from '../NumberInput';
import NumberInputSkeleton from '../NumberInput/NumberInput.Skeleton';

const props = () => ({
  className: 'some-class',
  id: 'tj-input',
  addonBefore: text('addonBefore', '€'),
  addonAfter: text('addonAfter', '$'),
  formItemClassName: text(
    'Form item className (formItemClassName)',
    'some-form-item-class'
  ),
  labelText: text('Label text (labelText)', 'Number Input label'),
  hideLabel: boolean('No label (hideLabel)', false),
  min: number('Minimum value (min)', 0),
  max: number('Maximum value (max)', 100),
  value: number('Value (value)', 50),
  step: number('Step of up/down arrow (step)', 10),
  disabled: boolean('Disabled (disabled)', false),
  invalid: boolean('Show form validation UI (invalid)', false),
  invalidText: text(
    'Form validation UI content (invalidText)',
    'Number is not valid'
  ),
  helperText: text('Helper text (helperText)', 'Optional helper text.'),
  light: boolean('Light variant (light)', false),
  onChange: action('onChange'),
  onClick: action('onClick'),
  allowEmpty: boolean('Allow empty value (allowEmpty)', false),
});

storiesOf('Components|NumberInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => <NumberInput {...props()} />)
  .add('skeleton', () => <NumberInputSkeleton />);
