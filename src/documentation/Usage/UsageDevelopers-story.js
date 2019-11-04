/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import { linkTo } from '@storybook/addon-links';

import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';

storiesOf(' Documentation|Getting started', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Developers', () => (
    <Page title="Usage for Developers" subTitle="How to use the UI Kit">
      <p>
        The UI Kit provides developers with React.js components, scss, css, html
        and assets.
      </p>
      <h3>Getting started with react.js</h3>
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
      <h3>CSS</h3>
      <p>
        See the{' '}
        <Link onClick={linkTo('Documentation|Getting started', 'CSS')}>
          CSS page
        </Link>{' '}
        for guidelines.
      </p>
      <h2>Decouple front- and backend</h2>
      <p>
        Seperating the front end from the back end minimizes the overall
        complexity and allows the frontend and backend developers to work
        independently. It will also give Flexibility fo a constant evolution if
        the application is seperated highly decoupled, focussed microservices.
      </p>
    </Page>
  ));
