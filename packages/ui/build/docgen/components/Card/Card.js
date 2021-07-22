"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "image", "isExternal", "isLink", "metadata", "subTitle", "title", "kind", "url", "cardWidth", "cardHeight"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */

var Card = function Card(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      isExternal = _ref.isExternal,
      isLink = _ref.isLink,
      metadata = _ref.metadata,
      subTitle = _ref.subTitle,
      title = _ref.title,
      kind = _ref.kind,
      url = _ref.url,
      cardWidth = _ref.cardWidth,
      cardHeight = _ref.cardHeight,
      other = _objectWithoutProperties(_ref, _excluded);

  var style = kind == 'overlay' ? {
    backgroundImage: "url(".concat(image, ")")
  } : {};
  var pagewidth = cardWidth ? cardWidth : '300px';
  var pageheight = cardHeight ? cardHeight : '260px';
  var wrapperClasses = (0, _classnames.default)(["".concat(prefix, "--card-box")], (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--photo-cardnew--").concat(kind), kind), _defineProperty(_classNames, "".concat(prefix, "--photo-cardnew--link"), isLink), _defineProperty(_classNames, "".concat(className), className), _classNames));

  var content = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, kind === 'overlay' ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--photo-cardnew__background"),
    style: style
  }) : null, image && kind === 'simple-card' ? /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: title,
    className: "".concat(prefix, "--header-photo")
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--photo-cardnew__info")
  }, /*#__PURE__*/_react.default.createElement("div", null, kind === 'overlay' && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--photo-cardnew__info__background"),
    style: style
  }), metadata && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(prefix, "--photo-cardnew__info__metadata")
  }, metadata), title && /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(prefix, "--photo-cardnew__info__title")
  }, title), subTitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(prefix, "--photo-cardnew__info__subtitle")
  }, subTitle))), children);

  return isLink ? /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClasses,
    style: {
      width: pagewidth,
      minHeight: pageheight
    }
  }, /*#__PURE__*/_react.default.createElement("a", _extends({
    href: url,
    target: isExternal ? '_blank' : '',
    style: {
      width: pagewidth,
      minHeight: pageheight
    }
  }, other), content)) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other, {
    style: {
      width: pagewidth,
      minHeight: pageheight
    }
  }), content);
};

Card.propTypes = {
  /**
   Additional className which will be added
  */
  className: _propTypes.default.string,

  /**
   An optimized photograph
  */
  image: _propTypes.default.string,

  /**
  isExternal if true, opens link in a different window
  */
  isExternal: _propTypes.default.bool,

  /**
  Render the Card as link
  */
  isLink: _propTypes.default.bool,

  /**
  A short sentence to explain the content of the node (max 180 characters) 
  */
  subTitle: _propTypes.default.node,

  /**
   A search-friendly title (ideally 50 characters, max 100) 
  */
  title: _propTypes.default.node,

  /**
  Additional metadatas
  */
  metadata: _propTypes.default.string,

  /**
  Kind of Card
  */
  kind: _propTypes.default.oneOf(['simple-card', 'overlay']).isRequired,

  /**
  The URL where the content uploaded is located.
  */
  url: _propTypes.default.string,

  /**
   * override default card width with preferred width
   */
  cardWidth: _propTypes.default.string,

  /**
   * override default card width with preferred width
   */
  cardHeight: _propTypes.default.string
};
Card.defaultProps = {
  isLink: true
};
var _default = Card;
exports.default = _default;