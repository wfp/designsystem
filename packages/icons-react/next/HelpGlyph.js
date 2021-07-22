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
var HelpGlyph = /*#__PURE__*/React__default['default'].forwardRef(function HelpGlyph(_ref, ref) {
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
    d: "M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 L8,0 Z M8.9,13 L7,13 L7,11.2 L8.9,11.2 L8.9,13 L8.9,13 Z M8.8,9.4 L8.8,9.9 L7.1,9.9 L7.1,9.3 C7.3,7.2 9.1,7.4 9,6.1 C9.1,5.4 8.7,5 8,5 C7.2,5 6.8,5.7 6.8,6.6 L5,6.6 C5,4.9 6.2,3.6 7.9,3.6 C10.2,3.6 10.9,5 10.9,5.9 C11,8.2 9,7.9 8.8,9.4 L8.8,9.4 Z"
  })), children);
});
HelpGlyph.propTypes = iconPropTypes.iconPropTypes;

module.exports = HelpGlyph;
