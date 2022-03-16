import React from 'react';
import markdown from './README.mdx';
import FormLabel from '.';

export default {
  title: 'Components/Forms/FormLabel',
  component: FormLabel,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <FormLabel {...args}>Label text</FormLabel>;
