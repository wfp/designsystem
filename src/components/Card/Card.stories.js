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
  argTypes: {
    anObjectProperty: { control: { type: "object" }, defaultValue: { value: "my value" } },
  },
};

export const SimpleCard = (args) => <Card {...args} />;

SimpleCard.args = {
  subTitle:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  title: 'Title content',
  kind: 'simple-card',
  metadata: 'Outline',
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

