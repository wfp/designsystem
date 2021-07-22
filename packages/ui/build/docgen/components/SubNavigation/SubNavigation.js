"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNavigationItem = exports.SubNavigationGroup = exports.SubNavigationList = exports.SubNavigationContent = exports.SubNavigationFilter = exports.SubNavigationLink = exports.SubNavigationTitle = exports.SubNavigationHeader = exports.SubNavigation = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["children", "className"],
    _excluded4 = ["children", "className"],
    _excluded5 = ["children", "className"],
    _excluded6 = ["children", "className"],
    _excluded7 = ["children", "className"],
    _excluded8 = ["children", "className"],
    _excluded9 = ["children", "columns", "className", "title"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** The SubNavigation is a toogleable part of the MainNavigation */

var SubNavigation = function SubNavigation(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", other, children);
};

exports.SubNavigation = SubNavigation;
SubNavigation.propTypes = {
  children: _propTypes.default.node.isRequired
};

var SubNavigationItem = function SubNavigationItem(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, _excluded2);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__item"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationItem = SubNavigationItem;
SubNavigationItem.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

var SubNavigationHeader = function SubNavigationHeader(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      other = _objectWithoutProperties(_ref3, _excluded3);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__header"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationHeader = SubNavigationHeader;
SubNavigationHeader.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

var SubNavigationFilter = function SubNavigationFilter(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      other = _objectWithoutProperties(_ref4, _excluded4);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__filter"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationFilter = SubNavigationFilter;
SubNavigationFilter.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

var SubNavigationList = function SubNavigationList(_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      other = _objectWithoutProperties(_ref5, _excluded5);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__list"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationList = SubNavigationList;
SubNavigationList.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

var SubNavigationContent = function SubNavigationContent(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      other = _objectWithoutProperties(_ref6, _excluded6);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__content"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationContent = SubNavigationContent;
SubNavigationContent.propTypes = {
  /**
   * Provide the content of link
   */
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

var SubNavigationTitle = function SubNavigationTitle(_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      other = _objectWithoutProperties(_ref7, _excluded7);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__title"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationTitle = SubNavigationTitle;
SubNavigationTitle.propTypes = {
  /**
   * Provide the content of link
   */
  children: _propTypes.default.string,
  className: _propTypes.default.string
};

var SubNavigationLink = function SubNavigationLink(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      other = _objectWithoutProperties(_ref8, _excluded8);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__link"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
};

exports.SubNavigationLink = SubNavigationLink;
SubNavigationLink.propTypes = {
  /**
   * Provide the content of link
   */
  children: _propTypes.default.string,
  className: _propTypes.default.string
};

var SubNavigationGroup = function SubNavigationGroup(_ref9) {
  var children = _ref9.children,
      columns = _ref9.columns,
      className = _ref9.className,
      title = _ref9.title,
      other = _objectWithoutProperties(_ref9, _excluded9);

  var classes = (0, _classnames.default)("".concat(prefix, "--sub-navigation__group"), {
    className: className
  }, _defineProperty({}, "".concat(prefix, "--sub-navigation__group--columns"), columns));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), title && /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(prefix, "--sub-navigation__group__title")
  }, title), /*#__PURE__*/_react.default.createElement("div", null, children));
};

exports.SubNavigationGroup = SubNavigationGroup;
SubNavigationGroup.propTypes = {
  /**
   * Provide amount of columns shown
   */
  columns: _propTypes.default.number,

  /**
   * Provide a title for the grop
   */
  title: _propTypes.default.node,

  /**
   * Provide content to be rendered inside of a <Tag>
   */
  image: _propTypes.default.string
};