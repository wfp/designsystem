"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _settings.default.prefix;
/** The Story component adds a default style, formatting and spacing for a longer text with main focus on readability. */

var Story = function Story(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      spacing = _ref.spacing;
  var classNames = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--story"), true), _defineProperty(_classnames, "".concat(className), className), _classnames));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames,
    spacing: spacing
  }, children);
};

Story.propTypes = {
  /**
    The Story content
  */
  children: _propTypes.default.node,

  /**
    Additional className for Story
  */
  className: _propTypes.default.string
};
var _default = Story;
exports.default = _default;