import React, { useState } from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import RadioButton from '.';
import FormGroup from '../FormGroup';
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

export const RadioButtonGroup = (args) => {
  const [gender, setgender] = useState('');

  const handleOnchange = (e) => {
    setgender(e);
  };

  return (
    <FormGroup legendText="Please select your gender">
      <InputGroup
        name="input-group"
        defaultSelected="default-selected"
        vertical>
        <RadioButton
          {...args}
          value="female"
          id="female"
          labelText="Female"
          name="female"
          checked={gender === 'female'}
          onChange={handleOnchange}
        />
        <RadioButton
          {...args}
          value="male"
          labelText="Male"
          id="male"
          name="male"
          checked={gender === 'male'}
          onChange={handleOnchange}
        />
        <RadioButton
          {...args}
          value="other"
          labelText="Other"
          id="other"
          name="other"
          checked={gender === 'other'}
          onChange={handleOnchange}
        />
      </InputGroup>
    </FormGroup>
  );
};
