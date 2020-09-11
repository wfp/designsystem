import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import NumberInput from '.';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <NumberInput {...args} />;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
};

export const withError = (args) => <NumberInput {...args} />;

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
  invalid: { message: 'Please enter your number' },
};
