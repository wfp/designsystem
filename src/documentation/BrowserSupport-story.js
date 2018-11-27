/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';

storiesOf(' Documentation', module)
  .add('Browser Support', () => (
  <Page title="Browser Support" subTitle="All supported browsers">
    <p>Components is supported in the following browsers:</p>

    <ul className="wfp--story--list">
      <li>IE11 (Support will be removed soon)</li>
      <li>IE Edge latest & last four versions</li>
      <li>Firefox latest & last four versions</li>
      <li>Chrome latest & last four versions</li>
      <li>Safari latest & last two versions</li>
    </ul>
  </Page>
));
