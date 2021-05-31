import React from 'react';
import markdown from './README.mdx';
import InlineLoading from '.';
import inlineLoadingTwig from './InlineLoading.twig';

export default {
  title: 'Components/UI Elements/InlineLoading',
  component: InlineLoading,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: inlineLoadingTwig
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
