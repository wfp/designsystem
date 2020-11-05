import React from 'react';
import InputGroup from '.';
import markdown from './README.mdx';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';

export default {
  title: 'Components/Forms/InputGroup',
  component: InputGroup,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <InputGroup
    defaultSelected="default-selected"
    labelText="Group labelText"
    helperText="Helper text"
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
    labelText="Group labelText"
    helperText="Helper text"
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

withCheckbox.story = {
  parameters: {
    docs: {
      storyDescription: 'The InputGroup can be used with checkboxes',
    },
  },
};

export const vertical = (args) => (
  <>
    <InputGroup
      defaultSelected="default-selected"
      labelText="Group labelText"
      helperText="Helper text"
      vertical
      {...args}>
      <Checkbox
        name="checkboxb-1"
        value="standard"
        labelText="Checkbox label 1"
      />
      <Checkbox
        name="checkboxb-2"
        value="default-selected"
        labelText="Checkbox label 2"
      />
      <Checkbox
        name="checkboxb-3"
        value="disabled"
        labelText="Checkbox label 3"
      />
    </InputGroup>
    <InputGroup
      defaultSelected="default-selected"
      legend="Group Legend"
      vertical
      {...args}>
      <RadioButton
        name="radiob"
        value="standard"
        id="radiob-1"
        labelText="Radio button label 1"
      />
      <RadioButton
        name="radiob"
        value="default-selected"
        id="radiob-2"
        labelText="Radio button label 2"
      />
      <RadioButton
        name="radiob"
        value="disabled"
        id="radiob-3"
        labelText="Radio 1"
      />
    </InputGroup>
  </>
);

vertical.story = {
  parameters: {
    docs: {
      storyDescription:
        'Use the vertical alignment if the elements do not have enough horizontal space. Avoid wrapping InputGroupss',
    },
  },
};
