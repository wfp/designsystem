/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';

const fileSizes = [120, 152, 160, 167, 180, 192, 300];

storiesOf(' Documentation', module)
  .add('App Icons', () => (
  <Page title="App Icons" subTitle="Introduction to the new WFP UI Kit">
    <p>All WFP apps should use the same app icon featuring the WFP acronym.</p>

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
        href={`${
          process.env.STORYBOOK_ASSETS
        }app/WFP_APP_ICON_${fileSize}x${fileSize}.png`}>
        {fileSize} x {fileSize}px
      </Link>
    ))}
  </Page>
));
