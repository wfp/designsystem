import React from 'react';
import markdown from './README.mdx';
import { Add16, Home20 } from '@wfp/icons-react';

export default {
  title: 'Components/UI Elements/Icon',
  component: Add16,
  parameters: {
    componentSubtitle: 'Component',
    status: 'legacy',
    mdx: markdown,
  },
};

export const Regular = (args) => <Add16 {...args} />;

Regular.args = {
  icon: Add16,
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


export const Trial = (args) => <Home20 icon={Home20} {...args} />;