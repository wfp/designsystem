import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import TextArea from '.';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <TextArea {...args} />;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
};

export const withError = (args) => <TextArea {...args} />;

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
