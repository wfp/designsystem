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
var User = /*#__PURE__*/React__default['default'].forwardRef(function User(_ref, ref) {
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
    "fill-rule": "evenodd",
    d: "M6.12283813,9.45454904 C5.14721077,8.83339298 4.5,7.74227858 4.5,6.5 C4.5,4.56700338 6.06700338,3 8,3 C9.93299662,3 11.5,4.56700338 11.5,6.5 C11.5,7.74227858 10.8527892,8.83339298 9.87716187,9.45454904 C11.8354504,10.4256055 13.4484129,12.8785954 14.3134644,16.094617 C8.46130589,16.0681549 7.82496762,16.0681549 1.6936749,16.0681549 C2.56044327,12.865142 4.16992412,10.4229405 6.12283813,9.45454904 Z"
  })), children);
});
User.propTypes = iconPropTypes.iconPropTypes;

module.exports = User;
