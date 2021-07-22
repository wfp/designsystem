var _excluded = ["children", "className", "image", "isExternal", "isLink", "metadata", "more", "subTitle", "title", "kind", "url"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/**
 * Hero are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */

var Hero = function Hero(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      isExternal = _ref.isExternal,
      isLink = _ref.isLink,
      metadata = _ref.metadata,
      more = _ref.more,
      subTitle = _ref.subTitle,
      title = _ref.title,
      kind = _ref.kind,
      url = _ref.url,
      other = _objectWithoutProperties(_ref, _excluded);

  var style = kind !== 'related' ? {
    backgroundImage: "url(".concat(image, ")")
  } : {};
  var wrapperClasses = classNames("".concat(prefix, "--photo-card"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--photo-card--").concat(kind), kind), _defineProperty(_classNames, "".concat(prefix, "--photo-card--no-background"), !image), _defineProperty(_classNames, "".concat(prefix, "--photo-card--link"), isLink), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--photo-card__background"),
    style: style
  }), image && kind === 'related' && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--photo-card__info")
  }, /*#__PURE__*/React.createElement("div", null, (kind === 'landscape' || kind === 'hero') && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--photo-card__info__background"),
    style: style
  }), metadata && /*#__PURE__*/React.createElement("p", {
    className: "".concat(prefix, "--photo-card__info__metadata")
  }, metadata), title && (kind === 'hero' || kind === 'page-splash') && /*#__PURE__*/React.createElement("h2", {
    className: "".concat(prefix, "--photo-card__info__title")
  }, title), title && kind !== 'hero' && kind !== 'page-splash' && /*#__PURE__*/React.createElement("h3", {
    className: "".concat(prefix, "--photo-card__info__title")
  }, title), subTitle && /*#__PURE__*/React.createElement("p", {
    className: "".concat(prefix, "--photo-card__info__subtitle")
  }, subTitle)), kind === 'hero' || kind === 'splash-image' || kind === 'splash-compact' && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--photo-card__info__more")
  }, more)), children);
  return isLink ? /*#__PURE__*/React.createElement("a", _extends({
    href: url,
    target: isExternal ? '_blank' : '',
    className: wrapperClasses
  }, other), content) : /*#__PURE__*/React.createElement("div", _extends({
    className: wrapperClasses
  }, other), content);
};

Hero.propTypes = {
  /**
   Additional className which will be added
  */
  className: PropTypes.string,

  /**
   The links target
  */
  href: PropTypes.string,

  /**
   An optimized photograph
  */
  image: PropTypes.string,

  /**
  External link flag
  */
  isExternal: PropTypes.bool,

  /**
  Render the Hero as link
  */
  isLink: PropTypes.bool,

  /**
  A short sentence to explain the content of the node (max 180 characters) 
  */
  subTitle: PropTypes.node,

  /**
   A search-friendly title (ideally 50 characters, max 100) 
  */
  title: PropTypes.node,

  /**
  Additional metadatas
  */
  metadata: PropTypes.string,

  /**
  Additional more content
  */
  more: PropTypes.node,

  /**
  Kind of Hero
  */
  kind: PropTypes.oneOf(['landscape', 'landscape-light', 'emergencies', 'split', 'hero', 'splash', 'splash-image', 'splash-compact', 'related']).isRequired,

  /**
  The URL where the content uploaded is located.
  */
  url: PropTypes.string
};
Hero.defaultProps = {
  isLink: true
};
export default Hero;