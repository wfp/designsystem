import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import InlineLoading from '.';

export default {
  title: 'Components/InlineLoading',
  component: InlineLoading,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <InlineLoading {...args}>Text</InlineLoading>;

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
