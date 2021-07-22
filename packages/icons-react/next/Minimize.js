/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
'use strict';

var iconPropTypes = require('./iconPropTypes-ca0c5320.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _path;

var _excluded = ["children", "size"];
var Minimize = /*#__PURE__*/React__default['default'].forwardRef(function Minimize(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "none",
    d: "M4.99841805 11.7086887L.703553565 16.0035532-.00355340985 15.2964462 4.26981567 11.0230772 1.99492245 10.9999742 2.00507755 10.0000258 5.99726668 10.0405689 5.99999988 13.9996548 5.00000012 14.0003452 4.99841805 11.7086887zM11.7067904 5.00034168L13.9999999 5.00034168 13.9999999 6.00034168 10.0027332 6.00034168 10 2.00068336 10.9999998 2 11.0015656 4.291353 15.292982.0000638046934 16.0000888.707170586 11.7067904 5.00034168z"
  })), children);
});
Minimize.propTypes = iconPropTypes.iconPropTypes;

module.exports = Minimize;
