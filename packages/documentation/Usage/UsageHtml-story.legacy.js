/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';

storiesOf('Getting started|Getting started', module)
  .addParameters({
    options: { showPanel: false, isToolshown: false, sort: 'z' },
  })
  .add('HTML', () => (
    <Page title="HTML Usage" subTitle="Use the UI Kit without react.js">
      <h3>Vanilla.js</h3>

      <p>
        The JS components are built using React, but that does not limit their
        usage to just React applications. You can render any component in any
        JavaScript application with ReactDOM.render. Think of it like using a
        jQuery plugin.
      </p>

      <Blockquote title="Usage without react" kind="code">
        <PrismCode component="pre" className="language-js">
          {`// Sample overriding settings
import ReactDOM from 'react-dom';
import { Button } from "@wfp/react";

const myContainerElement = document.getElementById("container");

// with JSX
ReactDOM.render(<Button>Simple Button</Button>, myContainerElement);

// with vanilla JS, use React.createElement
ReactDOM.render(
    React.createElement(Button, {
        className: Classes.SMALL,
        children: 'Simple button'
    }),
    myContainerElement
);
`}
        </PrismCode>
      </Blockquote>
      <p>To remove the component from the DOM and clean up, unmount it:</p>
      <Blockquote title="Unmount component" kind="code">
        <PrismCode component="pre" className="language-js">
          {`ReactDOM.unmountComponentAtNode(myContainerElement);
`}
        </PrismCode>
      </Blockquote>
      <p>
        Check out the{' '}
        <Link href="https://reactjs.org/docs/react-api.html" target="_blank">
          React API docs
        </Link>{' '}
        for more details.
      </p>
      <h3>Usage with Google Chrome</h3>
      <p>
        {' '}
        Many parts of the UI Kit can be used with html/css only. Download the{' '}
        <Link href="https://developers.google.com/web/tools/chrome-devtools/">
          Google Chrome DevTools
        </Link>
        . Right-click on any component, click{' '}
        <span className="wfp--inline-highlight">Inspect</span>, and you'll see
        the html of that component which can be copied and reused.
      </p>
    </Page>
  ));
