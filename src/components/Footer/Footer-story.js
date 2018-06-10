import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import Footer from '../Footer';
import Link from '../Link';

const additionalProps = {
  onClick: action('onClick'),
  className: 'some-class',
  labelOne: 'Stet clita kasd',
  linkTextOne: 'Lorem Ipsum',
  linkHrefOne: 'www.google.com',
  labelTwo: 'Bin sulamen et jam',
  linkTextTwo: 'Et jomen',
  linkHrefTwo: 'www.google.com',
  buttonText: 'Create',
};

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Default',
    `
      WFP's default Footer for internal applications. The link area can be customized with relevant links and hints. There is a debug/version area underneath. TODO: You can use the Logo from the CDN or a custom Logo on the Footer.

      ~~~js
      import { Footer } from '@wfp/ui';
      ~~~

    `,
    () => <Footer {...additionalProps} />
  )
  .addWithInfo(
    'Custom',
    `
      This footer allows custom elements to be placed inside.
    `,
    () => {
      const label = 'pageWidth';
      const options = {
      '': 'undefined',
      'narrow': 'narrow'
      };
      const defaultValue = '';

      const pageWidth = select(label, options, defaultValue);
      
      return (
        <Footer
          className="some-class"
          metaContent="WFP UI Kit version 1.0 – powered by RMT with full support of concerned divisions which are responsible for the accuracy of the content"
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
      )}
    );
