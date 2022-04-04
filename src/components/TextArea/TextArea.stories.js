import React from 'react';
import markdown from './README.mdx';
import TextArea from '.';

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <TextArea {...args} />;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  cols: 50,
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
};
