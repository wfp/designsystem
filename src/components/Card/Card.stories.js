import React from 'react';

import markdown from './README.mdx';
import cardTwig from './Card.twig';
import Card from '.';

export default {
  title: 'Components/Content Related/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: cardTwig
  },
  argTypes: {
    anObjectProperty: { control: { type: "object" }, defaultValue: { value: "my value" } },
  },
};

export const SimpleCard = (args) => <Card {...args} />;

SimpleCard.args = {
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'simple-card',
  metadata: 'Publication',
};

export const SimpleCardWithImage = (args) => <Card {...args} />;

SimpleCardWithImage.args = {
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'simple-card',
  metadata: 'Publication',
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
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

