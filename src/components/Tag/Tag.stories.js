import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Tag from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Tag {...args}>Text</Tag>;

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
