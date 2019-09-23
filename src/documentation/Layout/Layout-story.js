/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Button from '../../components/Button';

storiesOf('Documentation|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Layout', () => {
    return (
      <Page title="Layout" subTitle="Layout & Grid">
        <h3>Option 1: Exponential grid (default)</h3>
        <p>
          The width of the grid and content area grows exponentially and the
          margin always remain at 5%. The width of each column continuiously
          grows and gutters remain at 20px.
        </p>
        <h3>Option 2: Max width</h3>
        <p>
          The max width is 1600px, with the margins growing exponentially past
          that point. Content and columns are centered on page and the margins
          grow equally on left and right of content. If a side panel exists with
          a max width layout, then the panel should stick to the edges of the
          viewport with the exponential margin between the grid columns and the
          panel. This is not an ideal usecase.
        </p>
      </Page>
    );
  });
