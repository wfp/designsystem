import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import RadioButton from '../RadioButton';
import RadioButtonSkeleton from '../RadioButton/RadioButton.Skeleton';

const radioProps = () => ({
  className: 'some-class',
  name: text('Form item name (name)', 'test'),
  value: text('Value (value)', 'standard'),
  labelText: text('Label text (labelText)', 'Standard Radio Button'),
  checked: boolean('Checked (checked)', false),
  disabled: boolean('Disabled (disabled)', false),
  onChange: action('onChange'),
});

storiesOf('Forms|RadioButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => <RadioButton id="radio-1" {...radioProps()} />)
  .add('skeleton', () => (
    <div>
      <RadioButtonSkeleton />
    </div>
  ));
