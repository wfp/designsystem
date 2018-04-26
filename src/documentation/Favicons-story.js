/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';

storiesOf('> Documentation', module)
.addWithInfo(
  'Favicons',
  ``,
  () => {
  return (
    <Page title="Favicons" subTitle="The new Logos in various sizes">

      <p>The visual identity includes a palette of ten complementary colours that can be used with the logo in communications products. Please do not use any other colours. The palette can, however, be extended by using different hues of these colours.

      The color reference codes are shown below.</p>
      
    </Page>
  )
}
);
