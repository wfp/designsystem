/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';
import { linkTo } from '@storybook/addon-links';

storiesOf('Getting started|Getting started', module)
  .addParameters({
    options: { showPanel: false, isToolshown: false, sort: 'z' },
  })
  .add('Browser support', () => (
    <Page title="Browser support" subTitle="Supported browsers">
      <Blockquote warning title="IE11 support">
        Please notice that the UI Kit currently supports IE11, but it will no
        longer do it in future releases. Those applications that do not work
        properly or do not work at all in IE11 will need to include a warning
        message inviting the user to switch to a more modern browser. The
        warning can be found{' '}
        <Link onClick={linkTo('Design|Templates', 'Browser Warning')}>
          here
        </Link>
        .
      </Blockquote>

      <p>Currently the following browsers are supported:</p>

      <ul className="wfp--story__list">
        <li>
          <b>Microsoft Internet Explorer 11 (IE11)</b> soon no longer be
          supported by the WFP UI Kit
        </li>
        <li>
          <b>Microsoft Edge</b> latest & last four versions
        </li>
        <li>
          <b>Mozilla Firefox</b> latest & last four versions
        </li>
        <li>
          <b>Google Chrome</b> latest & last four versions
        </li>
        <li>
          <b>Safari</b> latest & last two versions
        </li>
      </ul>

      <p>
        Please make sure that your application is independent of which browser
        is used to access them (i.e. browser agnostic). Find out{' '}
        <Link
          href="http://newgo.wfp.org/documents/software-solutions-technology-stack"
          target="_blank">
          more
        </Link>{' '}
        about the browsers supported on WFP GO.
      </p>

      <Blockquote title="Browserstack">
        Use{' '}
        <Link href="https://www.browserstack.com/" target="_blank">
          BrowserStack
        </Link>{' '}
        for testing different browsers in the cloud. To get access please ask in
        the #ux-ui channel on Slack.
      </Blockquote>

      {/*<h3>Outdated browser message</h3>
      <h4>Banner</h4>

      <InfoBar pageWidth="narrow">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
      </InfoBar>
      <p></p>
      <Link href="#">Display source code</Link>
      <h4>Modal</h4>
      <p></p>
      <Link href="#">Warning modal</Link>*/}
    </Page>
  ));
