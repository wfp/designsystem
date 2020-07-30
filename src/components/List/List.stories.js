import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import List from '.';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <List {...args}>Text</List>;

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
