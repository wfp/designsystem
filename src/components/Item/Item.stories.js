import React from 'react';
import markdown from './README.mdx';
import Item from '.';
import Button from '../Button';
import Tag from '../Tag';

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
  title: 'A title is shown',
  children: `nonumy eirmod tempor invidunt`,
  subText: `This is the subText. Lorem ipsum dolor sit amet, consetetur sadipscing elitr`,
  kind: 'horizontal',
  icon: (
    <img
      alt="Moving van"
      src="https://www.wfp.org/sites/default/files/images/27DA6743-41A0-4970-A9BA-B4B1415CDD2E_0.jpeg"
    />
  ),
  additional: 'Yesterday',
  hint: <Tag kind="wfp">Hint</Tag>,
};
