import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';
import FormGroup from '../FormGroup';

const values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled',
};

const props = {
  group: () => ({
    name: text(
      'The form control name (name in <RadioButtonGroup>)',
      'radio-button-group'
    ),
    valueSelected: select(
      'Value of the selected button (valueSelected in <RadioButtonGroup>)',
      values,
      'default-selected'
    ),
    labelText: text(
      'Label text (labelText in <RadioButtonGroup>)',
      'Radio button group label'
    ),
    helperText: text(
      'Helper text (labelText in <RadioButtonGroup>)',
      'Radio button group helper'
    ),
    onChange: action('onChange'),
  }),
  radio: () => ({
    className: 'some-class',
    disabled: boolean('Disabled (disabled in <RadioButton>)', false),
    labelText: text(
      'Label text (labelText in <RadioButton>)',
      'Radio button label'
    ),
  }),
};

storiesOf('Components|RadioButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const radioProps = props.radio();
    return (
      <RadioButtonGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        {...props.group()}>
        <RadioButton value="standard" id="radio-1" {...radioProps} />
        <RadioButton value="default-selected" id="radio-2" {...radioProps} />
        <RadioButton value="disabled" id="radio-3" {...radioProps} />
      </RadioButtonGroup>
    );
  });
