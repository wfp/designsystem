import React from 'react';
import markdown from './README.mdx';
import Unit from '.';
import Table from '../Table';
import Text from '../Text';

export default {
  title: 'Components/Content Related/Unit',
  component: Unit,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Unit {...args} />;

Regular.args = {
  children: '12345',
  type: 'usd',
};

export const NumberFractionDigits = () => (
  <Table>
    <thead>
      <tr>
        <td>Input value</td>
        <td>minimumFractionDigits</td>
        <td>maximumFractionDigits</td>
        <td>Result</td>
        <td>Comment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0.1234567</td>
        <td>3</td>
        <td>3</td>
        <td>
          <Unit type="Num" minimumFractionDigits={3} maximumFractionDigits={3}>
            {0.1234567}
          </Unit>
        </td>
        <td>
          <Text kind="caption">
            uses minimumFractionDigits and maximumFractionDigits
          </Text>
        </td>
      </tr>
      <tr>
        <td>0.1234567</td>
        <td>0</td>
        <td>0</td>
        <td>
          <Unit type="Num" minimumFractionDigits={0} maximumFractionDigits={0}>
            {0.1234567}
          </Unit>
        </td>
        <td>
          <Text kind="caption">
            detects value smaller than 1 and adopts minimumFractionDigits to
            avoid displaying 0
          </Text>
        </td>
      </tr>
      <tr>
        <td>12345.1234567</td>
        <td>0</td>
        <td>0</td>
        <td>
          <Unit type="Num" minimumFractionDigits={0} maximumFractionDigits={0}>
            {12345.1234567}
          </Unit>
        </td>
        <td>
          <Text kind="caption">
            detects value larger than 1 uses minimumFractionDigits and
            maximumFractionDigits
          </Text>
        </td>
      </tr>
    </tbody>
  </Table>
);

const sourcecode = `
import { Unit, Table, Text } from "@wfp/react";

<Table>
    <thead>
      <tr>
        <td>Input value</td>
        <td>minimumFractionDigits</td>
        <td>maximumFractionDigits</td>
        <td>Result</td>
        <td>Comment</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0.1234567</td>
        <td>3</td>
        <td>3</td>
        <td>
          <Unit type="Num" minimumFractionDigits={3} maximumFractionDigits={3}>
            {0.1234567}
          </Unit>
        </td>
        <td>
          <Text kind="caption">
            uses minimumFractionDigits and maximumFractionDigits
          </Text>
        </td>
      </tr>
      <tr>
        <td>0.1234567</td>
        <td>0</td>
        <td>0</td>
        <td>
          <Unit type="Num" minimumFractionDigits={0} maximumFractionDigits={0}>
            {0.1234567}
          </Unit>
        </td>
        <td>
          <Text kind="caption">
            detects value smaller than 1 and adopts minimumFractionDigits to
            avoid displaying 0
          </Text>
        </td>
      </tr>
      <tr>
        <td>12345.1234567</td>
        <td>0</td>
        <td>0</td>
        <td>
          <Unit type="Num" minimumFractionDigits={0} maximumFractionDigits={0}>
            {12345.1234567}
          </Unit>
        </td>
        <td>
          <Text kind="caption">
            detects value larger than 1 uses minimumFractionDigits and
            maximumFractionDigits
          </Text>
        </td>
      </tr>
    </tbody>
  </Table>
`;

NumberFractionDigits.story = {
  parameters: {
    docs: {
      storyDescription: `You can customize the number of decimal places by changing the \`minimumFractionDigits\` and \`maximumFractionDigits\` prop. If \`value < 1\` is getting displayed the \`minimumFractionDigits\` will automatically adopt to display the significant decimal places.`,
      source: {
        code: sourcecode,
      },
    },
  },
};
