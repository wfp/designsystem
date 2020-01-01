/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { List, ListItem } from '../List';

const kinds = {
  'Simple vertical list (simple)': 'simple',
  'Simple horizontal list (simple-inline)': 'simple-inline',
  'Bullet list (bullet)': 'bullet',
  'Detailed list (details)': 'details',
};

const props = () => ({
  className: 'some-class',
  colon: boolean('Colon (colon)', false),
  kind: select('Kind of list (kind)', kinds, 'simple'),
  small: boolean('Small (small)', false),
});

storiesOf('Components|List', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    /* `
      Lists show a number of connected items written consecutively, typically one below the other.
    `,*/
    () => (
      <List {...props()}>
        <ListItem title="List item with title">First item</ListItem>
        <ListItem title="Another item with title">Second item</ListItem>
        <ListItem>Third item</ListItem>
        <ListItem>Fourth item</ListItem>
        <ListItem>Fifth item</ListItem>
      </List>
    )
  )
  .add(
    'List with Titles',
    /*`
      Lists show a number of connected items written consecutively, typically one below the other.
    `,*/
    () => (
      <List kind="details" style={{ columnCount: 3 }}>
        <ListItem title="Strategic Outcome">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum d Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </ListItem>
        <ListItem title="Financial Outcome and a very long and detailed list title with more content that fits on a line">
          Dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum.
        </ListItem>
        <ListItem title="Financial Outcome">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.
        </ListItem>
        <ListItem title="Financial Outcome">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum d Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </ListItem>
      </List>
    )
  );
