import React from 'react';

import markdown from './README.mdx';

import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Card {...args}></Card>;

Regular.args = {
  children: 'Link',
  href: '#',
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'landscape',
};
