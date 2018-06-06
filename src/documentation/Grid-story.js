/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module)
.addWithInfo(
  'Grid',
  ``,
  () => (
    <Page title="Grid" subTitle="Recommendations for grid system">
      <p>The UI-Kit doesn't come with a CSS grid system. We recommend the use of a modern flexbox based grid system like <Link href="http://flexboxgrid.com/">Flexbox Grid</Link>, which is also available as react Components.</p>
      <ul>
        <li>
          <Link href="http://flexboxgrid.com/">Flexbox Grid</Link>
        </li>
        <li>
          <Link href="https://roylee0704.github.io/react-flexbox-grid/">React-FlexBox-Grid</Link>
        </li>
      </ul>
    </Page>
  )
);
