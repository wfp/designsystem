/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';

storiesOf('Design|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Maps', () => (
    <Page title="Maps" subTitle="Frontend implementation of maps">
      {/*<p>When designing an map</p>*/}

      <h3>Official UN boundaries</h3>
      <p>Make sure your map follows these rules:</p>
      <List kind="bullet">
        <ListItem kind="checkmark">use the official UN boundaries</ListItem>
        <ListItem kind="checkmark">use official UN country names</ListItem>
        <ListItem kind="checkmark">use the default base map</ListItem>
      </List>

      <h3>GeoCore API</h3>

      <p>
        The{' '}
        <Link href="https://catalog.efs.wfp.org/store/apis/info">GeoCore</Link>{' '}
        endpoints in the WFP API Store are providing different data sources for
        geocoding.
      </p>

      <h3>Recommended tools</h3>

      <h4>Mapbox.gl</h4>
      <p>
        Mapbox GL JS is a JavaScript library that uses WebGL to render
        interactive maps from vector tiles and Mapbox styles.{' '}
        <Link href="https://github.com/uber/react-map-gl" target="_blank">
          react-map-gl
        </Link>{' '}
        is a react friendly wrapper around Mapbox GL JS.
      </p>
      <iframe
        src="https://codesandbox.io/embed/mapbox-un-base-map-from-archgis-custom-q3g4k?fontsize=14&hidenavigation=1&view=preview"
        title="@esri/react-arcgis example"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h4>ArcGIS API for JavaScript</h4>

      <p>
        The ArcGIS API for JavaScript is another way to embed maps in web
        applications. It is especially useful for more complex maps where the
        app needs to access ArchGIS functions, like editing the map.
      </p>

      <iframe
        src="https://codesandbox.io/embed/esrireact-arcgis-example-8ytym?fontsize=14&hidenavigation=1&view=preview"
        title="@esri/react-arcgis example"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Page>
  ));
