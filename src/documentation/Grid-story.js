/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';

storiesOf('Design|Core', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Grid', () => (
    <Page title="Grid system" subTitle="Recommendations for grid system">
      <p>
        The UI Kit doesn't come with a CSS grid system. We recommend the use of
        a modern flexbox based grid system like{' '}
        <Link href="http://flexboxgrid.com/">Flexbox Grid</Link>, which is also
        available as react components.
      </p>
      <ul className="wfp--story__list">
        <li>
          <Link href="http://flexboxgrid.com/" target="_blank">
            Flexbox Grid
          </Link>{' '}
          A grid system based on the flex display property.
        </li>
        <li>
          <Link
            href="https://roylee0704.github.io/react-flexbox-grid/"
            target="_blank">
            React-FlexBox-Grid
          </Link>{' '}
          The React module of Flexbox Grid
        </li>
      </ul>
    </Page>
  ));
