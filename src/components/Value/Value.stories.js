import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Value from '.';

export default {
  title: 'Components/Value',
  component: Value,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Value {...args}>Text</Value>;

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
