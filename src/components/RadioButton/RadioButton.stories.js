import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import RadioButton from '.';

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
