import React from 'react';

import markdown from './README.mdx';

import CardNew from '.';
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'Components/Card',
  component: CardNew,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const RegCard = (args) => <CardNew {...args} />;

RegCard.args = {
  href: '#',
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'text-card',
  metadata: 'Publication',
};
