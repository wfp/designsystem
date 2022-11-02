import React from 'react';
import markdown from './README.mdx';
import List from './List';
import ListItem from './ListItem';

export default {
  title: 'Components/UI Elements/List',
  component: List,
  subcomponents: { ListItem },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
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

export const SimpleInline = (args) => (
  <List {...args}>
    <ListItem title="List item with title">First item</ListItem>
    <ListItem title="Another item with title">Second item</ListItem>
    <ListItem>Third item</ListItem>
    <ListItem>Fourth item</ListItem>
    <ListItem>Fifth item</ListItem>
  </List>
);

SimpleInline.args = {
  kind: 'simple-inline',
};

const msg = ` \`simple-inline\` \`kind\` shows listed items next to each other`;

SimpleInline.story = {
  parameters: {
    docs: {
      storyDescription: msg,
    },
  },
};

export const Details = (args) => (
  <List {...args}>
    <ListItem title="List item with title">First item</ListItem>
    <ListItem title="Another item with title">Second item</ListItem>
    <ListItem>Third item</ListItem>
    <ListItem>Fourth item</ListItem>
    <ListItem>Fifth item</ListItem>
  </List>
);

Details.args = {
  kind: 'details',
};

const msghere = ` \`details\` \`kind\` shows listed items on different blocks`;

Details.story = {
  parameters: {
    docs: {
      storyDescription: msghere,
    },
  },
};

export const Bullet = (args) => (
  <List {...args}>
    <ListItem title="List item with title">First item</ListItem>
    <ListItem title="Another item with title">Second item</ListItem>
    <ListItem>Third item</ListItem>
    <ListItem>Fourth item</ListItem>
    <ListItem>Fifth item</ListItem>
  </List>
);

Bullet.args = {
  kind: 'unordered',
};

const msgg = ` \`undordered\` \`kind\` shows bulleted list items`;

Bullet.story = {
  parameters: {
    docs: {
      storyDescription: msgg,
    },
  },
};

// export const ListColumns = (args) => (
//   <List kind="details" style={{ columnCount: 3 }}>
//     <ListItem title="Strategic Outcome">
//       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//       eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
//       voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
//       clita kasd gubergren, no sea takimata sanctus est Lorem ipsum d Stet clita
//       kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
//     </ListItem>
//     <ListItem title="Financial Outcome and a very long and detailed list title with more content that fits on a line">
//       Dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
//       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
//       erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
//       rebum.
//     </ListItem>
//     <ListItem title="Financial Outcome">
//       Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
//       sit amet.
//     </ListItem>
//     <ListItem title="Financial Outcome">
//       At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
//       gubergren, no sea takimata sanctus est Lorem ipsum d Stet clita kasd
//       gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Dolor
//       sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//       diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
//       erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
//       rebum.
//     </ListItem>
//   </List>
// );

// const description = `
// Lists can have multiple columns by using the \`columnCount\` attribute in \`style\` prop.
// `;

// ListColumns.story = {
//   parameters: {
//     docs: {
//       storyDescription: description,
//     },
//   },
// };

export const ListitemBullets = (args) => (
  <List kind="unordered">
    <ListItem kind="checkmark">checkmark</ListItem>

    <ListItem kind="cross">cross</ListItem>
    <ListItem>hello</ListItem>
  </List>
);

const listItemDescription = ` \`unordered\` List with ListItems can have \`checkmark\` and \`cross\` kinds`;

ListitemBullets.story = {
  parameters: {
    docs: {
      storyDescription: listItemDescription,
    },
  },
};

export const NestedListItems = (args) => (
  <List kind="unordered">
    <ListItem>Item label</ListItem>
    <ListItem>Item label</ListItem>
    <List kind="ordered">
      <ListItem>Item label 2</ListItem>
      <ListItem>Item label 2</ListItem>
      <List>
        <ListItem>Item label 3</ListItem>
        <ListItem>Item label 3</ListItem>
      </List>
    </List>
  </List>
);

const nestedItemDescription = ` \`unordered\` List with ListItems can have \`checkmark\` and \`cross\` kinds`;

NestedListItems.story = {
  parameters: {
    docs: {
      storyDescription: nestedItemDescription,
    },
  },
};
