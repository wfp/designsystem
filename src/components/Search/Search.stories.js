import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Search from '.';

export default {
  title: 'Components/Search',
  component: Search,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Search {...args} />;

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

export const SmallSearch = (args) => <Search {...args} />;

SmallSearch.args = {
  kind: 'small',
};

SmallSearch.story = {
  parameters: {
    docs: {
      storyDescription: `There are diffent ways to render the \`Search\` input by changing the \`kind\` prop.`,
    },
  },
};
