import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Checkbox from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Checkbox {...args} />;

Regular.args = {
  labelText: 'Label text',
  id: 'check-1',
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
