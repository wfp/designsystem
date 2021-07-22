"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Wrapper = _interopRequireDefault(require("../components/Wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleComponent = function SingleComponent(_ref) {
  var children = _ref.children,
      html = _ref.html,
      pageWidth = _ref.pageWidth;
  return /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%'
    },
    className: "wfp--story",
    pageWidth: pageWidth ? pageWidth : 'narrower'
  }, /*#__PURE__*/_react.default.createElement("div", {
    contentEditable: "true",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'none'
    }
  }, children));
};

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = SingleComponent;
exports.default = _default;