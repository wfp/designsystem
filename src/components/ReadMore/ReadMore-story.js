/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import ReadMore from '../ReadMore';

storiesOf('ReadMore', module)
  .addDecorator(withReadme([readme]))
  .add(
    'Default',
    () => (
      <ReadMore
        href="#"
        html="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
    )
  );
