/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Button from '../../components/Button';

storiesOf('Documentation|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Email', () => {
    return (
      <Page title="Email template" subTitle="Newsletter & transactional">
        <p>
          The eMail template can be used for application related notifications.
          It is responsive and works in Microsoft Outlook,{' '}
          <a
            href="https://outlook.office365.com/owa/?realm=wfp.org&exsvurl=1&ll-cc=1031&modurl=0"
            rel="noopener noreferrer"
            target="_blank">
            Microsoft Outlook web
          </a>{' '}
          and most other eMail clients.
        </p>
        <p>
          Make sure to also provide a text-only version of your eMail and
          consider using a css inliner tool like{' '}
          <a
            href="https://templates.mailchimp.com/resources/inline-css/"
            rel="noopener noreferrer"
            target="_blank">
            Mailchimp CSS Inliner Tool
          </a>
          .
        </p>
        <h3>External mail templates</h3>
        <p>
          <Button
            small
            kind="secondary"
            href={`${process.env.STORYBOOK_INTERNAL_ASSETS}email/newsletter-external-email.html`}>
            Newsletter
          </Button>
          &nbsp;
          <Button
            small
            kind="secondary"
            href={`${process.env.STORYBOOK_INTERNAL_ASSETS}email/transaction-external-email.html`}>
            Transaction
          </Button>
        </p>
        <h3>Internal mail templates</h3>
        <p>
          <Button
            small
            kind="secondary"
            href={`${process.env.STORYBOOK_INTERNAL_ASSETS}email/transaction-internal-email.html`}>
            Transaction
          </Button>
        </p>
        <h3>Use with Outlook</h3>
        <p>
          <Button
            small
            kind="secondary"
            href={`${process.env.STORYBOOK_INTERNAL_ASSETS}email/newsletter-external-email.html`}>
            Newsletter (internal & external)
          </Button>
        </p>
        <p>
          The template can be used as copy & paste from Google Chrome into
          Microsoft Outlook. This method is not recommended and shall be only
          used if there is no other mail service available.
        </p>
      </Page>
    );
  });
