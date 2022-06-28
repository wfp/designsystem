import React from 'react';
import markdown from './README.mdx';
import Search from '.';

export default {
  title: 'Components/UI Elements/Search',
  component: Search,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Search {...args} />;

Regular.args = {
  name: 'search',
};

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

export const MainNavigationSearch = (args) => <Search {...args} />;

MainNavigationSearch.args = {
  kind: 'main',
};

MainNavigationSearch.story = {
  parameters: {
    docs: {
      storyDescription: `The Search input for the mainnavigation`,
    },
  },
};
