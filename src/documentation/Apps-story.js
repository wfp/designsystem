/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Mobile Applications (experimental)', () => (
    <Page title="Mobile Applications" subTitle="UX Standards">
      <p>
        Internal Applications often only have to work on Android devices,
        therefor the design should be based the principles of the Googles
        Material UI.
      </p>
      <ul className="wfp--story__list">
        <li>
          <Link
            href="https://next.carbondesignsystem.com/guidelines/accessibility/overview#carbon-and-accessibility"
            target="_blank">
            Google Material UI
          </Link>
        </li>
      </ul>
    </Page>
  ));
