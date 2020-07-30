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
    mdx: markdown,
  },
};

const props = () => ({
  className: 'some-class',
  href: text('The link href (href)', '#'),
  onClick: ((handler) => (evt) => {
    evt.preventDefault(); // Prevent link from being followed for demo purpose
    handler(evt);
  })(action('onClick')),
});

export const LinkRegular = (args) => <Link {...args} />;
LinkRegular.args = {
  children: 'Link',
  href: '#',
};

export const LinkAdvanced = (args) => <Link {...args}>Link</Link>;
