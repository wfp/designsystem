import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import FormLabel from '.';

export default {
  title: 'Components/FormLabel',
  component: FormLabel,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <FormLabel {...args}>Text</FormLabel>;

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
