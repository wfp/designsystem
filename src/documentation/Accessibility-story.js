/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';

storiesOf('Documentation|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Accessibility', () => (
    <Page title="Accessibility" subTitle="UX Standards">
      <p>
        Accessible design not only helps users with disabilities; it provides
        better user experiences for everyone. All components follow the WCAG AA
        standards.
      </p>
      <p>
        All patterns are perceivable, operable, and understandable to users,
        even when using a screen reader or other assistive technology. However,
        how you use these elements also affects the accessibility of a product.
      </p>
      <p>
        Please find additional information about accessibility in the links
        below.
      </p>
      <ul className="wfp--story__list">
        <li>
          <Link
            href="https://next.carbondesignsystem.com/guidelines/accessibility/overview#carbon-and-accessibility"
            target="_blank">
            Standards of the Carbon Design System
          </Link>
        </li>
      </ul>
    </Page>
  ));
