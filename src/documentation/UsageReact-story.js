/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';

storiesOf(' Documentation.Getting Started', module).addWithInfo(
  'React Usage',
  ``,
  () => (
    <Page title="React" subTitle="Guidelines & Recommendations">
      <h2>Decouple front- and backend</h2>
      <p>
        Seperating the front end from the back end minimizes the overall
        complexity and allows the frontend and backend developers to work
        independently. It will also give Flexibility fo a constant evolution if
        the application is seperated highly decoupled, focussed microservices.
      </p>

      <h2>Getting started</h2>
      <p>
        If you create your first react project use{' '}
        <Link href="https://github.com/facebook/create-react-app">
          create-react-app
        </Link>{' '}
        to generate a boilerplate version.
      </p>

      <h2>CSS</h2>
      <p>
        <Link href="https://sass-lang.com">scss/sass</Link> is a CSS
        pre-processor with syntax advancements and variable, functions, etc.{' '}
        <Link href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-sass-stylesheet">
          Learn more
        </Link>{' '}
        about how to use Scss with create-react-app.
      </p>

      <h2>Recommended components</h2>

      <h3>Application state handling</h3>
      <p>
        <Link href="https://redux.js.org">redux</Link> is a predictable state
        container for JavaScript apps. It helps you write applications that
        behave consistently, run in different environments (client, server, and
        native), and are easy to test.
      </p>
      <p>
        <Link href="https://github.com/redux-saga/redux-saga">redux-saga</Link>{' '}
        helps managing side effects when loading external data like
        link(asynchronous things)
      </p>

      <h3>Forms</h3>
      <p>
        <Link href="https://github.com/erikras/redux-form">redux-form</Link>{' '}
        works with React Redux to enable an html form in React to use Redux to
        store all of its state.
      </p>

      <h3>Microsoft Azure</h3>
      <p>
        <Link href="https://github.com/salvoravida/react-adal">react-adal</Link>{' '}
        is a library which provides Azure Active Directory Library (ADAL)
        support for React
      </p>

      <h3>Tables</h3>
      <p>
        <Link href="https://github.com/react-tools/react-table">
          react-table
        </Link>{' '}
        is a lightweight and fully customizable library to provide complex data
        tables.
      </p>

      <h3>Linting & naming</h3>
      <p>
        Airbnb provides a{' '}
        <Link href="https://github.com/airbnb/javascriptuseful">
          useful styling guide
        </Link>{' '}
        on how to style JavaScript and react code.
      </p>

      <h3>Charts</h3>
      <p>
        <Link href="https://formidable.com/open-source/victory/">Victory</Link>{' '}
        is a set of modular charting components for React.
      </p>

      <h3>Linting & naming</h3>
      <p>Configuration on Adal https://github.com/salvoravida/react-adal</p>

      <h3>Useful links</h3>
      <ul className="wfp--story--list">
        <li>
          <Link href="https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf">
            React/Redux Style Guide
          </Link>
        </li>
      </ul>
    </Page>
  )
);
