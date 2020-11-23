import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Loading from '.';

export default {
  title: 'Components/UI Elements/Loading',
  component: Loading,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Loading {...args}>Text</Loading>;

// const description = `
// You can customize the content by using \`BannerNavigation\`.
// `;

// Regular.story = {
//   parameters: {
//     docs: {
//       storyDescription: description,
//     },
//   },
// };

export const withoutOverlay = (args) => <Loading {...args}>Text</Loading>;

const description = `
When loader is applied with an overlay. Do this by specifying \`false\` to \`withOverlay\` prop.
`;

withoutOverlay.args = {
  withOverlay: false,
};

withoutOverlay.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const small = (args) => <Loading {...args}>Text</Loading>;

const desc = `
When loader has a \`small\` variant.
`;

small.args = {
  withOverlay: false,
  small: true,
};

small.story = {
  parameters: {
    docs: {
      storyDescription: desc,
    },
  },
};
