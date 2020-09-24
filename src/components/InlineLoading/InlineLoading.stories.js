import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import InlineLoading from '.';

export default {
  title: 'Components/InlineLoading',
  component: InlineLoading,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <InlineLoading {...args}>Text</InlineLoading>;

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

export const Description = (args) => (
  <InlineLoading {...args}>Text</InlineLoading>
);

Description.args = {
  description: 'submitting...',
};

const msg = `
Add description for the inline loading text
`;

Description.story = {
  parameters: {
    docs: {
      storyDescription: msg,
    },
  },
};

export const Success = (args) => <InlineLoading {...args}>Text</InlineLoading>;

Success.args = {
  success: true,
};

const successmsg = `
This is to show that loading has successfully completed
`;

Success.story = {
  parameters: {
    docs: {
      storyDescription: successmsg,
    },
  },
};
