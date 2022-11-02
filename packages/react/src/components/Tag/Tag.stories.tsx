import React from 'react';
import markdown from './README.mdx';
import Tag from '.';

export default {
  title: 'Components/UI Elements/Tag',
  component: Tag,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Tag {...args}></Tag>;

Regular.args = {
  children: 'Text',
  type: 'info',
};
