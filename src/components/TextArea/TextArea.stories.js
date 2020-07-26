import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import TextArea from '.';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <TextArea {...args} />;

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
