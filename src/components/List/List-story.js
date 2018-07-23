/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';
import SingleComponent from '../../documentation/SingleComponent';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import { List, ListItem } from '../List';

const additionalProps = {
  onClick: () => {
    console.log('Clicked!');
  }, // eslint-disable-line no-console
  className: 'some-class',
};

storiesOf('List', module)
  .addDecorator(withTests('List'))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Lists show a number of connected items written consecutively, typically one below the other.
    `,
    () => (
      <List href="#" {...additionalProps}>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    )
  );
