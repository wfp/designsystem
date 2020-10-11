import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import InfoBar from '.';
import Link from '../Link';

export default {
  title: 'Components/UI Elements/InfoBar',
  component: InfoBar,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <InfoBar {...args}>
    InfoBar with content. <Link href="#">Click here</Link> to do Something.
  </InfoBar>
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
