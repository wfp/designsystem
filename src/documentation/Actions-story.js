/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';

storiesOf(' Documentation', module).add('Actions', () => (
  <Page title="Actions" subTitle="Recommendations for grid system">
    <h3>Destructive Actions</h3>
    <p>
      The UI Kit doesn't come with a CSS grid system. We recommend the use of a
      modern flexbox based grid system like{' '}
      <Link href="https://uxdesign.cc/the-microcopyist-cancellation-confirmation-conflagration-8a6047a4cf9">
        The Microcopist about destructive actions
      </Link>
    </p>
  </Page>
));
