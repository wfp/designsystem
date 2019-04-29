/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Browser support', () => (
    <Page title="Browser support" subTitle="All supported browsers">
      <p>Currently the following browsers are supported:</p>

      <ul className="wfp--story__list">
        <li>IE11 (will soon no longer be supported by the WFP UI Kit)</li>
        <li>IE Edge latest & last four versions</li>
        <li>Firefox latest & last four versions</li>
        <li>Chrome latest & last four versions</li>
        <li>Safari latest & last two versions</li>
      </ul>

      <p>
        Please make sure that your application is independent of which browser
        is used to access them (i.e. browser agnostic).
      </p>

      <Blockquote>
        Find out{' '}
        <Link
          href="http://newgo.wfp.org/documents/software-solutions-technology-stack"
          target="_blank">
          more
        </Link>{' '}
        about the browsers supported on WFP GO.
      </Blockquote>
    </Page>
  ));
