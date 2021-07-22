/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Maps', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Maps",
    subTitle: "Frontend implementation of maps"
  }, /*#__PURE__*/React.createElement("h3", null, "Official UN boundaries"), /*#__PURE__*/React.createElement("p", null, "Make sure your map follows these rules:"), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "use the official UN boundaries"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "use official UN country names"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "use the default base map")), /*#__PURE__*/React.createElement("h3", null, "GeoCore API"), /*#__PURE__*/React.createElement("p", null, "The", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://catalog.efs.wfp.org/store/apis/info"
  }, "GeoCore"), ' ', "endpoints in the WFP API Store are providing different data sources for geocoding."), /*#__PURE__*/React.createElement("h3", null, "Recommended tools"), /*#__PURE__*/React.createElement("h4", null, "Mapbox.gl"), /*#__PURE__*/React.createElement("p", null, "Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://github.com/uber/react-map-gl",
    target: "_blank"
  }, "react-map-gl"), ' ', "is a react friendly wrapper around Mapbox GL JS."), /*#__PURE__*/React.createElement("iframe", {
    src: "https://codesandbox.io/embed/mapbox-un-base-map-from-archgis-custom-q3g4k?fontsize=14&hidenavigation=1&view=preview",
    title: "@esri/react-arcgis example",
    allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
    style: {
      width: '100%',
      height: '500px',
      border: '0',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  }), /*#__PURE__*/React.createElement("h4", null, "ArcGIS API for JavaScript"), /*#__PURE__*/React.createElement("p", null, "The ArcGIS API for JavaScript is another way to embed maps in web applications. It is especially useful for more complex maps where the app needs to access ArchGIS functions, like editing the map."), /*#__PURE__*/React.createElement("iframe", {
    src: "https://codesandbox.io/embed/esrireact-arcgis-example-8ytym?fontsize=14&hidenavigation=1&view=preview",
    title: "@esri/react-arcgis example",
    allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
    style: {
      width: '100%',
      height: '500px',
      border: '0',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  }));
});