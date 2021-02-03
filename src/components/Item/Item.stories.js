import React from 'react';
import markdown from './README.mdx';
import Item from '.';
import Button from '../Button';

export default {
  title: 'Components/UI Elements/Item',
  component: Item,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Item {...args} />;

Regular.args = {
  title: 'No entries found',
  children: `You haven't yet created an entry`,
  kind: 'large',
  icon: (
    <img
      alt="Moving van"
      src="https://www.wfp.org/sites/default/files/images/27DA6743-41A0-4970-A9BA-B4B1415CDD2E_0.jpeg"
    />
  ),
  button: <Button kind="accent">New entry</Button>,
};

export const Horizontal = (args) => <Item {...args} />;

Horizontal.args = {
  title: 'No entries found',
  children: `You haven't yet created an entry`,
  subText: `You haven't yet created an entry`,
  kind: 'horizontal',
  icon: (
    <img
      alt="Moving van"
      src="https://www.wfp.org/sites/default/files/images/27DA6743-41A0-4970-A9BA-B4B1415CDD2E_0.jpeg"
    />
  ),
  button: <Button kind="accent">New entry</Button>,
};
