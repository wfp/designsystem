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
var AddOutline = /*#__PURE__*/React__default['default'].forwardRef(function AddOutline(_ref, ref) {
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
    d: "M8,14.5c3.6,0,6.5-2.9,6.5-6.5S11.6,1.5,8,1.5S1.5,4.4,1.5,8S4.4,14.5,8,14.5z M8,16c-4.4,0-8-3.6-8-8s3.6-8,8-8 s8,3.6,8,8S12.4,16,8,16z"
  })), _path2 || (_path2 = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7,7V4h2v3h3v2H9v3H7V9H4V7H7z"
  })), children);
});
AddOutline.propTypes = iconPropTypes.iconPropTypes;

module.exports = AddOutline;
