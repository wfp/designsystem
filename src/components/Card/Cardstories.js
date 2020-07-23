/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Button from '../Button';

import Card from '.';

const kinds = {
  'Landscape (landscape)': 'landscape',
  'Landscape Light (landscape-light)': 'landscape-light',
  'Split (split)': 'split',
  'Hero (hero)': 'hero',
  'Page splash (splash)': 'splash',
  'Page splash image (splash-image)': 'splash-image',
  'Page splash compact (splash-compact)': 'splash-compact',
  'Related content (related)': 'related',
  Teaser: 'teaser',
};

const buttons = {
  regular: <Button>Read More</Button>,
  inverse: <Button kind="inverse">Read More</Button>,
};

const buttonKinds = {
  'Hero default (inverse)': 'inverse',
  'Hero default (regular)': 'regular',
};

const props = {
  set: () => ({
    className: 'some-class',
    kind: select('Card kind (kind)', kinds, 'landscape'),
    title: text(
      'Title (title)',
      'The Climate Adaption Mangement and Innovation Initiative'
    ),
    metadata: text('Metadata (metadata)', 'Another Category'),
    moreButton: select('More element (more)', buttonKinds, 'inverse'),
    subTitle: text(
      'Subtitle (subTitle)',
      'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.'
    ),
    image: text(
      'Image URL (image)',
      'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg'
    ),
    url: text('Link (url)', 'http://www.wfp.org/'),
    isExternal: boolean('Is external (isExternal)', false),
    isLink: boolean('Is link (isLink)', true),
  }),
};

storiesOf('Components|Card', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Card-test'] })
  .addDecorator((story) => <div style={{ width: '100%' }}>{story()}</div>)
  .add('Default (experimental)', () => {
    const setProps = props.set();
    return <Card {...setProps} more={buttons[setProps.moreButton]} />;
  });
