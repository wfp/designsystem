import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import TextInput from '.';

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <TextInput {...args} />;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  placeholder: 'placeholder',
};

export const withError = (args) => <TextInput {...args} />;

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

export const withDisabled = (args) => <TextInput {...args} />;

withDisabled.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

withDisabled.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'Disabled labelText',
  disabled: true,
};
