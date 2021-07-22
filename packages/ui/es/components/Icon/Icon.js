var _excluded = ["className", "description", "fill", "fillRule", "height", "icon", "iconTitle", "role", "style", "width", "iconRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react'; //import icons from '@wfp/icons';

import isRequiredOneOf from '../../prop-types/isRequiredOneOf';
/**
 * @param {Object} svgData - JSON Object for an SVG icon
 * @returns {ReactElement} Elements/Nodes for SVG
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */

export function svgShapes(svgData) {
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
        return /*#__PURE__*/React.createElement("circle", circleProps);
      });
    } else if (svgProp === 'paths') {
      return data.map(function (path, index) {
        return /*#__PURE__*/React.createElement("path", {
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
export function isPrefixed(name) {
  if (process.env.NODE_ENV !== "production") {
    !(typeof name === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, '[Icon] icon name is missing.') : invariant(false) : void 0;
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

  if ( /*#__PURE__*/React.isValidElement(icon)) {
    width = width ? width : icon.props.width;
    height = height ? height : icon.props.height;
    var clonedIcon = /*#__PURE__*/React.cloneElement(icon, {
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
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    "aria-label": description,
    alt: description
  }), /*#__PURE__*/React.createElement("title", null, description), svgContent);
};

Icon.propTypes = _objectSpread(_objectSpread({
  /**
   * The CSS class name.
   */
  className: PropTypes.string,

  /**
   * The icon description.
   */
  description: PropTypes.string.isRequired,

  /**
   * The `svg` `fill` attribute.
   */
  fill: PropTypes.string,

  /**
   * The `svg` `fillRule` attribute.
   */
  fillRule: PropTypes.string,

  /**
   * The `svg` `height` attribute.
   */
  height: PropTypes.string
}, isRequiredOneOf({
  /**
   * The icon data.
   */
  icon: PropTypes.oneOfType([PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }), PropTypes.node]),

  /**
   * The name in the sprite.
   */
  name: PropTypes.string
})), {}, {
  /**
   * The `role` attribute.
   */
  role: PropTypes.string,

  /**
   * The CSS styles.
   */
  style: PropTypes.object,

  /**
   * The `svg` `viewbox` attribute.
   */
  viewBox: PropTypes.string,

  /**
   * The `svg` `width` attribute.
   */
  width: PropTypes.string,

  /**
   * The `ref` callback for the icon.
   */
  iconRef: PropTypes.func
});
Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title'
}; //export { icons };

export default Icon;