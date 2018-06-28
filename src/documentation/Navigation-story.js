/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf(' Documentation', module).addWithInfo('Navigation', ``, () => (
  <Page title="Navigation" subTitle="3-Level Navigation">
    <p>Limit the Number of Levels</p>
    <h3>Main (Primary) Navigation</h3>
    <p>
      The Main Navigation is a Horizontal Menu which consists of multiple
      clickable items placed at the top of the page. The navigatio stays
      unchanged when browswing through the site and is present on every page.
      The currently selected item is usually highlighted.
    </p>
    <Blockquote>
      The maximum number of items is 6 to 8 items depending on the average word
      length.
    </Blockquote>

    <h3>Secondary Navigation</h3>
    <p>
      Secondary navigation is for content that is of secondary interest to the
      user. It is related to an item of the Main Navigation and usually presents
      a more detailed selection if the former. It is attached to the Main
      Navigation and present on every page.
    </p>

    <h3>Tertiary Navigation</h3>

    <p>
      The Tertiary Navigation splits a page in logical sections. It's content is
      related to the selected page and it is optional.
    </p>
  </Page>
));
