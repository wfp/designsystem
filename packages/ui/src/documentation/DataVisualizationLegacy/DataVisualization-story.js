/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';

storiesOf('Design|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Data visualization', () => (
    <Page title="Data visualization" subTitle="Guidelines">
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
