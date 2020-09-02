import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { List, ListItem } from '../List';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
    subcomponents: { ListItem },
  },
};

export const Regular = (args) => (
  <List {...args}>
    <ListItem title="List item with title">First item</ListItem>
    <ListItem title="Another item with title">Second item</ListItem>
    <ListItem>Third item</ListItem>
    <ListItem>Fourth item</ListItem>
    <ListItem>Fifth item</ListItem>
  </List>
);

Regular.args = {
  colon: true,
};

export const ListColumns = (args) => (
  <List kind="details" style={{ columnCount: 3 }}>
    <ListItem title="Strategic Outcome">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum d Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </ListItem>
    <ListItem title="Financial Outcome and a very long and detailed list title with more content that fits on a line">
      Dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </ListItem>
    <ListItem title="Financial Outcome">
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </ListItem>
    <ListItem title="Financial Outcome">
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum d Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </ListItem>
  </List>
);

const description = `
Lists can have multiple columns by using the \`columnCount\` prop.
`;

ListColumns.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const ListDetails = (args) => (
  <List kind="bullets">
    <ListItem kind="checkmark">hello</ListItem>
    <ListItem kind="cross">hello</ListItem>
    <ListItem>hello</ListItem>
  </List>
);

// ListDetails.story = {

// }
