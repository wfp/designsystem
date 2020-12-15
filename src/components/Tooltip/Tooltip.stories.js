import React from 'react';
import Tooltip from './Tooltip';
import markdown from './README.mdx';

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
    <span className="hello">Click here to show tooltip</span>
  </Tooltip>
);

Regular.args = {
  content: 'Label text',
  children: 'This is a helper text',
};

export const Dark = (args) => (
  <Tooltip
    // options
    {...args}>
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

export const UseWrapper = (args) => (
  <Tooltip
    // options
    {...args}>
    <span>Click here to show tooltip</span>
  </Tooltip>
);

UseWrapper.story = {
  parameters: {
    docs: {
      storyDescription: `By using the \`useWrapper\` prop a html element around the trigger will be added. This is useful for components without \`forwardRef\` support.`,
    },
  },
};

UseWrapper.args = {
  content: 'Label text',
  children: 'This is a helper text',
  useWrapper: true,
};
