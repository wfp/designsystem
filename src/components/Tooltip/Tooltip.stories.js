import React from 'react';
import Tooltip from './Tooltip';
import { tooltipStyle, tooltipStyleDark } from './Tooltip';
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
    <span>Click here to show tooltip</span>
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

/*
export const Dark = (args) => (
  <Tippy
    // options
    content="Welcome to the tooltip"
    trigger="click"
    {...tooltipStyleDark}>
    <span>Click here to show tooltip</span>
  </Tippy>
);
*/
