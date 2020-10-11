import React from 'react';
import markdown from './README.mdx';
import Link from '.';

export default {
  title: 'Components/UI Elements/Link',
  component: Link,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Link {...args} />;

Regular.args = { children: 'WFP Homepage', href: 'https://www.wfp.org' };
