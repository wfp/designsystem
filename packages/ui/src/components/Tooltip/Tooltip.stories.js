import React from 'react';
import Tooltip from './Tooltip';
import markdown from './README.mdx';
import { OverflowMenu16 } from '@wfp/icons-react';

export default {
  title: 'Components/UI Elements/Tooltip',
  component: Tooltip,
  parameters: {
    status: 'released',
    mdx: markdown,
  },
};
export const Regular = (args) => (
  <Tooltip
    // options
    {...args}>
    Hover here to show tooltip
  </Tooltip>
);

Regular.args = {
  content: 'Label text',
  children: 'This is a helper text',
};

export const Dark = (args) => (
  <Tooltip
    // options
    {...args}
    trigger="click">
    <span>Click here to show tooltip</span>
  </Tooltip>
);

Dark.args = {
  content: 'Label text',
  children: 'This is a helper text',
  dark: true,
};

Dark.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`dark\` style as an alternative for small tooltips`,
    },
  },
};

export const WithIcon = (args) => (
  <Tooltip
    {...args}
    trigger="click"
    placement={'bottom'}
    createRefWrapper={true}
    content="Label Text">
    <OverflowMenu16 description="options" width="17px" height="17px" />
  </Tooltip>
);

WithIcon.story = {
  parameters: {
    docs: {
      storyDescription: `By using the \`createRefWrapper\` prop a html element around the trigger will be added. This is useful for components without \`forwardRef\` support.`,
    },
  },
};

WithIcon.args = {
  content: 'Label text',
  children: 'This is a helper text',
};
