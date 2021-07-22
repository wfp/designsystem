"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _icons = require("@wfp/icons");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["alt", "className", "children", "description", "ellipsis", "extendedDescription", "image", "showName", "small", "missingImage", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** The User is used inside the MainNavigation and form, and can display an avatar and username. */

var User = function User(_ref) {
  var _classNames, _classNames2;

  var alt = _ref.alt,
      className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      ellipsis = _ref.ellipsis,
      extendedDescription = _ref.extendedDescription,
      image = _ref.image,
      showName = _ref.showName,
      small = _ref.small,
      missingImage = _ref.missingImage,
      name = _ref.name,
      other = _objectWithoutProperties(_ref, _excluded);

  var avatar;

  if (!image && missingImage === 'avatar') {
    avatar = /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
      icon: _icons.iconUser,
      fill: "#ffffff",
      width: "14",
      height: "14",
      description: alt,
      className: "".concat(prefix, "--user__icon ").concat(prefix, "--user__icon--empty")
    }, other));
  } else if (image === undefined && missingImage === 'letter') {
    avatar = /*#__PURE__*/_react.default.createElement("svg", {
      id: "Layer_1",
      className: "".concat(prefix, "--user__icon ").concat(prefix, "--user__icon--empty ").concat(prefix, "--user__icon--letter"),
      x: "0px",
      y: "0px",
      viewBox: "0 0 25 25",
      height: "25px",
      width: "25px"
    }, /*#__PURE__*/_react.default.createElement("text", {
      x: "50%",
      y: "57%",
      dominantBaseline: "middle",
      textAnchor: "middle"
    }, name && name.toUpperCase()[0]));
  } else {
    avatar = /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefix, "--user__icon")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: alt,
      src: image
    }));
  }

  var classes = (0, _classnames.default)("".concat(prefix, "--user"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--user--has-description"), description), _defineProperty(_classNames, "".concat(prefix, "--user--has-extended-description"), extendedDescription), _classNames));
  var titleClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--user__title"), true), _defineProperty(_classNames2, "".concat(prefix, "--user__title--ellipsis"), ellipsis), _defineProperty(_classNames2, "".concat(prefix, "--user__title--small"), small), _classNames2));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), avatar, showName && /*#__PURE__*/_react.default.createElement("span", {
    className: titleClasses
  }, /*#__PURE__*/_react.default.createElement("span", null, name), description && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--user__description")
  }, description)), children, extendedDescription && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--user__extended-description")
  }, extendedDescription));
};

User.propTypes = {
  /**
   * The alt-text of the avatar
   */
  alt: _propTypes.default.string,

  /**
   * Sets the max-width of the user name to 130px and shows an ellipsis
   */
  ellipsis: _propTypes.default.bool,

  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  className: _propTypes.default.string,

  /**
   * Additional description under the Name will also increase the size
   * of the Avatar use &lt;List kind="simple" small /&gt; as default content
   */
  description: _propTypes.default.node,

  /**
   * Selects the generated empty icon if no image is provided.
   * Can be `avatar` or `letter`.
   */
  missingImage: _propTypes.default.oneOf(['avatar', 'letter']),

  /**
   * Extended Description column
   */
  extendedDescription: _propTypes.default.node,

  /**
   * Url to an avatar image The size of the image is 25px * 25px.
   * Provide at least 50px * 50px to support HiDPI displays.
   */
  image: _propTypes.default.string,

  /**
   * Show the name next to the avatar
   */
  showName: _propTypes.default.bool,

  /**
   * The username which will be displayed. Usually `Firstname Lastname`.
   */
  name: _propTypes.default.string
};
User.defaultProps = {
  alt: 'User Icon',
  missingImage: 'avatar',
  ellipsis: false,
  showName: true
};
var _default = User;
exports.default = _default;