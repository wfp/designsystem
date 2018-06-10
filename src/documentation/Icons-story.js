/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module)
.addWithInfo(
  'Icons',
  ``,
  () => (
    <Page title="Icons" subTitle="Introduction to the new WFP UI-Kit">
      <p>Find a solution for Icons (FontAwesome, Google Material Icons, OCHA Icons)</p>
    </Page>
  )
);
