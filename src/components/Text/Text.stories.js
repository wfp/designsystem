import React from 'react';
import markdown from './README.mdx';
import Text from '.';
import { textLookup } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Text {...args} />;

Regular.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        borderTop: '1px solid #EFEFEF',
        borderBottom: '2px solid #EFEFEF',
      }}>
      <Story />
    </div>
  ),
];

Regular.args = { children: 'Content', kind: 'h1' };

export const AllText = (args) => (
  <>
    {Object.keys(textLookup).map((e) => (
      <Text kind={e}>{e}</Text>
    ))}
  </>
);
