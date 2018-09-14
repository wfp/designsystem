/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Button from '../components/Button';
import { withReadme } from 'storybook-readme';
import readme from './FAVICONS-README.md';

storiesOf(' Documentation', module)
  .addDecorator(withReadme([readme]))
  .addWithInfo('Email', ``, () => {
    return (
      <Page title="Email Template" subTitle="Email template for applications">
        <p>
          The eMail template can be used to for application related
          notifications. It is responsive and works in Microsoft Outlook,{' '}
          <a
            href="https://outlook.office365.com/owa/?realm=wfp.org&exsvurl=1&ll-cc=1031&modurl=0"
            target="_blank">
            Microsoft Outlook web
          </a>{' '}
          and most other eMail clients. Make sure to also provide a text-only
          version of your eMail.
        </p>
        <p>
          <Button
            href={`${
              process.env.STORYBOOK_ASSETS
            }email/transaction-email.html`}>
            View eMail template
          </Button>
        </p>
      </Page>
    );
  });
