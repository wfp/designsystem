/**
 *
 * Code generated by @wfp/icon-build-helpers. DO NOT EDIT.
 * @wfp/icon-build-helpers is a fork of @carbon/icon-build-helpers
 */
'use strict';

var iconPropTypes = require('./iconPropTypes-dc77abf6.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _mask, _g, _mask2, _g2;

var _excluded = ["children", "size"];
var ShipPositive = /*#__PURE__*/React__default['default'].forwardRef(function ShipPositive(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  if (size === "glyph" || size === "glyph" || size === "glyphpx") {
    return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 39 39"
    }, rest), _mask || (_mask = /*#__PURE__*/React__default['default'].createElement("mask", {
      id: "a",
      width: "39",
      height: "39",
      x: "0",
      y: "0",
      maskUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React__default['default'].createElement("path", {
      "fill-rule": "evenodd",
      d: "M0.0600586 0.559021H38.441V39H0.0600586V0.559021Z",
      "clip-rule": "evenodd"
    }))), _g || (_g = /*#__PURE__*/React__default['default'].createElement("g", {
      mask: "url(#a)"
    }, /*#__PURE__*/React__default['default'].createElement("path", {
      d: "M36.839 30.991C35.779 30.991 35.337 31.232 34.668 31.597C33.854 32.041 32.841 32.593 30.964 32.593C29.087 32.593 28.073 32.041 27.259 31.597C26.591 31.232 26.149 30.991 25.088 30.991C24.028 30.991 23.587 31.232 22.92 31.597C22.105 32.041 21.093 32.593 19.217 32.593C17.34 32.593 16.327 32.041 15.513 31.597C14.845 31.232 14.403 30.991 13.343 30.991C12.284 30.991 11.843 31.232 11.175 31.597C10.36 32.041 9.348 32.593 7.472 32.593C5.596 32.593 4.583 32.04 3.769 31.597C3.101 31.232 2.66 30.991 1.601 30.991C0.718 30.991 0 30.274 0 29.39C0 28.505 0.718 27.788 1.601 27.788C3.477 27.788 4.49 28.341 5.304 28.785C5.972 29.149 6.413 29.39 7.472 29.39C8.531 29.39 8.973 29.149 9.63999 28.785C10.454 28.341 11.467 27.788 13.343 27.788C15.22 27.788 16.233 28.34 17.047 28.785C17.715 29.149 18.156 29.39 19.217 29.39C20.276 29.39 20.717 29.149 21.385 28.785C22.198 28.341 23.212 27.788 25.088 27.788C26.966 27.788 27.978 28.34 28.793 28.785C29.462 29.149 29.903 29.39 30.964 29.39C32.024 29.39 32.466 29.149 33.135 28.785C33.949 28.34 34.962 27.788 36.839 27.788C37.723 27.788 38.441 28.505 38.441 29.39C38.441 30.274 37.723 30.991 36.839 30.991ZM36.839 37.399C35.779 37.399 35.337 37.639 34.668 38.003C33.854 38.448 32.841 39 30.964 39C29.087 39 28.073 38.448 27.259 38.003C26.591 37.639 26.149 37.399 25.088 37.399C24.028 37.399 23.587 37.639 22.92 38.003C22.105 38.448 21.093 39 19.217 39C17.34 39 16.327 38.448 15.513 38.003C14.845 37.639 14.403 37.399 13.343 37.399C12.284 37.399 11.843 37.639 11.175 38.003C10.36 38.448 9.348 39 7.472 39C5.596 39 4.583 38.447 3.769 38.003C3.101 37.639 2.66 37.399 1.601 37.399C0.718 37.399 0 36.681 0 35.796C0 34.912 0.718 34.195 1.601 34.195C3.477 34.195 4.49 34.748 5.304 35.191C5.972 35.556 6.413 35.796 7.472 35.796C8.531 35.796 8.973 35.556 9.63999 35.191C10.454 34.748 11.467 34.195 13.343 34.195C15.22 34.195 16.233 34.747 17.047 35.191C17.715 35.556 18.156 35.796 19.217 35.796C20.276 35.796 20.717 35.556 21.385 35.191C22.198 34.748 23.212 34.195 25.088 34.195C26.966 34.195 27.978 34.747 28.793 35.191C29.462 35.556 29.903 35.796 30.964 35.796C32.024 35.796 32.466 35.556 33.135 35.191C33.949 34.747 34.962 34.195 36.839 34.195C37.723 34.195 38.441 34.912 38.441 35.796C38.441 36.681 37.723 37.399 36.839 37.399ZM4.013 15.775H32.827C33.771 15.775 34.533 16.584 34.429 17.513C34.076 20.797 32.747 23.784 30.737 26.179C29.84 26.147 29.415 25.922 28.791 25.578C27.981 25.137 26.965 24.585 25.091 24.585C23.209 24.585 22.199 25.137 21.383 25.578C20.718 25.946 20.277 26.187 19.221 26.187C18.155 26.187 17.715 25.946 17.05 25.578C16.233 25.137 15.216 24.585 13.342 24.585C11.469 24.585 10.451 25.137 9.64199 25.578C8.97 25.946 8.529 26.187 7.472 26.187C6.72 26.187 6.279 26.066 5.847 25.858C3.98 23.52 2.747 20.652 2.411 17.513C2.307 16.584 3.067 15.775 4.013 15.775ZM6.407 10.17C6.407 9.72702 6.765 9.36902 7.208 9.36902H29.632C30.074 9.36902 30.432 9.72702 30.432 10.17V12.572C30.432 13.014 30.074 13.373 29.632 13.373H7.208C6.765 13.373 6.407 13.014 6.407 12.572V10.17ZM11.212 1.36002C11.212 0.92002 11.572 0.559021 12.013 0.559021H16.818C17.259 0.559021 17.619 0.92002 17.619 1.36002V6.16502C17.619 6.60602 17.259 6.96602 16.818 6.96602H12.013C11.572 6.96602 11.212 6.60602 11.212 6.16502V1.36002ZM19.221 1.36002C19.221 0.92002 19.581 0.559021 20.021 0.559021H24.826C25.267 0.559021 25.627 0.92002 25.627 1.36002V6.16502C25.627 6.60602 25.267 6.96602 24.826 6.96602H20.021C19.581 6.96602 19.221 6.60602 19.221 6.16502V1.36002Z",
      "clip-rule": "evenodd"
    }))), children);
  }

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 39 39"
  }, rest), _mask2 || (_mask2 = /*#__PURE__*/React__default['default'].createElement("mask", {
    id: "a",
    width: "39",
    height: "39",
    x: "0",
    y: "0",
    maskUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    "fill-rule": "evenodd",
    d: "M0.0600586 0.559021H38.441V39H0.0600586V0.559021Z",
    "clip-rule": "evenodd"
  }))), _g2 || (_g2 = /*#__PURE__*/React__default['default'].createElement("g", {
    mask: "url(#a)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M36.839 30.991C35.779 30.991 35.337 31.232 34.668 31.597C33.854 32.041 32.841 32.593 30.964 32.593C29.087 32.593 28.073 32.041 27.259 31.597C26.591 31.232 26.149 30.991 25.088 30.991C24.028 30.991 23.587 31.232 22.92 31.597C22.105 32.041 21.093 32.593 19.217 32.593C17.34 32.593 16.327 32.041 15.513 31.597C14.845 31.232 14.403 30.991 13.343 30.991C12.284 30.991 11.843 31.232 11.175 31.597C10.36 32.041 9.348 32.593 7.472 32.593C5.596 32.593 4.583 32.04 3.769 31.597C3.101 31.232 2.66 30.991 1.601 30.991C0.718 30.991 0 30.274 0 29.39C0 28.505 0.718 27.788 1.601 27.788C3.477 27.788 4.49 28.341 5.304 28.785C5.972 29.149 6.413 29.39 7.472 29.39C8.531 29.39 8.973 29.149 9.63999 28.785C10.454 28.341 11.467 27.788 13.343 27.788C15.22 27.788 16.233 28.34 17.047 28.785C17.715 29.149 18.156 29.39 19.217 29.39C20.276 29.39 20.717 29.149 21.385 28.785C22.198 28.341 23.212 27.788 25.088 27.788C26.966 27.788 27.978 28.34 28.793 28.785C29.462 29.149 29.903 29.39 30.964 29.39C32.024 29.39 32.466 29.149 33.135 28.785C33.949 28.34 34.962 27.788 36.839 27.788C37.723 27.788 38.441 28.505 38.441 29.39C38.441 30.274 37.723 30.991 36.839 30.991ZM36.839 37.399C35.779 37.399 35.337 37.639 34.668 38.003C33.854 38.448 32.841 39 30.964 39C29.087 39 28.073 38.448 27.259 38.003C26.591 37.639 26.149 37.399 25.088 37.399C24.028 37.399 23.587 37.639 22.92 38.003C22.105 38.448 21.093 39 19.217 39C17.34 39 16.327 38.448 15.513 38.003C14.845 37.639 14.403 37.399 13.343 37.399C12.284 37.399 11.843 37.639 11.175 38.003C10.36 38.448 9.348 39 7.472 39C5.596 39 4.583 38.447 3.769 38.003C3.101 37.639 2.66 37.399 1.601 37.399C0.718 37.399 0 36.681 0 35.796C0 34.912 0.718 34.195 1.601 34.195C3.477 34.195 4.49 34.748 5.304 35.191C5.972 35.556 6.413 35.796 7.472 35.796C8.531 35.796 8.973 35.556 9.63999 35.191C10.454 34.748 11.467 34.195 13.343 34.195C15.22 34.195 16.233 34.747 17.047 35.191C17.715 35.556 18.156 35.796 19.217 35.796C20.276 35.796 20.717 35.556 21.385 35.191C22.198 34.748 23.212 34.195 25.088 34.195C26.966 34.195 27.978 34.747 28.793 35.191C29.462 35.556 29.903 35.796 30.964 35.796C32.024 35.796 32.466 35.556 33.135 35.191C33.949 34.747 34.962 34.195 36.839 34.195C37.723 34.195 38.441 34.912 38.441 35.796C38.441 36.681 37.723 37.399 36.839 37.399ZM4.013 15.775H32.827C33.771 15.775 34.533 16.584 34.429 17.513C34.076 20.797 32.747 23.784 30.737 26.179C29.84 26.147 29.415 25.922 28.791 25.578C27.981 25.137 26.965 24.585 25.091 24.585C23.209 24.585 22.199 25.137 21.383 25.578C20.718 25.946 20.277 26.187 19.221 26.187C18.155 26.187 17.715 25.946 17.05 25.578C16.233 25.137 15.216 24.585 13.342 24.585C11.469 24.585 10.451 25.137 9.64199 25.578C8.97 25.946 8.529 26.187 7.472 26.187C6.72 26.187 6.279 26.066 5.847 25.858C3.98 23.52 2.747 20.652 2.411 17.513C2.307 16.584 3.067 15.775 4.013 15.775ZM6.407 10.17C6.407 9.72702 6.765 9.36902 7.208 9.36902H29.632C30.074 9.36902 30.432 9.72702 30.432 10.17V12.572C30.432 13.014 30.074 13.373 29.632 13.373H7.208C6.765 13.373 6.407 13.014 6.407 12.572V10.17ZM11.212 1.36002C11.212 0.92002 11.572 0.559021 12.013 0.559021H16.818C17.259 0.559021 17.619 0.92002 17.619 1.36002V6.16502C17.619 6.60602 17.259 6.96602 16.818 6.96602H12.013C11.572 6.96602 11.212 6.60602 11.212 6.16502V1.36002ZM19.221 1.36002C19.221 0.92002 19.581 0.559021 20.021 0.559021H24.826C25.267 0.559021 25.627 0.92002 25.627 1.36002V6.16502C25.627 6.60602 25.267 6.96602 24.826 6.96602H20.021C19.581 6.96602 19.221 6.60602 19.221 6.16502V1.36002Z",
    "clip-rule": "evenodd"
  }))), children);
});
ShipPositive.propTypes = iconPropTypes.iconPropTypes;

module.exports = ShipPositive;
