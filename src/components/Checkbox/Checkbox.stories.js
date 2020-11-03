import React, { useState } from 'react';
import markdown from './README.mdx';
import Checkbox from '.';
import InputGroup from '../InputGroup';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Checkbox {...args} />;

Regular.args = {
  labelText: 'Label text',
  id: 'check-1',
};

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const CheckedInput = (args) => {
  const [isChecked, setChecked] = useState(true);

  return (
    <Checkbox
      {...args}
      onChange={() => setChecked(!isChecked)}
      checked={isChecked}
    />
  );
};

CheckedInput.args = {
  labelText: 'Checked Input',
  id: 'check-2',
};

const check = `Specify whether the underlying input should be checked.`;

CheckedInput.story = {
  parameters: {
    docs: {
      storyDescription: check,
    },
  },
};

export const Indeterminate = (args) => <Checkbox {...args} />;

Indeterminate.args = {
  labelText: 'Indeterminate Input',
  indeterminate: true,
};

const indeterminate = `Is a state that is neither checked nor unchecked. It’s that in-between state that we might consider the “Maybe” between “Yes” and “No” options`;

Indeterminate.story = {
  parameters: {
    docs: {
      storyDescription: indeterminate,
    },
  },
};

export const DisabledInput = (args) => <Checkbox {...args} />;

DisabledInput.args = {
  labelText: 'Disabled Input',
  disabled: true,
};

const disabled = `Specify whether the Checkbox should be interactive or not`;

DisabledInput.story = {
  parameters: {
    docs: {
      storyDescription: disabled,
    },
  },
};

export const HideLabel = (args) => <Checkbox {...args} />;

HideLabel.args = {
  labelText: 'Hidden Label',
  hideLabel: true,
};

const nolabel = `Specify whether the label should be hidden or not`;

HideLabel.story = {
  parameters: {
    docs: {
      storyDescription: nolabel,
    },
  },
};

export const VerticalGrouping = (args) => (
  <InputGroup
    helperText="select any that apply"
    labelText="Programming language preference"
    vertical>
    <Checkbox {...args} defaultChecked labelText="ReactJs" id="react" />
    <Checkbox {...args} defaultChecked labelText="ReactNative" id="native" />
    <Checkbox {...args} labelText="Node.js" id="node" />
    <Checkbox {...args} labelText="PHP" id="php" />
    <Checkbox {...args} labelText="Java" id="java" />
  </InputGroup>
);

VerticalGrouping.args = {};

// const nolabel = `Specify whether the label should be hidden or not`;

// CheckboxGroup.story = {
//   parameters: {
//     docs: {
//       storyDescription: nolabel,
//     },
//   },
// };

export const HorizontalGrouping = (args) => (
  <InputGroup
    helperText="select any that apply"
    labelText="Programming language preference">
    <Checkbox {...args} defaultChecked labelText="ReactJs" id="react1" />
    <Checkbox {...args} defaultChecked labelText="ReactNative" id="native1" />
    <Checkbox {...args} labelText="Node.js" id="node1" />
    <Checkbox {...args} defaultChecked labelText="PHP" id="php1" />
    <Checkbox {...args} labelText="Java" id="java1" />
  </InputGroup>
);

HorizontalGrouping.args = {};
