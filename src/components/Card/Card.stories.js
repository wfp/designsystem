import React from 'react';

import markdown from './README.mdx';

import Card from '.';

export default {
  title: 'Components/Content Related/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const TextCard = (args) => <Card {...args} />;

TextCard.args = {
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'text-card',
  metadata: 'Publication',
};

export const PhotoHeader = (args) => <Card {...args} />;

PhotoHeader.args = {
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  kind: 'image-header',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  metadata: 'Publication',
};

export const Overlay = (args) => <Card {...args} />;

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
