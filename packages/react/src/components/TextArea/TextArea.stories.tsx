import React from 'react';
import TextArea from '.';

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
};

export const Regular = (args) => <TextArea {...args} />;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  cols: 50,
  rows: 4,
  fullWidth: true,
};

export const withError = (args) => <TextArea {...args} />;

const description = ` Textarea with error example`;

withError.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

withError.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  invalid: { message: 'Please enter your first name' },
  rows: 4,
  fullWidth: true,
};
