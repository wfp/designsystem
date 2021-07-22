var _excluded = ["image", "title", "content", "subContent", "additionalInfo", "noImage", "hintInfo"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { iconUser } from '@wfp/icons';
import Icon from '../../components/Icon';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

function SidebarItem(_ref) {
  var image = _ref.image,
      title = _ref.title,
      content = _ref.content,
      subContent = _ref.subContent,
      additionalInfo = _ref.additionalInfo,
      noImage = _ref.noImage,
      hintInfo = _ref.hintInfo,
      other = _objectWithoutProperties(_ref, _excluded);

  var profile_image;

  if (image) {
    profile_image = /*#__PURE__*/React.createElement("img", {
      alt: "img",
      src: image
    });
  } else {
    profile_image = /*#__PURE__*/React.createElement(Icon, _extends({
      icon: iconUser,
      fill: "#ffffff",
      width: "14",
      height: "14",
      className: "".concat(prefix, "--profile-image--empty")
    }, other));
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "".concat(prefix, "--sidebar-item-wrapper")
  }, other), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--sidebar-item__content")
  }, !noImage ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--profile-image")
  }, profile_image) : '', /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--sidebar-content-wrapper")
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--item-title")
  }, title), content && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--item-content")
  }, content), subContent && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--item-subcontent")
  }, subContent))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--sidebar-right-content-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--sidebar-info-wrapper")
  }, /*#__PURE__*/React.createElement("span", null, "additional")), /*#__PURE__*/React.createElement("div", null, hintInfo)));
} // wfp--sidebar-item__content


SidebarItem.propTypes = {
  /**
   The image will be placed in place of the avatar
  */
  image: PropTypes.string,

  /**
   title is the string given to the first text, usually name
  */
  title: PropTypes.string,

  /** 
   content is what follows the text
  */
  content: PropTypes.string,

  /** 
  subContent, usually additional information below the content
  */
  subContent: PropTypes.string,

  /**
   additional info section is mainly for any short text like job title
  */
  additionalInfo: PropTypes.string,

  /**
   noImage is passed if the user wants to remove the avatar section
  */
  noImage: PropTypes.boolean,

  /**
   hintInfo is passed to give additonal hint to your content, optional
  */
  hintInfo: PropTypes.node
};
SidebarItem.defaultProps = {
  noImage: false
};
export default SidebarItem;