/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import { withReadme } from 'storybook-readme';
import readme from './FAVICONS-README.md';

storiesOf(' Documentation', module)
  .addDecorator(withReadme([readme]))
  .addWithInfo('Favicons', ``, () => {
    return (
      <Page title="Favicons" subTitle="The new Logos in various sizes">
        <p>
          All the logo files can be found in the `wfp-ui/favicons` folder. For
          the main favicon itself, it's best for cross-browser compatibility not
          to use any HTML. Just name the file favicon.ico and place it in the
          root of your domain.
        </p>
      </Page>
    );
  });
