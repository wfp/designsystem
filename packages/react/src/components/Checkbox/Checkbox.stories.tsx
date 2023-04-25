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
const regularsourcecode = `
import { Checkbox } from "@wfp/react";

<Checkbox
  id="check-1"
  labelText="Label text"
/>
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
  id: 'check-3',
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
  id: 'check-4',
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
  id: 'check-5',
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

const verticalsourcecode = `
import { Checkbox, InputGroup  } from "@wfp/react";

<InputGroup
  helperText="select any that apply"
  labelText="Programming language preference"
  vertical>
  <Checkbox defaultChecked labelText="ReactJs" id="react" />
  <Checkbox defaultChecked labelText="ReactNative" id="native" />
  <Checkbox labelText="Node.js" id="node" />
  <Checkbox labelText="PHP" id="php" />
  <Checkbox labelText="Java" id="java" />
</InputGroup>
`;

VerticalGrouping.story = {
  parameters: {
    docs: {
      source: {
        code: verticalsourcecode,
      },
    },
  },
};

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

const horizontalsourcecode = `
import { Checkbox, InputGroup  } from "@wfp/react";

<InputGroup
  helperText="select any that apply"
  labelText="Programming language preference">
  <Checkbox defaultChecked labelText="ReactJs" id="react1" />
  <Checkbox defaultChecked labelText="ReactNative" id="native1" />
  <Checkbox labelText="Node.js" id="node1" />
  <Checkbox defaultChecked labelText="PHP" id="php1" />
  <Checkbox labelText="Java" id="java1" />
</InputGroup>
`;

HorizontalGrouping.story = {
  parameters: {
    docs: {
      source: {
        code: horizontalsourcecode,
      },
    },
  },
};
