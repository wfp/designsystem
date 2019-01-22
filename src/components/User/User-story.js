import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { List, ListItem } from '../List';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import User from '../User';

const UserProps = {
  default: () => ({
    alt: text('Alternative Text (alt)', 'The Alt Text'),
    description: text('Description (extendedDescription)', undefined),
    extendedDescription: text(
      'Extended description (extendedDescription)',
      undefined
    ),
    ellipsis: boolean('Ellipsis (ellipsis)', false),
    className: 'some-class',
    image: text('Image (image)', undefined),
    name: text('User name (name)', 'Max Mustermann'),
    small: boolean('Small (small)', false),
  }),
  description: () => ({
    alt: text('Alternative Text (alt)', 'The Alt Text'),
    description: (
      <List kind="simple" small>
        <ListItem>Business Support Assistant G4</ListItem>
        <ListItem>Fixed Term</ListItem>
      </List>
    ),
    extendedDescription: (
      <List kind="simple" small>
        <ListItem title="First level supervisor">Marie Curie</ListItem>
        <ListItem title="Mrc">Tanzania Country Office</ListItem>
        <ListItem title="Head of unit">Max Planck</ListItem>
      </List>
    ),
    ellipsis: boolean('Ellipsis (ellipsis)', false),
    className: 'some-class',
    image: text('Image (image)', undefined),
    name: text('User name (name)', 'Albert Einstein'),
    small: boolean('Small (small)', false),
  }),
};

storiesOf('User', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['User-test'] })
  .add('Default', () => <User {...UserProps.default()} />, {
    info: {
      text: readme,
    },
  })
  .add('With Description', () => <User {...UserProps.description()} />, {
    info: {
      text: readme,
    },
  });
