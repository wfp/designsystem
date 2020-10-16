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

export const TextCard = (args) => <CardNew {...args} />;

TextCard.args = {
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'text-card',
  metadata: 'Publication',
};

export const PhotoHeader = (args) => <CardNew {...args} />;

PhotoHeader.args = {
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  kind: 'image-header',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  metadata: 'Publication',
};

export const Overlay = (args) => <CardNew {...args} />;

Overlay.args = {
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  kind: 'overlay',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  metadata: 'Publication',
  cardWidth: '350px',
  cardHeight: '400px',
};

// ImageHeader.story = {
//   parameters: {
//     docs: {
//       storyDescription: `A card designed to highlight a link using a landscape photograph and  white-background section below with a title and a subtitle.`,
//     },
//   },
// };
