"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.textLookup = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _settings.default.prefix;
var textLookup = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h1',
  subtitle: 'h3',
  p: 'p',
  caption: 'div'
};
/**
 *Text is a component for displaying paragraphs. You can use Text to standardize text across your web app. For longer sections or full articles use the <Story /> component instead.
 */

exports.textLookup = textLookup;

var Text = function Text(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      kind = _ref.kind,
      spacingTop = _ref.spacingTop,
      spacingBottom = _ref.spacingBottom;
  var tagName = {
    name: textLookup[kind] ? textLookup[kind] : 'div'
  };
  var classNames = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--text"), true), _defineProperty(_classnames, "".concat(prefix, "--text__").concat(kind), kind), _defineProperty(_classnames, "".concat(prefix, "--text__spacing-top-").concat(spacingTop), spacingTop), _defineProperty(_classnames, "".concat(prefix, "--text__spacing-bottom-").concat(spacingBottom), spacingBottom), _defineProperty(_classnames, "".concat(className), className), _classnames));
  return /*#__PURE__*/_react.default.createElement(tagName.name, {
    className: classNames
  }, children);
};

Text.propTypes = {
  /**
    The Text content
  */
  children: _propTypes.default.node,

  /**
    Additional className for Story
  */
  className: _propTypes.default.string,

  /**
    Additional className for Story
  */
  kind: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title', 'subtitle', 'p', 'i', 'bold', 'strong', 'sup', 'a', 'code', 'inline-highlight', 'caption']),

  /**
    Override spacing on top
  */
  spacingTop: _propTypes.default.oneOf(['3xs', '2xs', 'xs', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),

  /**
  Override spacing on bottom
  */
  spacingBottom: _propTypes.default.oneOf(['3xs', '2xs', 'xs', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'])
};
var _default = Text;
exports.default = _default;