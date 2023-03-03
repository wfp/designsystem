import React, { useState } from 'react';
import markdown from './README.mdx';
import RadioButton from '.';
import InputGroup from '../InputGroup';

export default {
  title: 'Components/Forms/RadioButton',
  component: RadioButton,
  parameters: {
    componentSubtitle: 'RadioButton',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <RadioButton {...args} />;

Regular.args = {
  labelText: 'Radio button',
  value:'radio0',
  name:'radio0'
};

const regularsourcecode = `
import { RadioButton  } from "@wfp/ui";

<RadioButton labelText="Radio button" />
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

export const VerticalGrouping = (args) => {
  const [gender, setgender] = useState('female');

  const handleOnchange = (e) => {
    setgender(e.target.value);
  };

  return (
    <InputGroup
      name="input-group"
      helperText="select one"
      labelText="Please select your gender"
      vertical
    >
      <RadioButton
        {...args}
        value={gender}
        id="female"
        labelText="Female"
        name="gender"
        onChange={handleOnchange}
      />
      <RadioButton
        {...args}
        value={gender}
        labelText="Male"
        id="male"
        name="gender"
        onChange={handleOnchange}
      />
      <RadioButton
        {...args}
        value={gender}
        labelText="Other"
        id="other"
        name="gender"
        onChange={handleOnchange}
      />
    </InputGroup>
  );
};

const verticalsourcecode = `

import { RadioButton, InputGroup  } from "@wfp/ui";

const [gender, setgender] = useState('');

const handleOnchange = (e) => {
  setgender(e);
};


<InputGroup
  name="input-group"
  helperText="select one"
  labelText="Please select your gender"
  vertical>
  <RadioButton
    value="female"
    id="female"
    labelText="Female"
    name="female"
    checked={gender === 'female'}
    onChange={handleOnchange}
  />
  <RadioButton
    value="male"
    labelText="Male"
    id="male"
    name="male"
    checked={gender === 'male'}
    onChange={handleOnchange}
  />
  <RadioButton
    value="other"
    labelText="Other"
    id="other"
    name="other"
    checked={gender === 'other'}
    onChange={handleOnchange}
  />
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
    name="input-group"
    helperText="select one"
    labelText="Please select your age range"
  >
    <RadioButton
      name="radiob"
      value="standard"
      id="radiob-1"
      labelText="Below 20"
    />
    <RadioButton
      name="radiob"
      value="default-selected"
      id="radiob-2"
      labelText="20-50"
    />
    <RadioButton
      name="radiob"
      value="disabled"
      id="radiob-3"
      labelText="Above 50"
    />
  </InputGroup>
);

const horizontalsourcecode = `
import { RadioButton, InputGroup  } from "@wfp/ui";

<InputGroup
  name="input-group"
  helperText="select one"
  labelText="Please select your age range">
  <RadioButton
    name="radiob"
    value="standard"
    id="radiob-1"
    labelText="Below 20"
  />
  <RadioButton
    name="radiob"
    value="default-selected"
    id="radiob-2"
    labelText="20-50"
  />
  <RadioButton
    name="radiob"
    value="disabled"
    id="radiob-3"
    labelText="Above 50"
  />
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
