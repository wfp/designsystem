import React from 'react';
import markdown from './README.mdx';
import { Add, Home } from '@wfp/icons-react';

export default {
  title: 'Components/UI Elements/Icon',
  component: Add,
  parameters: {
    componentSubtitle: 'Component',
    status: 'legacy',
    mdx: markdown,
  },
};

export const Regular = (args) => <Add {...args} />;

Regular.args = {
  icon: Add,
};

const description = `
You can customize the icon by using the icon name eg \`<Home16/>\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const Trial = (args) => <Home {...args} />;
