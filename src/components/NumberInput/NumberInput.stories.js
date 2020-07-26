import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import NumberInput from '.';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <NumberInput {...args} />;

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