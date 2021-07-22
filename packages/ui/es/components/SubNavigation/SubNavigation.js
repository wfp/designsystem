var _excluded = ["children"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["children", "className"],
    _excluded4 = ["children", "className"],
    _excluded5 = ["children", "className"],
    _excluded6 = ["children", "className"],
    _excluded7 = ["children", "className"],
    _excluded8 = ["children", "className"],
    _excluded9 = ["children", "columns", "className", "title"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** The SubNavigation is a toogleable part of the MainNavigation */

var SubNavigation = function SubNavigation(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", other, children);
};

SubNavigation.propTypes = {
  children: PropTypes.node.isRequired
};

var SubNavigationItem = function SubNavigationItem(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, _excluded2);

  var classes = classNames("".concat(prefix, "--sub-navigation__item"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var SubNavigationHeader = function SubNavigationHeader(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      other = _objectWithoutProperties(_ref3, _excluded3);

  var classes = classNames("".concat(prefix, "--sub-navigation__header"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var SubNavigationFilter = function SubNavigationFilter(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      other = _objectWithoutProperties(_ref4, _excluded4);

  var classes = classNames("".concat(prefix, "--sub-navigation__filter"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationFilter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var SubNavigationList = function SubNavigationList(_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      other = _objectWithoutProperties(_ref5, _excluded5);

  var classes = classNames("".concat(prefix, "--sub-navigation__list"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var SubNavigationContent = function SubNavigationContent(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      other = _objectWithoutProperties(_ref6, _excluded6);

  var classes = classNames("".concat(prefix, "--sub-navigation__content"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationContent.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes.node,
  className: PropTypes.string
};

var SubNavigationTitle = function SubNavigationTitle(_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      other = _objectWithoutProperties(_ref7, _excluded7);

  var classes = classNames("".concat(prefix, "--sub-navigation__title"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationTitle.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes.string,
  className: PropTypes.string
};

var SubNavigationLink = function SubNavigationLink(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      other = _objectWithoutProperties(_ref8, _excluded8);

  var classes = classNames("".concat(prefix, "--sub-navigation__link"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationLink.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes.string,
  className: PropTypes.string
};

var SubNavigationGroup = function SubNavigationGroup(_ref9) {
  var children = _ref9.children,
      columns = _ref9.columns,
      className = _ref9.className,
      title = _ref9.title,
      other = _objectWithoutProperties(_ref9, _excluded9);

  var classes = classNames("".concat(prefix, "--sub-navigation__group"), {
    className: className
  }, _defineProperty({}, "".concat(prefix, "--sub-navigation__group--columns"), columns));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, other), title && /*#__PURE__*/React.createElement("h3", {
    className: "".concat(prefix, "--sub-navigation__group__title")
  }, title), /*#__PURE__*/React.createElement("div", null, children));
};

SubNavigationGroup.propTypes = {
  /**
   * Provide amount of columns shown
   */
  columns: PropTypes.number,

  /**
   * Provide a title for the grop
   */
  title: PropTypes.node,

  /**
   * Provide content to be rendered inside of a <Tag>
   */
  image: PropTypes.string
};
export { SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationLink, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem };