import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import InputGroup from '../InputGroup';
import RadioButton from '../RadioButton';

const values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled',
};

const props = {
  group: () => ({
    name: text('The form control name (name in <InputGroup>)', 'input-group'),
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

storiesOf('Components|InputGroup', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const radioProps = props.radio();
    return (
      <InputGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        {...props.group()}
      >
        <RadioButton value="standard" id="radio-1" {...radioProps} />
        <RadioButton value="default-selected" id="radio-2" {...radioProps} />
        <RadioButton value="disabled" id="radio-3" {...radioProps} />
      </InputGroup>
    );
  });
