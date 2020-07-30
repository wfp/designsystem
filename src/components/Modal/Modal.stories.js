import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Modal from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Modal {...args}>Text</Modal>;

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
