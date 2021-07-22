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

var _path, _path2;

var _excluded = ["children", "size"];
var Help = /*#__PURE__*/React__default['default'].forwardRef(function Help(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12,2 C17.5,2 22,6.5 22,12 C22,17.5 17.5,22 12,22 C6.5,22 2,17.5 2,12 C2,6.5 6.5,2 12,2 L12,2 Z M12,0 C5.4,0 0,5.4 0,12 C0,18.6 5.4,24 12,24 C18.6,24 24,18.6 24,12 C24,5.4 18.6,0 12,0 L12,0 L12,0 Z"
  })), _path2 || (_path2 = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.3,10 C8.5,8 9.8,6.5 12,6.5 C14.8,6.5 15.7,8.3 15.7,9.4 C15.7,12.3 13.2,11.9 13,13.7 L13,15 L11,15 L11,14 C11.2,11.4 13.4,11.2 13.3,9.6 C13.3,8.7 12.8,8.3 12,8.3 C11,8.3 10.5,9.1 10.5,10 C10.5,10 8.4,10 8.3,10 L8.3,10 Z M11,16 L13,16 L13,18 L11,18 L11,16 L11,16 Z"
  })), children);
});
Help.propTypes = iconPropTypes.iconPropTypes;

module.exports = Help;
