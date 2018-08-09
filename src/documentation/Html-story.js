/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';

import { withReadme } from 'storybook-readme';
import readme from './HTML-README.md';

storiesOf(' Documentation', module)
  .addDecorator(withReadme([readme]))
  .addWithInfo('HTML Usage', ``, () => (
    <Page title="HTML Usage" subTitle="Use the UI Kit without react.js">
      <p>
        Most parts of the UI Kit can be used with html / css only. See the
        readme below for more information. You can use the css from the CDN[Link
        to CDN] of the scss.
      </p>
    </Page>
  ));
