"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgShapes = svgShapes;
exports.isPrefixed = isPrefixed;
exports.default = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredOneOf = _interopRequireDefault(require("../../prop-types/isRequiredOneOf"));

var _excluded = ["className", "description", "fill", "fillRule", "height", "icon", "iconTitle", "role", "style", "width", "iconRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @param {Object} svgData - JSON Object for an SVG icon
 * @returns {ReactElement} Elements/Nodes for SVG
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */
function svgShapes(svgData) {
  var svgElements = Object.keys(svgData).filter(function (key) {
    return svgData[key];
  }).map(function (svgProp) {
    var data = svgData[svgProp];

    if (svgProp === 'circles') {
      return data.map(function (circle, index) {
        var circleProps = {
          cx: circle.cx,
          cy: circle.cy,
          r: circle.r,
          fill: circle.fill,
          key: "circle".concat(index)
        };
        return /*#__PURE__*/_react.default.createElement("circle", circleProps);
      });
    } else if (svgProp === 'paths') {
      return data.map(function (path, index) {
        return /*#__PURE__*/_react.default.createElement("path", {
          fill: path.fill,
          d: path.d,
          key: "key".concat(index)
        });
      });
    }

    return '';
  });
  return svgElements;
}

function isPrefixed(name) {
  if (process.env.NODE_ENV !== "production") {
    !(typeof name === 'string') ? process.env.NODE_ENV !== "production" ? (0, _invariant.default)(false, '[Icon] icon name is missing.') : invariant(false) : void 0;
  }

  return name && name.split('--')[0] === 'icon';
}
/** Icons are visual representations of commands, devices, directories, or common actions. */


var Icon = function Icon(_ref) {
  var className = _ref.className,
      description = _ref.description,
      fill = _ref.fill,
      fillRule = _ref.fillRule,
      height = _ref.height,
      icon = _ref.icon,
      iconTitle = _ref.iconTitle,
      role = _ref.role,
      style = _ref.style,
      width = _ref.width,
      iconRef = _ref.iconRef,
      other = _objectWithoutProperties(_ref, _excluded);

  if ( /*#__PURE__*/_react.default.isValidElement(icon)) {
    width = width ? width : icon.props.width;
    height = height ? height : icon.props.height;

    var clonedIcon = /*#__PURE__*/_react.default.cloneElement(icon, {
      className: className,
      role: role,
      width: width,
      height: height,
      style: style,
      fill: fill,
      fillRule: fillRule,
      description: description
    });

    return clonedIcon;
  }

  var props = _objectSpread({
    className: className,
    fill: fill,
    fillRule: fillRule,
    height: height || icon.height,
    //name: isPrefixed ? name : `icon--${name}`,
    role: role,
    style: style,
    viewBox: icon.viewBox,
    width: width || icon.width,
    ref: iconRef
  }, other);

  var svgContent = icon ? svgShapes(icon.svgData) : '';
  return /*#__PURE__*/_react.default.createElement("svg", _extends({}, props, {
    "aria-label": description,
    alt: description
  }), /*#__PURE__*/_react.default.createElement("title", null, description), svgContent);
};

Icon.propTypes = _objectSpread(_objectSpread({
  /**
   * The CSS class name.
   */
  className: _propTypes.default.string,

  /**
   * The icon description.
   */
  description: _propTypes.default.string.isRequired,

  /**
   * The `svg` `fill` attribute.
   */
  fill: _propTypes.default.string,

  /**
   * The `svg` `fillRule` attribute.
   */
  fillRule: _propTypes.default.string,

  /**
   * The `svg` `height` attribute.
   */
  height: _propTypes.default.string
}, (0, _isRequiredOneOf.default)({
  /**
   * The icon data.
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.shape({
    width: _propTypes.default.string,
    height: _propTypes.default.string,
    viewBox: _propTypes.default.string.isRequired,
    svgData: _propTypes.default.object.isRequired
  }), _propTypes.default.node]),

  /**
   * The name in the sprite.
   */
  name: _propTypes.default.string
})), {}, {
  /**
   * The `role` attribute.
   */
  role: _propTypes.default.string,

  /**
   * The CSS styles.
   */
  style: _propTypes.default.object,

  /**
   * The `svg` `viewbox` attribute.
   */
  viewBox: _propTypes.default.string,

  /**
   * The `svg` `width` attribute.
   */
  width: _propTypes.default.string,

  /**
   * The `ref` callback for the icon.
   */
  iconRef: _propTypes.default.func
});
Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title'
}; //export { icons };

var _default = Icon;
exports.default = _default;