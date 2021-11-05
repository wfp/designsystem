import React from 'react';

import markdown from './README.mdx';

import { Hero, HeroExternal } from '.';
import Button from '../Button';
import { WfpHumEmergencyResponsePos } from '@wfp/pictograms-react';
import heroTwig from './Hero.twig';

export default {
  title: 'Components/Content Related/Hero',
  component: Hero,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: heroTwig,
  },
};

export const Regular = (args) => <Hero {...args} />;

Regular.args = {
  href: '#',
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
  subTitle:
    'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.',
  title: 'The Climate Adaption Mangement and Innovation Initiative',
  kind: 'landscape',
};

export const HeroKinds = (args) => <></>;

const herokinds = `
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

HeroKinds.story = {
  name: 'Hero kinds',
  parameters: {
    markdown: 'hello',
    docs: {
      storyDescription: herokinds,
    },
  },
};

export const Landscape = (args) => <Hero {...args} />;

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

export const LandscapeLight = (args) => <Hero {...args} />;

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

export const Split = (args) => <Hero {...args} />;

Split.args = {
  ...Regular.args,
  metadata: 'Climate Change, Publication',
  kind: 'split',
};

Split.story = {
  parameters: {
    docs: {
      storyDescription: `A card of the same dimension of the landscape photo card, but split in half. One half features a landscape photograph, the other half is a white-background section with a title and a subtitle.`,
    },
  },
};

export const HeroCard = (args) => <Hero {...args} />;

HeroCard.args = {
  ...Regular.args,
  kind: 'hero',
};

HeroCard.story = {
  name: 'Hero',
  parameters: {
    docs: {
      storyDescription: `Hero block with title and a background image. It can feature an optional subtitle.`,
    },
  },
};

export const Splash = (args) => <Hero {...args} />;

Splash.args = {
  ...Regular.args,
  kind: 'splash',
  subTitle: (
    <>
      <div style={{ marginBottom: '1rem' }}>
        Cras dapibus. Aenean ut eros et nisl sagittis vestibulum. Fusce risus
        nisl, viverra et, tempor et, pretium in.
      </div>
      <Button kind="inverse">Read more</Button>
    </>
  ),
  image: undefined,
};

Splash.story = {
  parameters: {
    docs: {
      storyDescription: `Page middle content section.`,
    },
  },
};

export const SplashImage = (args) => <Hero {...args} />;

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

export const SplashCompact = (args) => <Hero {...args} />;

SplashCompact.args = {
  ...Regular.args,
  title: (
    <>
      <span style={{ marginRight: '1rem' }}>
        Nulla consequat massa quis enim
      </span>
      <Button kind="inverse--primary">Read more</Button>
    </>
  ),
  subTitle: undefined,
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

export const Related = (args) => <Hero {...args} />;

Related.args = {
  ...Regular.args,
  metadata: 'Climate Change, Publication',
  kind: 'related',
};

Related.story = {
  parameters: {
    docs: {
      storyDescription: `A card designed with landscape photograph and a title with metadata on right side.`,
    },
  },
};
/* TODO learn more about changes done to Icon component by Robert
export const Emergencies = (args) => <Hero {...args} />;

Emergencies.args = {
  ...Regular.args,
  title: (
    <>
      <WfpHumEmergencyResponsePos16
        fill="#FFF"
        style={{ marginRight: '1rem' }}
      />
      <span>
        Curabitur ullamcorper ultricies nisi. Proin magna.{' '}
        <a>Etiam iaculis nunc ac metus</a>
      </span>
    </>
  ),
  subTitle: undefined,
  image: undefined,
  kind: 'emergencies',
};

Emergencies.story = {
  parameters: {
    docs: {
      storyDescription: `A global card for highlighting important events, such as emergencies.`,
    },
  },
};
*/

export const External = (args) => (
  <HeroExternal {...args}>
    <div className={`wfp--hero-ext__actions`}>
      <Button allCaps large kind="accent">
        Accent action
      </Button>
      <Button allCaps large kind="inverse">
        Secondary action
      </Button>
    </div>
  </HeroExternal>
);

External.args = {
  title: (<>A headline that can be used  <br /> for the value proposition</>),
  subTitle: (<>A description that can contain a <a>link</a> and <strong>a bold text</strong> to highlight important content. We have room for one or more sentences. Like this.</>),
  image:'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg'
}

External.story = {
  parameters: {
    docs: {
      storyDescription: 'Add a description',
    },
  },
};
