/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';

storiesOf('Design|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Maps', () => (
    <Page title="Maps" subTitle="Frontend implementation of maps">
      <p>
        All WFP apps should use a custom made icon to be distinguishable. By
        using the branding colours the icon should be recognizable as an WFP
        app.
      </p>

      <h4>Mapbox.gl</h4>
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

      <h3>Mapbox GL</h3>

      <p>
        Mapbox is a mapping platform for custom designed maps. You can use the
        WFP basemap for the official UN country names and boundaries.
      </p>

      <p>
        <Link href="https://codesandbox.io/s/mapbox-un-base-map-from-archgis-q0v0o">
          Example implementation using react-map-gl
        </Link>
      </p>
    </Page>
  ));
