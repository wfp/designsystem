/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import { linkTo } from '@storybook/addon-links';

import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';

storiesOf('Getting started|Getting started', module)
  .addParameters({
    options: { showPanel: false, isToolshown: false, sort: 'b' },
  })
  .add('Installing the kit', () => (
    <Page title="Usage for Developers" subTitle="How to use the UI Kit">
      <p>
        The UI Kit provides developers with React.js components, scss,{' '}
        <Link onClick={linkTo('Design|Getting started', 'CSS')}>css</Link>, html
        and assets.
      </p>
      <h2>Getting started with react.js</h2>
      <p>
        If you create your first react project use{' '}
        <Link
          target="_blank"
          href="https://github.com/facebook/create-react-app">
          create-react-app
        </Link>{' '}
        to generate a boilerplate version.
      </p>
      <h3>Add dependencies</h3>
      <p>Installing the UI Kit</p>
      <Blockquote title="Install via npm" code>
        <PrismCode component="pre" className="language-html">
          {`npm install @wfp/ui --save`}
        </PrismCode>
      </Blockquote>
      <Blockquote title="Install via yarn" code>
        <PrismCode component="pre" className="language-html">
          {`yarn add @wfp/ui`}
        </PrismCode>
      </Blockquote>

      <p>Importing the React components</p>
      <Blockquote title="Importing a Button" code>
        <PrismCode component="pre" className="language-javascript">
          {`import { Button } from '@wfp/ui';`}
        </PrismCode>
      </Blockquote>
      <Blockquote title="Using the Button" code>
        <PrismCode component="pre" className="language-javascript">
          {`<Button>ButtonText</Button>`}
        </PrismCode>
      </Blockquote>
      <h3>Polyfills</h3>
      <p>
        Polyfills are needed for IE browsers. We recommend{' '}
        <Link href="https://babeljs.io/docs/en/babel-preset-env">
          babel-preset-env
        </Link>{' '}
        for it.
      </p>
      <h2>CSS</h2>
      <p>
        Each components requires css. You can import the css/scss from npm or
        use it from the CDN.
      </p>

      <h3>React import</h3>
      <p>You can also import the css directly from the npm package.</p>
      <Blockquote title="Import css via react" kind="code">
        <PrismCode component="pre" className="language-css">
          {`// Import all stylesheets
import  '~@wfp/ui/assets/css/styles.css';
`}
        </PrismCode>
      </Blockquote>
      <p>Make sure you have a scss loader installed.</p>
      <Blockquote title="Import scss via react" kind="code">
        <PrismCode component="pre" className="language-css">
          {`// Import all stylesheets
import  '~@wfp/ui/source/globals/scss/styles';

// Only import the Button stylesheet
import '~@wfp/ui/source/components/Button/button';
`}
        </PrismCode>
      </Blockquote>
      <h3>SCSS</h3>
      <p>
        When using scss you can import the SCSS sources from the node_module.
        This allows you to use only parts of the SCSS, reuse common variables
        and functions from WFP UI or to override settings.
      </p>
      <Blockquote title="Use Source scss" kind="code">
        <PrismCode component="pre" className="language-css">
          {`// Sample overriding settings
$input-border-radius: 5px;
$button-border-radius: 60px;
$button-font-size: 25px;
$button-padding: 10px 25px;
$color__main: #0076FF;

// Disable css reset
$css--reset==false

// Import all stylesheets
@import "~@wfp/ui/source/globals/scss/styles";

// Only import the Button stylesheet
@import "~@wfp/ui/source/components/Button/button";

// Only use variables
@import "~@wfp/ui/source/globals/scss/vars";`}
        </PrismCode>
      </Blockquote>
      <h3>CDN Usage</h3>

      <p>
        Import the WFP UI css from the WFP CDN. Change the version number to the
        UI Kit version you are using.
      </p>

      <Blockquote title="CDN" kind="code">
        <PrismCode component="pre" className="language-html">
          {`<link
rel="stylesheet"
type="text/css"
href="https://cdn.wfp.org/guides/ui/v1.1.16/assets/css/styles.min.css"
/>`}
        </PrismCode>
      </Blockquote>
      {/*<h2>Decouple front- and backend</h2>
      <p>
        Seperating the front end from the back end minimizes the overall
        complexity and allows the frontend and backend developers to work
        independently. It will also give Flexibility fo a constant evolution if
        the application is seperated highly decoupled, focussed microservices.
      </p>*/}

      <h2>Vanilla.js</h2>

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
import { Button } from "@wfp/ui";

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
