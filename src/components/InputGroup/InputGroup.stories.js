import React from 'react';
import InputGroup from '.';
import markdown from './README.mdx';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <InputGroup
    defaultSelected="default-selected"
    legend="Group Legend"
    {...args}>
    <RadioButton
      name="radio"
      value="standard"
      id="radio-1"
      labelText="Radio button label 1"
    />
    <RadioButton
      name="radio"
      value="default-selected"
      id="radio-2"
      labelText="Radio button label 2"
    />
    <RadioButton
      name="radio"
      value="disabled"
      id="radio-3"
      labelText="Radio 1"
    />
  </InputGroup>
);

export const withCheckbox = (args) => (
  <InputGroup
    defaultSelected="default-selected"
    legend="Group Legend"
    {...args}>
    <Checkbox name="checkbox-1" value="standard" labelText="Checkbox label 1" />
    <Checkbox
      name="checkbox-2"
      value="default-selected"
      labelText="Checkbox label 2"
    />
    <Checkbox name="checkbox-3" value="disabled" labelText="Checkbox label 3" />
  </InputGroup>
);
