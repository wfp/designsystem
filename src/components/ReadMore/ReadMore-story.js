/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import ReadMore from '../ReadMore';
import Truncate from 'react-truncate-html';

const moreText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

storiesOf('ReadMore', module)
  .addDecorator(withReadme([readme]))
  .add('Default (Draft)', () => (
    <ReadMore
      collapsed={
        <Truncate
          lines={3}
          dangerouslySetInnerHTML={{
            __html: moreText,
          }}
        />
      }
      expanded={moreText}
    />
  ));
