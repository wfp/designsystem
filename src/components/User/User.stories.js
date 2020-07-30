import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import User from '.';

export default {
  title: 'Components/User',
  component: User,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <User {...args}>Text</User>;

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
