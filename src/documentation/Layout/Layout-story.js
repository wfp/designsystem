/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import { List, ListItem } from '../../components/List';

storiesOf('Documentation|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Layout', () => {
    return (
      <Page title="Layout" subTitle="Layout & Grid">
        <p>[Add Image here]</p>

        <p>
          The basic structure of your webapplication is defined by the layout.
          To choose the right approach it is important to know about the data
          density and structure.
        </p>
        <h2>Option 1: Fluid width layout (for applications)</h2>
        <p>
          Fluid width allows the design the expand based on the user's settings,
          which is a good thing.
        </p>

        <p>
          This is especially useful for productive application with a high data
          density, because no space is wasted.
        </p>
        <p>
          Unfortunally, in edge cases the line lengths may get too long to be
          easily readable.
        </p>
        <p>
          The width of the grid and content area grows exponentially and the
          margin always remain at 5%. The width of each column continuiously
          grows and gutters remain at 20px.
        </p>
        <h3>Use fluid width layout for:</h3>
        <List kind="bullet">
          <ListItem kind="checkmark">dashboards</ListItem>
          <ListItem kind="checkmark">large tables</ListItem>
          <ListItem kind="checkmark">productive applications</ListItem>
        </List>
        <h2>Option 2: Max width (for text)</h2>
        <p>[Add Image here]</p>
        <p>
          Fixed width layouts give you a maximum width of the content you are
          displaying. This helps avoiding edge cases and issues like too long
          text.
        </p>
        <p>
          The max width is 1200px, with the margins growing exponentially past
          that point. Content and columns are centered on page and the margins
          grow equally on left and right of content. If a side panel exists with
          a max width layout, then the panel should stick to the edges of the
          viewport with the exponential margin between the grid columns and the
          panel. This is not an ideal usecase.
        </p>
        <List kind="bullet">
          <ListItem kind="checkmark">blogs</ListItem>
          <ListItem kind="checkmark">news articles</ListItem>
          <ListItem kind="checkmark">in certain circumstances forms</ListItem>
        </List>
      </Page>
    );
  });
