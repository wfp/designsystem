import React from 'react';
import markdown from './README.mdx';
import ReadMore from '.';

export default {
  title: 'Components/UI Elements/ReadMore',
  component: ReadMore,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
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
