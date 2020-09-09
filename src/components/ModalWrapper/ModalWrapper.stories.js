import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import ModalWrapper from '.';

export default {
  title: 'Components/ModalWrapper',
  component: ModalWrapper,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <ModalWrapper {...args}>Text</ModalWrapper>;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.args = {
  buttonTriggerText: 'Open modal',
};

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
