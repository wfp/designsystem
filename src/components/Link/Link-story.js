/**
 * Modified from https://github.com/IBM/carbon-components-react/
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, text } from '@storybook/addon-knobs';
import Link from '../Link';

const props = () => ({
  className: 'some-class',
  href: text('The link href (href)', '#'),
  onClick: (handler => evt => {
    evt.preventDefault(); // Prevent link from being followed for demo purpose
    handler(evt);
  })(action('onClick')),
});

storiesOf('Components|Link', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Link {...props()}>Link</Link>);
