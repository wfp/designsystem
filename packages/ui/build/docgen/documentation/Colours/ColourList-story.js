"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ColourDocs = _interopRequireDefault(require("./ColourDocs"));

require("./colours.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Core', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Colours', function () {
  return /*#__PURE__*/_react.default.createElement(_ColourDocs.default, null);
});