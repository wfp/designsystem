import React from 'react';

import markdown from './README.mdx';
import cardTwig from './Card.twig';
import Button from '../Button';
import { Card, CardExternal } from '.';

import { StarSolid } from '@un/icons-react';

export default {
  title: 'Components/Content Related/Card',
  component: Card,
  subcomponents: { CardExternal },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: cardTwig,
  },
};

export const SimpleCard = (args) => <Card {...args} />;

SimpleCard.args = {
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'simple-card',
  metadata: 'Publication',
  url: 'https://www.wfp.org',
  isExternal: true,
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

export const External = (args) => (
  <CardExternal truncated {...args}>
    <div className={`wfp--card-ext__actions`}>
      <Button
        className={`wfp--card-ext__action`}
        kind="ghost"
        small
        style={{ textTransform: 'uppercase' }}>
        Action 1
      </Button>
      <Button className={`wfp--card-ext__action`} kind="ghost" small>
        Action 2
      </Button>
      {/* Last action can be aligned to the right with a dedicated modifier handled with a boolean prop (alignToRight) */}
      {/* TODO: Provide the Star icon (outline version) from the kit */}
      <Button
        className={`wfp--card-ext__action wfp--card-ext__action--align-to-right`}
        kind="ghost"
        small
        icon={StarSolid}
        iconDescription="FavoriteOutline16"
      />
    </div>
  </CardExternal>
);

External.args = {
  label: 'Label',
  heading: 'Heading',
  subHeading: 'subheading',
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae congue magna. Mauris vitae velit lacinia, porttitor tellus sit amet, hendrerit ipsum. Vivamus sagittis leo ut erat eleifend, sed',
  tag: 'tag',
  labelStatus: true,
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
};

External.story = {
  parameters: {
    docs: {
      storyDescription: 'Add a description',
    },
  },
};
