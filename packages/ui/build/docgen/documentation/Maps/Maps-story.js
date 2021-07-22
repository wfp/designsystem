"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("../Page"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _List = require("../../components/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Maps', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Maps",
    subTitle: "Frontend implementation of maps"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Official UN boundaries"), /*#__PURE__*/_react.default.createElement("p", null, "Make sure your map follows these rules:"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "use the official UN boundaries"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "use official UN country names"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    kind: "checkmark"
  }, "use the default base map")), /*#__PURE__*/_react.default.createElement("h3", null, "GeoCore API"), /*#__PURE__*/_react.default.createElement("p", null, "The", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://catalog.efs.wfp.org/store/apis/info"
  }, "GeoCore"), ' ', "endpoints in the WFP API Store are providing different data sources for geocoding."), /*#__PURE__*/_react.default.createElement("h3", null, "Recommended tools"), /*#__PURE__*/_react.default.createElement("h4", null, "Mapbox.gl"), /*#__PURE__*/_react.default.createElement("p", null, "Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://github.com/uber/react-map-gl",
    target: "_blank"
  }, "react-map-gl"), ' ', "is a react friendly wrapper around Mapbox GL JS."), /*#__PURE__*/_react.default.createElement("iframe", {
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
  }), /*#__PURE__*/_react.default.createElement("h4", null, "ArcGIS API for JavaScript"), /*#__PURE__*/_react.default.createElement("p", null, "The ArcGIS API for JavaScript is another way to embed maps in web applications. It is especially useful for more complex maps where the app needs to access ArchGIS functions, like editing the map."), /*#__PURE__*/_react.default.createElement("iframe", {
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