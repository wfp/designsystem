/**
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @un/icon-build-helpers. DO NOT EDIT.
 * @un/icon-build-helpers is a fork of @carbon/icon-build-helpers
 */
'use strict';

var Icon = require('../Icon-17378097.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _mask, _g, _path;

var _excluded = ["children"];
var EmailContactNegative = /*#__PURE__*/React__default['default'].forwardRef(function EmailContactNegative(_ref, ref) {
  var children = _ref.children,
      rest = Icon._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(Icon.Icon, Icon._extends({
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _mask || (_mask = /*#__PURE__*/React__default['default'].createElement("mask", {
    id: "a",
    width: "56",
    height: "56",
    x: "0",
    y: "0",
    maskUnits: "userSpaceOnUse"
  })), _g || (_g = /*#__PURE__*/React__default['default'].createElement("g", {
    mask: "url(#a)"
  })), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M38.3482 30.3746C37.687 29.8067 36.6957 29.8863 36.1289 30.5475 35.563 31.2087 35.6416 32.199 36.3028 32.7659L41.8094 37.4866C42.1091 37.7381 42.4706 37.8648 42.8322 37.8648 43.2733 37.8648 43.7144 37.6752 44.0288 37.3137 44.5947 36.6525 44.5161 35.6612 43.8549 35.0953L38.3482 30.3746zM41.8958 19.2876L27.8831 29.6181 13.8703 19.2876C13.1698 18.7767 12.1864 18.9182 11.6667 19.6187 11.1479 20.3192 11.2982 21.3095 11.9968 21.8213L26.9468 32.8366C27.2297 33.041 27.553 33.1432 27.8831 33.1432 28.2132 33.1432 28.5354 33.041 28.8194 32.8366L43.7684 21.8213C44.4689 21.3095 44.6192 20.3192 44.0985 19.6187 43.5798 18.9182 42.5963 18.7767 41.8958 19.2876zM17.4189 30.3746L11.9113 35.0953C11.2501 35.6612 11.1715 36.6525 11.7384 37.3137 12.0528 37.6752 12.4929 37.8648 12.934 37.8648 13.2966 37.8648 13.6581 37.7381 13.9568 37.4866L19.4644 32.7659C20.1256 32.199 20.2042 31.2087 19.6373 30.5475 19.0714 29.8863 18.0801 29.8067 17.4189 30.3746z",
    clipRule: "evenodd"
  })), children);
});

module.exports = EmailContactNegative;