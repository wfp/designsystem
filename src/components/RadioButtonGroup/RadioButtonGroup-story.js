import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';

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
    vertical: boolean('Vertical (vertical in <RadioButtonGroup>)', false),
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
  check: () => ({
    className: 'some-class',
    disabled: boolean('Disabled (disabled in <Checkbox>)', false),
    labelText: text('Label text (labelText in <Checkbox>)', 'Checkbox label'),
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
  })
  .add('Checkbox', () => {
    const checkProps = props.check();
    return (
      <RadioButtonGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        {...props.group()}>
        <Checkbox value="standard" id="radio-1" {...checkProps} />
        <Checkbox value="default-selected" id="radio-2" {...checkProps} />
        <Checkbox value="disabled" id="radio-3" {...checkProps} />
      </RadioButtonGroup>
    );
  });
