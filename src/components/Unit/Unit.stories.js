import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Unit from '.';

export default {
  title: 'Components/Unit',
  component: Unit,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Unit {...args} />;

Regular.args = {
  children: '12345',
  type: 'usd',
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
