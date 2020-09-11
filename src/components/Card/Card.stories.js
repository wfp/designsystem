import React from 'react';

import markdown from './README.mdx';

import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Card {...args} />;

Regular.args = {
  href: '#',
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'landscape',
};

export const CardKinds = (args) => <></>;

const cardkinds = `
By changing the \`kind\` prop you can use different styles of the card.

| kind   |  Description  |
|----------|-------------|
| \`landscape\` | A card designed to highlight a link using a landscape photograph and a title with metadata above.|
| \`landscape-light\` | A card designed to highlight a link using a landscape photograph and  white-background section below with a title and a subtitle.   |
| \`split\` | A card of the same dimension of the landscape photo card, but split in half. One half features a landscape photograph, the other half is a white-background section with a title and a subtitle. |
| \`hero\` | Hero block with title and a background image. It can feature an optional subtitle. |
| \`splash\` | Page middle content section. |
| \`splash-image\` | Page middle content section with background image. |
| \`splash-compact\` | A card content section without space around title and subtitle. |
| \`related\` | A card designed with landscape photograph and a title with metadata on right side. |


`;

CardKinds.story = {
  name: 'Card kinds',
  parameters: {
    markdown: 'hello',
    docs: {
      storyDescription: cardkinds,
    },
  },
};

export const Landscape = (args) => <Card {...args} />;

Landscape.args = {
  ...Regular.args,
  kind: 'landscape',
};

Landscape.story = {
  parameters: {
    docs: {
      storyDescription: `A card designed to highlight a link using a landscape photograph and a title with metadata above.`,
    },
  },
};

export const LandscapeLight = (args) => <Card {...args} />;

LandscapeLight.args = {
  ...Regular.args,
  kind: 'landscape-light',
};

LandscapeLight.story = {
  parameters: {
    docs: {
      storyDescription: `A card designed to highlight a link using a landscape photograph and  white-background section below with a title and a subtitle.`,
    },
  },
};

export const Split = (args) => <Card {...args} />;

Split.args = {
  ...Regular.args,
  kind: 'split',
};

Split.story = {
  parameters: {
    docs: {
      storyDescription: `A card of the same dimension of the landscape photo card, but split in half. One half features a landscape photograph, the other half is a white-background section with a title and a subtitle.`,
    },
  },
};

export const Hero = (args) => <Card {...args} />;

Hero.args = {
  ...Regular.args,
  kind: 'hero',
};

Hero.story = {
  parameters: {
    docs: {
      storyDescription: `Hero block with title and a background image. It can feature an optional subtitle.`,
    },
  },
};

export const Splash = (args) => <Card {...args} />;

Splash.args = {
  ...Regular.args,
  kind: 'splash',
  image: undefined,
};

Splash.story = {
  parameters: {
    docs: {
      storyDescription: `Page middle content section.`,
    },
  },
};

export const SplashImage = (args) => <Card {...args} />;

SplashImage.args = {
  ...Regular.args,
  kind: 'splash-image',
};

SplashImage.story = {
  parameters: {
    docs: {
      storyDescription: `Page middle content section with background image.`,
    },
  },
};

export const SplashCompact = (args) => <Card {...args} />;

SplashCompact.args = {
  ...Regular.args,
  kind: 'splash-compact',
  image: undefined,
};

SplashCompact.story = {
  parameters: {
    docs: {
      storyDescription: `A card content section without space around title and subtitle.`,
    },
  },
};

export const Related = (args) => <Card {...args} />;

Related.args = {
  ...Regular.args,
  kind: 'related',
};

Related.story = {
  parameters: {
    docs: {
      storyDescription: `A card designed with landscape photograph and a title with metadata on right side.`,
    },
  },
};
