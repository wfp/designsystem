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
var Csv = /*#__PURE__*/React__default['default'].forwardRef(function Csv(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 16",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4L8 0zm2.58 4l-2.54-.01-.03-2.56L10.58 4zM11 15H1v-1.69h10V15zm0-2.69H1V7.53h10v4.78zm0-5.78H1V1h6.01l.03 3a1 1 0 0 0 1 .99L11 5v1.53z"
  })), _path2 || (_path2 = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.4 11.5c.32 0 .61-.06.87-.17v-.7c-.13.05-.26.1-.38.14-.13.04-.26.06-.39.06-.45 0-.67-.29-.67-.89 0-.28.05-.51.17-.67.1-.17.25-.25.45-.25.13 0 .25.02.37.05s.23.08.34.13l.25-.65c-.31-.13-.62-.21-.95-.21-.3 0-.57.06-.79.19s-.4.31-.52.56c-.12.24-.18.52-.18.84 0 .51.12.9.37 1.17.24.26.6.4 1.06.4zM5.8 11.5c.25 0 .46-.04.64-.12s.32-.2.42-.34.14-.32.14-.52c0-.21-.05-.38-.15-.52s-.29-.26-.55-.37c-.28-.13-.45-.22-.51-.26a.223.223 0 0 1-.09-.17c0-.06.02-.1.07-.14.05-.03.13-.05.23-.05.21 0 .46.07.74.2L7 8.56c-.33-.14-.65-.22-.97-.22-.36 0-.64.08-.85.24-.2.16-.31.38-.31.66 0 .15.02.28.07.39.05.11.12.21.22.29.1.09.25.17.45.26.22.1.36.17.41.2.05.03.09.06.11.1.02.03.03.07.03.11 0 .07-.03.12-.09.17a.49.49 0 0 1-.27.06c-.14 0-.3-.02-.47-.07-.17-.04-.33-.11-.49-.19v.74c.15.07.29.12.43.15s.32.05.53.05zM9.25 11.46l1.01-3.07h-.94L8.9 9.95c-.02.08-.05.2-.08.35-.03.15-.05.27-.06.37-.01-.14-.06-.38-.14-.72L8.2 8.39h-.93l1 3.07h.98z"
  })), children);
});
Csv.propTypes = iconPropTypes.iconPropTypes;

module.exports = Csv;
