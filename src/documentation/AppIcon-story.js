/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';

const fileSizes = [120, 152, 160, 167, 180, 192, 300];

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('App icons', () => (
    <Page title="App icons" subTitle="Icons for Android & iOS">
      <Blockquote warning title="Work in progress">
        Please notice that this page is currently a draft.
      </Blockquote>
      <p>
        All WFP apps should use a custom made icon to be distinguishable. By
        using the branding colors the icon should be recognizable as an WFP app.
      </p>

      <p>
        For Android Apps please follow the{' '}
        <Link
          href="https://developer.android.com/google-play/resources/icon-design-specifications"
          target="_blan">
          Guidelines
        </Link>
      </p>

      <p>
        Mobile operating systems automatically add the name of the app near the
        icon, thus allowing users to distinguish different WFP apps in case more
        than one is installed on a user device.{' '}
        <Link
          href="http://newgo.wfp.org/how-do-i/create-a-wfp-app-icon"
          target="_blank">
          More Information
        </Link>
      </p>

      <h3>Sizes</h3>

      <img
        alt="WFP Icon"
        style={{
          border: '1px solid #E5E5E5',
          width: 100,
          height: 100,
        }}
        src={`${process.env.STORYBOOK_ASSETS}app/WFP_APP_ICON_300x300.png`}
      />
      <br />
      {fileSizes.map(fileSize => (
        <Link
          small
          style={{ marginRight: '0.5em', fontSize: '0.7em' }}
          target="_blank"
          href={`${process.env.STORYBOOK_ASSETS}app/WFP_APP_ICON_${fileSize}x${fileSize}.png`}>
          {fileSize} x {fileSize}px
        </Link>
      ))}
    </Page>
  ));
