import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, text } from '@storybook/addon-knobs';
import Link from '.';

export default { title: 'Components|Link', component: Link };

const props = () => ({
  className: 'some-class',
  href: text('The link href (href)', '#'),
  onClick: ((handler) => (evt) => {
    evt.preventDefault(); // Prevent link from being followed for demo purpose
    handler(evt);
  })(action('onClick')),
});

/*
storiesOf('Components|Link', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Link {...props()}>Link</Link>);
*/

export const LinkRegular = () => <Link {...props()}>Link</Link>;
