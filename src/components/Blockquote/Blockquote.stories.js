import React from 'react';
import Blockquote from '.';
import Icon from '../Icon';
import { iconAddOutline } from '@wfp/icons';
import markdown from './README.mdx';

const props = {
  children: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
  amet.`,
};

const kinds = {
  'Info (info)': 'info',
  'Warning (warning)': 'warning',
  'Error (error)': 'error',
  'Success (success)': 'success',
};

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Default = (args) => <Blockquote {...args} />;

Default.args = {
  ...props,
};

Default.argTypes = {
  kind: {
    control: {
      type: 'select',
      options: ['info', 'warning', 'error', 'success'],
    },
  },
};

export const toogleable = (args) => <Blockquote {...args} />;

toogleable.args = {
  ...props,
  kind: 'info',
  title: 'Title',
  toogleable: true,
};

toogleable.story = {
  parameters: {
    docs: {
      storyDescription: `Use \`toogleable\` property to show and hide blockquote when title is clicked`,
    },
  },
};

export const Warning = (args) => <Blockquote {...args} />;

Warning.args = {
  ...props,
  withIcon: true,
  kind: 'warning',
};

Warning.story = {
  parameters: {
    docs: {
      storyDescription: `Use \`warning\` for showing a warning to draw attention to a non-blocking information`,
    },
  },
};

export const Error = (args) => <Blockquote {...args} />;

Error.args = {
  ...props,
  withIcon: true,
  kind: 'error',
};

Error.story = {
  parameters: {
    docs: {
      storyDescription: `Use \`error\` for showing a error message usually if a form fails to submit`,
    },
  },
};

export const Success = (args) => <Blockquote {...args} />;

Success.args = {
  ...props,
  withIcon: true,
  kind: 'success',
};

Success.story = {
  parameters: {
    docs: {
      storyDescription: `Use \`success\` for showing a successful message like after submitting a form`,
    },
  },
};

export const CustomIcon = (args) => <Blockquote {...args} />;

CustomIcon.args = {
  ...props,
  icon: <Icon icon={iconAddOutline} height={50} width={50} />,
};

CustomIcon.story = {
  parameters: {
    docs: {
      storyDescription: `Use \`icon\` to add custom icon to message`,
    },
  },
};
