/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Link from '../components/Link';
import Blockquote from '../components/Blockquote';
import Page from './Page';

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Mobile Applications (experimental)', () => (
    <Page title="Mobile Applications" subTitle="UX Standards">


      <Blockquote title="In development" type="warning">
        This page is subject to change and will be updated.
      </Blockquote>

      <p>
        Internal Applications often only have to work on Android devices,
        therefor the design should be based the principles of the Googles
        Material UI.
      </p>

      <ul className="wfp--story__list">
        <li>Use <Link onClick={linkTo('Documentation|General', 'Colors')}>WFP's branding colors</Link></li>
        <li>Use <Link onClick={linkTo('Documentation|General', 'Typography')}>Open Sans</Link> as font</li>
        <li>Use shadows only to highlight important elements</li>
        <li>Keep in mind that applications often run on low-end devices with lacking network coverage</li>
      </ul>

      <img
        alt="Toolkit"
        style={{
          width: '110%',
          height: 'auto',
          marginTop: '2em',
          marginBottom: '2em',
          marginLeft: '-5%'
        }}
        src={`${
          process.env.STORYBOOK_INTERNAL_ASSETS
          }internal/mobile-android-general.png`}
      />
      <p>Use the <Link
        href="https://material.io/tools/"
        target="_blank">
        Android Material Editor
          </Link> as a starting point.</p>

      <h4>Supported devices</h4>
      <p>Check your target audience before starting the development. Usually WFP's applications only need to work on Android.</p>
      <ul className="wfp--story__list">
        <li>
          <Link
            href="https://next.carbondesignsystem.com/guidelines/accessibility/overview#carbon-and-accessibility"
            target="_blank">
            Google Material UI
          </Link>
        </li>
      </ul>
    </Page >
  ));
