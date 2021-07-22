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
var StarOutline = /*#__PURE__*/React__default['default'].forwardRef(function StarOutline(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 15",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3,15l1-5.2l-4-4L5.5,5L8,0l2.5,5L16,5.7l-4,4l1,5.2l-5-2.5L3,15z M8,11.4l3.6,1.8l-0.7-3.8l2.9-3l-4-0.5L8,2.2L6.2,5.9 l-4,0.5l2.9,2.9l-0.7,3.8L8,11.4z"
  })), children);
});
StarOutline.propTypes = iconPropTypes.iconPropTypes;

module.exports = StarOutline;
