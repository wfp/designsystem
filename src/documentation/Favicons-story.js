/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';

storiesOf('> Documentation', module)
.addWithInfo(
  'Favicons',
  ``,
  () => {
  return (
    <Page title="Favicons" subTitle="The new Logos in various sizes">

      <p>
        All the logo files can be found in the `wfp-ui/favicons` folder. For the main favicon itself, it's best for cross-browser compatibility not to use any HTML. Just name the file favicon.ico and place it in the root of your domain.
      </p>

      <Blockquote 
        title="Full sizes catalog which can be added to the HTML Head"
        type="code"
      >
          {`<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#006CB6">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#006CB6">`}
      </Blockquote>
    </Page>
  )
}
);
