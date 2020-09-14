import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import InputGroup from '../InputGroup';
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
      'The form control name (name in <InputGroup>)',
      'radio-button-group'
    ),
    valueSelected: select(
      'Value of the selected button (valueSelected in <InputGroup>)',
      values,
      'default-selected'
    ),
    labelText: text(
      'Label text (labelText in <InputGroup>)',
      'Radio button group label'
    ),
    helperText: text(
      'Helper text (labelText in <InputGroup>)',
      'Radio button group helper'
    ),
    vertical: boolean('Vertical (vertical in <InputGroup>)', false),
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

storiesOf('Components|InputGroup', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const radioProps = props.radio();
    return (
      <InputGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        {...props.group()}>
        <RadioButton
          value="standard"
          id="radio-1"
          {...radioProps}
          labelText="Radio button label 1"
        />
        <RadioButton
          value="default-selected"
          id="radio-2"
          {...radioProps}
          labelText="Radio button label 2"
        />
        <RadioButton
          value="disabled"
          id="radio-3"
          {...radioProps}
          labelText="Radio 1"
        />
      </InputGroup>
    );
  })
  .add('Checkbox', () => {
    const checkProps = props.check();
    return (
      <InputGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        {...props.group()}>
        <Checkbox value="standard" id="radio-1" {...checkProps} />
        <Checkbox value="default-selected" id="radio-2" {...checkProps} />
        <Checkbox value="disabled" id="radio-3" {...checkProps} />
      </InputGroup>
    );
  });
