/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import HtmlComponent from '../../documentation/HtmlComponent';
import Html from './List.html';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

import { List, ListItem } from '../List';

const additionalProps = {
  className: 'some-class',
};

storiesOf('List', module)
  .addDecorator(withTests('List'))
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Lists show a number of connected items written consecutively, typically one below the other.
    `,
    () => (
      <List {...additionalProps}>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    )
  )
  .addWithInfo(
    'List with Titles',
    `
      Lists show a number of connected items written consecutively, typically one below the other.
    `,
    () => (
      <List kind="details" {...additionalProps} style={{ columnCount: 3 }}>
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

storiesOf('List', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  );
