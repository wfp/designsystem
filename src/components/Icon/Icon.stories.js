import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Icon from '.';
import { iconAdd, iconAddGlyph, iconAddOutline } from '@wfp/icons';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Icon {...args} />;

Regular.args = {
  icon: iconAdd,
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
