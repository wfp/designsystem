/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';

storiesOf(' Documentation', module)
  .addWithInfo('Browser Support', ``, () => (
    <Page title="Browser Support" subTitle="All supported browsers">
      <p>
        Components is supported in the following browsers:
      </p>

      <ul className="wfp--story--list">
        <li>IE11</li>
        <li>IE Edge latest</li>
        <li>Firefox latest</li>
        <li>Chrome latest</li>
        <li>Safari latest</li>
      </ul>
    </Page>
));
