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

var _g;

var _excluded = ["children", "size"];
var List = /*#__PURE__*/React__default['default'].forwardRef(function List(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 10",
    fill: "currentColor"
  }, rest), _g || (_g = /*#__PURE__*/React__default['default'].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 9L6 8 16 8 16 9zM6 2L6 1 16 1 16 2z"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "1.5",
    cy: "1.5",
    r: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "1.5",
    cy: "8.5",
    r: "1.5"
  }))), children);
});
List.propTypes = iconPropTypes.iconPropTypes;

module.exports = List;
