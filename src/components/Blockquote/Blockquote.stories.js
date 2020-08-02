import React from 'react';
import { storiesOf } from '@storybook/react';
//import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/react';

import Blockquote from '.';

import { withKnobs, text } from '@storybook/addon-knobs';
import Link from '.';
import markdown from './README.mdx';

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
  children: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
  amet.`,
};

Default.argTypes = {
  kind: {
    control: {
      type: 'select',
      options: ['info', 'warning', 'error', 'success'],
    },
  },
};
