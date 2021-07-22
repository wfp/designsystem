"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = _settings.default.prefix;
/** The InfoBar shows very important information on top of the page. */

var InfoBar = function InfoBar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      pageWidth = _ref.pageWidth;
  var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--info-bar"), className);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    pageWidth: pageWidth
  }, children));
};

InfoBar.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: _propTypes.default.string,

  /**
   * Additional `id` provided to the wrapping element
   */
  id: _propTypes.default.string,

  /**
   *  `pageWidth` for the `<Wrapper />` component
   */
  pageWidth: _propTypes.default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Additional `className` for the `<Wrapper />` component
   */
  wrapperClassName: _propTypes.default.string
};
InfoBar.defaultProps = {
  pageWidth: 'lg'
};
var _default = InfoBar;
exports.default = _default;