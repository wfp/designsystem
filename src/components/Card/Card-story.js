/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withTests from '../../internal/withTests';
import SingleComponent from '../../documentation/SingleComponent';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Button from '../Button';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import Card from '../Card';

const kinds = {
  landscape: 'Landscape (landscape)',
  'landscape-light': 'Landscape Light (landscape-light)',
  split: 'Split (split)',
  hero: 'Hero (hero)',
  splash: 'Page splash (splash)',
  'splash-image': 'Page splash image (splash-image)',
  'splash-compact': 'Page splash compact (splash-compact)',
  related: 'Related content (related)',
  teaser: 'Teaser',
};

const buttons = {
  regular: <Button>Read More</Button>,
  inverse: <Button kind="inverse">Read More</Button>,
};

const buttonKinds = {
  inverse: 'Hero default (inverse)',
  regular: 'Hero default (inverse)',
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

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('Card'))
  .addDecorator(withReadme([readme]))
  /*.addDecorator(story => (
    <div style={{width: '800px'}}>{story()}</div>
  ))*/
  .add(
    'Default',
    withInfo({
      text: `
      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
      For anything else, especially things that change data, you should be using a button.
    `,
    })(() => {
      const setProps = props.set();
      return <Card {...setProps} more={buttons[setProps.moreButton]} />;
    })
  );
