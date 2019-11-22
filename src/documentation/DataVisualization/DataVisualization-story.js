/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';

storiesOf('Design|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Data Visualization', () => (
    <Page title="Data Visualization" subTitle="Icons for Android & iOS">
      <p>
        <Link
          href="https://brand.manuals.wfp.org/en/data-visualization-guidance/"
          target="_blank">
          More Information
        </Link>{' '}
        on data visualization.
      </p>
    </Page>
  ));
