"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Wrapper = _interopRequireDefault(require("../components/Wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var children = _ref.children,
      pageWidth = _ref.pageWidth,
      subTitle = _ref.subTitle,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    style: {
      margin: '4rem auto'
    },
    className: "wfp--story",
    pageWidth: pageWidth ? pageWidth : 'sm'
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "wfp--story__subtitle"
  }, subTitle), /*#__PURE__*/_react.default.createElement("h1", {
    className: "wfp--story__title"
  }, title), children);
};

Page.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Page;
exports.default = _default;