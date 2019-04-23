/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../components/Link';
import Page from '../Page';

storiesOf('Documentation|Patterns', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Content page', () => (
    <Page title="Content Page" subTitle="Regular Content Page">
      <h3>Where to use?</h3>
      <p>This is currently a draft.</p>
      {/*<ul className="wfp--story__list">
        <li>
          <Link
            href="https://next.carbondesignsystem.com/guidelines/accessibility/overview#carbon-and-accessibility"
            target="_blank">
            Standards of the Carbon Design System
          </Link>
        </li>
  </ul>*/}
    </Page>
  ));
