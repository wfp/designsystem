/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import Footer from './Footer';
import Link from '../Link';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Footer', module)
  //.addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).
    `,
    () => {
      const options = {
        '': 'undefined',
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      };
      const defaultValue = '';

      const pageWidth = select('pageWidth', options, defaultValue);

      const optionsMobilePageWidth = {
        '': 'undefined',
        full: 'full',
      };

      const mobilePageWidth = select(
        'mobilePageWidth',
        optionsMobilePageWidth,
        defaultValue
      );

      const metaContent = text(
        'metaContent',
        'WFP UI Kit version 1.0 – powered by RMT with full support of concerned divisions which are responsible for the accuracy of the content'
      );

      const className = text('className', 'some-class');

      const logo = text(
        'logo',
        'logos/vertical/en/wfp-logo-vertical-black-en.svg'
      );
      const logoExtended = text(
        'logoExtended',
        'logos/extended/en/wfp-logo-extended-black-en.svg'
      );

      return (
        <Footer
          className={className}
          logo={logo}
          logoExtended={logoExtended}
          metaContent={metaContent}
          mobilePageWidth={mobilePageWidth}
          pageWidth={pageWidth}>
          <div className="wfp--footer-info">
            <div className="wfp--footer-info__item">
              <p className="wfp--footer-label">A label</p>
              <Link href="http://www.wfp.org">First Link</Link>
              <Link href="http://www.wfp.org">Second Link</Link>
            </div>
            <div className="wfp--footer-info__item">
              <p className="wfp--footer-label">Another label</p>
              <Link href="http://www.go.wfp.org">WFP go</Link>
              <Link href="http://www.wfp.org">Second Link</Link>
            </div>
          </div>
        </Footer>
      );
    }
  );
