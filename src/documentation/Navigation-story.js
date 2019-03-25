/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Button from '../components/Button';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Navigation', () => (
    <Page title="Navigation" subTitle="3-Level Navigation">
      <h3>Main (Primary) Navigation</h3>
      <p>
        The Main Navigation is a Horizontal Menu which consists of multiple
        clickable items placed at the top of the page. The navigation stays
        unchanged when browswing through the site and is present on every page.
        The currently selected item is usually highlighted.
      </p>
      <Blockquote>
        The maximum number of items is 6 to 8 items depending on the average
        word length.
      </Blockquote>

      <Button
        onClick={linkTo('MainNavigation', 'default')}
        small
        kind="secondary"
        style={{ marginBottom: '2em' }}>
        Go to MainNavigation
      </Button>

      <h3>Sub Navigation</h3>
      <p>
        Sub navigation is for content that is of secondary interest to the user.
        It is related to an item of the Main Navigation and usually presents a
        more detailed selection if the former. It is attached to the Main
        Navigation and present on every page.
      </p>
      <Button
        onClick={linkTo('SubNavigation', 'default')}
        small
        kind="secondary"
        style={{ marginBottom: '2em' }}>
        Go to SubNavigation
      </Button>

      <h3>Secondary Navigation</h3>

      <p>
        The Secondary Navigation splits a page in logical sections. It's content
        is related to the selected page and it is optional.
      </p>
      <Button
        onClick={linkTo('SecondaryNavigation', 'default')}
        small
        kind="secondary"
        style={{ marginBottom: '2em' }}>
        Go to SecondaryNavigation
      </Button>

      <h3>Banner Navigation</h3>

      <p>
        The Banner Navigation adds additional links to other websites. Each Link
        should target to a new tab. It is additional and should only cover
        external links.
      </p>
      <Button
        onClick={linkTo('BannerNavigation', 'default')}
        small
        kind="secondary"
        style={{ marginBottom: '2em' }}>
        Go to BannerNavigation
      </Button>
    </Page>
  ));
