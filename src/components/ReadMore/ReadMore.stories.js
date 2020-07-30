import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import ReadMore from '.';

export default {
  title: 'Components/ReadMore',
  component: ReadMore,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <ReadMore {...args}>Text</ReadMore>;

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
