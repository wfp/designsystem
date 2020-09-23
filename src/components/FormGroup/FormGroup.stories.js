import React from 'react';
import FormGroup from './FormGroup';
import TextInput from '../TextInput';

import markdown from './README.mdx';

export default {
  title: 'Forms/FormGroup',
  component: FormGroup,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Default = (args) => (
  <FormGroup {...args} className="wfp--form-long">
    <TextInput
      id="test1"
      labelText="Text Input label"
      placeholder="Placeholder text"
    />
    <TextInput
      id="test2"
      labelText="Text Input label"
      placeholder="Placeholder text"
    />
    <TextInput
      id="test3"
      labelText="Text Input label"
      placeholder="Placeholder text"
    />
  </FormGroup>
);
Default.args = {
  legendText: 'FormGroup heading',
};
