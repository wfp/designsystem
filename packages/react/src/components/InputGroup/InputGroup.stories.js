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

const regularsourcecode = `
import { InputGroup, RadioButton  } from "@wfp/react";

<InputGroup
  defaultSelected="default-selected"
  labelText="Group labelText"
  helperText="Helper text">
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
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: regularsourcecode,
      },
    },
  },
};

export const withCheckbox = (args) => (
  <InputGroup
    defaultSelected="default-selected"
    labelText="Group labelText"
    helperText="Helper text"
    {...args}>
    <Checkbox
      id="check-1"
      name="checkbox-1"
      value="standard"
      labelText="Checkbox label 1"
    />
    <Checkbox
      id="check-2"
      name="checkbox-2"
      value="default-selected"
      labelText="Checkbox label 2"
    />
    <Checkbox
      id="check-3"
      name="checkbox-3"
      value="disabled"
      labelText="Checkbox label 3"
    />
  </InputGroup>
);

const withcheckboxsourcecode = `
import { InputGroup, Checkbox } from "@wfp/react";
        
<InputGroup
  defaultSelected="default-selected"
  helperText="Helper text"
  labelText="Group labelText"
>
  <Checkbox
    labelText="Checkbox label 1"
    name="checkbox-1"
    value="standard"
  />
  <Checkbox
    labelText="Checkbox label 2"
    name="checkbox-2"
    value="default-selected"
  />
  <Checkbox
    labelText="Checkbox label 3"
    name="checkbox-3"
    value="disabled"
  />
</InputGroup>
`;

withCheckbox.story = {
  parameters: {
    docs: {
      storyDescription: 'The InputGroup can be used with checkboxes',
      source: {
        code: withcheckboxsourcecode,
      },
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
        id="checkb-1"
        name="checkboxb-1"
        value="standard"
        labelText="Checkbox label 1"
      />
      <Checkbox
        id="checkb-2"
        name="checkboxb-2"
        value="default-selected"
        labelText="Checkbox label 2"
      />
      <Checkbox
        id="checkb-3"
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

const verticalsourcecode = `

import { InputGroup, Checkbox, RadioButton  } from "@wfp/react";


  <InputGroup
    defaultSelected="default-selected"
    labelText="Group labelText"
    helperText="Helper text"
    vertical>
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
    vertical>
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

`;

vertical.story = {
  parameters: {
    docs: {
      storyDescription:
        'Use the vertical alignment if the elements do not have enough horizontal space. Avoid wrapping InputGroupss',
      source: {
        code: verticalsourcecode,
      },
    },
  },
};
