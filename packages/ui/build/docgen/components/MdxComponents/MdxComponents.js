"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MdxComponents = void 0;

var _Story = _interopRequireDefault(require("../Story"));

var _react = _interopRequireDefault(require("react"));

var _List = require("../List");

var _Blockquote = _interopRequireDefault(require("../Blockquote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */
var wrapper = function wrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_Story.default, props);
};

var li = function li(props) {
  var kind = typeof props.children === 'string' ? props.children.substring(0, 1) : '';
  if (kind === '✓' || kind === '✗') return /*#__PURE__*/_react.default.createElement(_List.ListItem, _extends({
    kind: kind === '✓' ? 'checkmark' : 'cross'
  }, props), props.children.substring(1, props.children.length));
  return /*#__PURE__*/_react.default.createElement("li", props, props.children);
};

var ul = function ul(props) {
  return /*#__PURE__*/_react.default.createElement(_List.List, _extends({}, props, {
    kind: "bullets"
  }), props.children);
};

var ol = function ol(props) {
  return /*#__PURE__*/_react.default.createElement(_List.List, _extends({}, props, {
    kind: "ordered"
  }), props.children);
};

var blockquote = function blockquote(props) {
  if (Array.isArray(props.children) && props.children.length >= 2 && props.children[0].props) return /*#__PURE__*/_react.default.createElement(_Blockquote.default, _extends({}, props, {
    title: props.children[0].props.children
  }), props.children.map(function (e, i) {
    if (i > 0) return e;
  }));
  return /*#__PURE__*/_react.default.createElement(_Blockquote.default, props, props.children);
};
/*const code = ({ children, className, ...other }) => {
    const language = className && className.split('-');
    return (
      <PureSource
        format={false}
        dark
        language={(language && language[1]) || 'plaintext'}
        code={children as string}
        {...other}
      />
    );
  };
  */


var MdxComponents = {
  wrapper: wrapper,
  li: li,
  ul: ul,
  ol: ol,
  blockquote: blockquote
};
exports.MdxComponents = MdxComponents;
var _default = MdxComponents;
exports.default = _default;