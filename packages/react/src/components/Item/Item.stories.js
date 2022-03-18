import React from 'react';
import markdown from './README.mdx';
import Item from '.';
import Tag from '../Tag';

export default {
  title: 'Components/UI Elements/Item',
  component: Item,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
    mdx: markdown,
  },
};

export const Regular = (args) => <Item {...args} />;

Regular.args = {
  title: 'A title is shown',
  children: `nonumy eirmod tempor invidunt`,
  subContent: `This is the subContent. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
  icon: (
    <img
      alt="Moving van"
      src="https://www.wfp.org/sites/default/files/styles/medium/public/images/publication/YiR_banner.jpg"
    />
  ),
  showAdditionalIcon: true,
  additional: 'Yesterday',
  hint: <Tag kind="wfp">Hint</Tag>,
  wrapper: 'button',
};

const itemsourcecode = (kind, wrapper) => `
import { Item, Tag } from "@un/react";

<Item
  additional="Yesterday"
  hint={<Tag kind="wfp">Hint</Tag>}
  icon={<img alt="Moving van" src="https://www.wfp.org/sites/default/files/styles/medium/public/images/publication/YiR_banner.jpg"/>}
  kind=${kind}
  showAdditionalIcon
  subContent="This is the subContent. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
  title="A title is shown"
  wrapper=${wrapper}
>
  nonumy eirmod tempor invidunt
</Item>

`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: itemsourcecode('large', 'button'),
      },
    },
  },
};

export const Horizontal = (args) => <Item {...args} />;

Horizontal.args = {
  title: 'A title is shown',
  children: `nonumy eirmod tempor invidunt`,
  subContent: `This is the subContent. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
  kind: 'horizontal',
  icon: (
    <img
      alt="Moving van"
      src="https://www.wfp.org/sites/default/files/styles/medium/public/images/publication/YiR_banner.jpg"
    />
  ),
  showAdditionalIcon: true,
  additional: 'Yesterday',
  hint: <Tag kind="wfp">Hint</Tag>,
  wrapper: 'sidebar',
};

Horizontal.story = {
  parameters: {
    docs: {
      source: {
        code: itemsourcecode('horizontal', 'sidebar'),
      },
    },
  },
};

export const HorizontalRepeater = (args) => <Item {...args} />;

HorizontalRepeater.args = {
  title: 'A title is shown',
  children: `nonumy eirmod tempor invidunt`,
  subContent: `This is the subContent. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`,
  kind: 'horizontal',
  icon: (
    <img
      alt="Moving van"
      src="https://www.wfp.org/sites/default/files/styles/medium/public/images/publication/YiR_banner.jpg"
    />
  ),
  showAdditionalIcon: true,
  additional: 'Yesterday',
  hint: <Tag kind="wfp">Hint</Tag>,
  wrapper: 'repeater',
};

HorizontalRepeater.story = {
  parameters: {
    docs: {
      source: {
        code: itemsourcecode('horizontal', 'repeater'),
      },
    },
  },
};
