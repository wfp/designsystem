import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Pagination from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Pagination {...args}>Text</Pagination>;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  totalItems: 30,
  onChange: () => {},
};

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
