/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';
import { linkTo } from '@storybook/addon-links';

storiesOf('Getting started|Getting started', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Extending the kit', () => (
    <Page title="Recommended tools" subTitle="Guidelines & Recommendations">
      <h2>CSS</h2>
      <p>
        <Link target="_blank" href="https://sass-lang.com">
          scss/sass
        </Link>{' '}
        is a CSS pre-processor with syntax advancements and variable, functions,
        etc.{' '}
        <Link
          target="_blank"
          href="https://create-react-app.dev/docs/adding-a-sass-stylesheet">
          Learn more
        </Link>{' '}
        about how to use scss with create-react-app.
      </p>

      <h2>Recommended components</h2>

      <h3>Application state handling</h3>
      <p>
        <Link target="_blank" href="https://redux.js.org">
          redux
        </Link>{' '}
        is a predictable state container for JavaScript apps. It helps you write
        applications that behave consistently, run in different environments
        (client, server, and native), and are easy to test.
      </p>
      <p>
        <Link target="_blank" href="https://github.com/redux-saga/redux-saga">
          redux-saga
        </Link>{' '}
        helps managing side effects when loading external data like
        link(asynchronous things)
      </p>

      <h3>Maps</h3>

      <p>
        Please have a look at the{' '}
        <Link onClick={linkTo('Getting started|Guidelines', 'Maps')}>
          Map guidelines
        </Link>
        .
      </p>
      {/*<p>
        <Link target="_blank" href="https://www.react-simple-maps.io">
          react-simple-maps
        </Link>{' '}
        is a map component to generate simple political maps
      </p>*/}
      <p>
        <Link target="_blank" href="https://github.com/uber/react-map-gl">
          react-map-gl
        </Link>{' '}
        for maps using mapbox.gl
      </p>

      <p>
        <Link target="_blank" href="https://developers.arcgis.com/javascript">
          ArcGIS API for JavaScript
        </Link>{' '}
        for complex maps with custom layers
      </p>

      <h3>Forms</h3>
      <p>
        <Link
          target="_blank"
          href="https://github.com/final-form/react-final-form">
          react-final-form
        </Link>{' '}
        is a form library for react.
      </p>
      <p style={{ textDecoration: 'line-through' }}>
        <Link target="_blank" href="https://github.com/erikras/redux-form">
          redux-form
        </Link>{' '}
        works with React Redux to enable an html form in React to use Redux to
        store all of its state.
      </p>

      <h3>Microsoft Azure</h3>
      <p>
        <Link target="_blank" href="https://github.com/salvoravida/react-adal">
          react-adal
        </Link>{' '}
        is a library which provides Azure Active Directory Library (ADAL)
        support for React
      </p>

      <h3>Tables</h3>
      <p>
        <Link target="_blank" href="https://github.com/react-tools/react-table">
          react-table
        </Link>{' '}
        is a lightweight and fully customizable library to provide complex data
        tables.
      </p>
      <p>
        <Link target="_blank" href="https://ag-grid.com">
          ag-grid
        </Link>{' '}
        is a grid library for complex tables with Excel-like features.
      </p>

      <h3>Linting & naming</h3>
      <p>
        Airbnb provides a{' '}
        <Link target="_blank" href="https://github.com/airbnb/javascriptuseful">
          useful styling guide
        </Link>{' '}
        on how to style JavaScript and react code.
      </p>

      <h3>Charts</h3>
      <p>
        <Link
          target="_blank"
          href="https://formidable.com/open-source/victory/">
          Victory
        </Link>{' '}
        is a set of modular charting components for React.
      </p>

      <h3>Useful links</h3>
      <ul className="wfp--story__list">
        <li>
          <Link
            target="_blank"
            href="https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf">
            React/Redux Style Guide
          </Link>
        </li>
      </ul>
    </Page>
  ));
