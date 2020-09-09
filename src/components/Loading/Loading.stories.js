import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Loading from '.';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Loading {...args}>Text</Loading>;

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
