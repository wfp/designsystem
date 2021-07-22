import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoBar from './InfoBar';
import Link from '../Link';
storiesOf('Components|InfoBar', module).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw'
    }
  }, story());
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(InfoBar, null, "InfoBar with content. ", /*#__PURE__*/React.createElement(Link, {
    href: "#"
  }, "Click here"), " to do something.");
});