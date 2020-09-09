import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Link from '.';
import markdown from './README.mdx';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const LinkRegular = (args) => <Link {...args} />;

LinkRegular.args = {
  children: 'Link',
  href: '#',
};
