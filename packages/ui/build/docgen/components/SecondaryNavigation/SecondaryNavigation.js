"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryNavigation = exports.SecondaryNavigationTitle = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = _settings.default.prefix;

var SecondaryNavigationTitle = function SecondaryNavigationTitle(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--secondary-navigation__title"), className);
  return /*#__PURE__*/_react.default.createElement("h1", {
    className: wrapperClasses
  }, children);
};

exports.SecondaryNavigationTitle = SecondaryNavigationTitle;
SecondaryNavigationTitle.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: _propTypes.default.string,

  /**
   * The content of the SecondaryNavigation can be fully customized.
   */
  children: _propTypes.default.node.isRequired
};
/** The SecondaryNavigation shows the page title and and optional tab navigation. */

var SecondaryNavigation = function SecondaryNavigation(_ref2) {
  var additional = _ref2.additional,
      children = _ref2.children,
      className = _ref2.className,
      id = _ref2.id,
      pageWidth = _ref2.pageWidth;
  var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--secondary-navigation"), className);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    pageWidth: pageWidth,
    className: "".concat(prefix, "--secondary-navigation__wrapper")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--secondary-navigation__list")
  }, children), additional && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--secondary-navigation__additional")
  }, additional)));
};

exports.SecondaryNavigation = SecondaryNavigation;
SecondaryNavigation.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  className: _propTypes.default.string,
  id: _propTypes.default.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: _propTypes.default.oneOf(['sm', 'md', 'lg', 'full']),
  wrapperClassName: _propTypes.default.string
};
SecondaryNavigation.defaultProps = {
  pageWidth: 'lg'
};