import React from 'react';
import markdown from './README.mdx';
import Toggle from '.';

export default {
  title: 'Components/UI Elements/Toggle',
  component: Toggle,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Toggle {...args} />;
