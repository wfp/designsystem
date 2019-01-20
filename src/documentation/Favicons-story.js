/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';
import { withReadme } from 'storybook-readme';
import readme from './FAVICONS-README.md';

storiesOf(' Documentation', module)
  .addDecorator(withReadme([readme]))
  .add('Favicons', () => {
    return (
      <Page title="Favicons" subTitle="The new Logos in various sizes">
        <p>
          All the logo files can be found in the{' '}
          <Link href="https://github.com/wfp/ui-assets/tree/master/src/favicons">
            @wfp/ui-assets
          </Link>{' '}
          repository. For the main favicon itself, it's best for cross-browser
          compatibility not to use any HTML. Just name the file favicon.ico and
          place it in the root of your domain.
        </p>
        <h3>Use with CDN</h3>
        <p>
          The Favicons from the CDN can be found{' '}
          <Link href={`${process.env.STORYBOOK_ASSETS}favicons`}>here</Link>.
          The full sizes catalog of the icons can be found below in the readme.
        </p>
      </Page>
    );
  });
