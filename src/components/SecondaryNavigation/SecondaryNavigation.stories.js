import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import SecondaryNavigation from '.';

export default {
  title: 'Components/SecondaryNavigation',
  component: Tag,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <SecondaryNavigation {...args}>Text</SecondaryNavigation>
);

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
