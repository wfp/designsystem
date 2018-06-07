/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module)
.addWithInfo(
  'Usage',
  ``,
  () => (
    <Page title="Usage" subTitle="How to use the UI-Kit">

      <h3>CSS</h3>
      <p>Lorem Ipsum et jomen</p>

      <h3>SCSS</h3>
      <p>Lorem Ipsum</p>

      <Blockquote title="Use Source scss" type="code">
{`
// Import all stylesheets
@import "../../node_modules/@wfp/ui/source/globals/scss/styles.scss";

// Only use variables
@import "../../node_modules/@wfp/ui/source/globals/scss/vars.scss";
`}
      </Blockquote>
    </Page>
  )
);
