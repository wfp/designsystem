var _excluded = ["children", "className", "disabled", "small", "large", "kind", "href", "iconReverse", "tabIndex", "type", "useFlexbox", "icon", "iconDescription", "onClick"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */

var Button = function Button(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      small = _ref.small,
      large = _ref.large,
      kind = _ref.kind,
      href = _ref.href,
      iconReverse = _ref.iconReverse,
      tabIndex = _ref.tabIndex,
      type = _ref.type,
      useFlexbox = _ref.useFlexbox,
      icon = _ref.icon,
      iconDescription = _ref.iconDescription,
      onClick = _ref.onClick,
      other = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  useEffect(function () {
    var timer = setTimeout(function () {
      return endAnimation();
    }, 500);
    return function () {
      clearTimeout(timer);
    };
  }, [count]);
  var buttonClasses = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), small), _defineProperty(_classNames, "".concat(prefix, "--btn--lg"), large), _defineProperty(_classNames, "".concat(prefix, "--btn--icon-reverse"), iconReverse), _defineProperty(_classNames, "".concat(prefix, "--btn--flexbox"), useFlexbox), _defineProperty(_classNames, "".concat(prefix, "--btn--icon-only"), icon && children === undefined), _defineProperty(_classNames, "".concat(prefix, "--btn--primary"), kind === 'primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger"), kind === 'danger'), _defineProperty(_classNames, "".concat(prefix, "--btn--accent"), kind === 'accent'), _defineProperty(_classNames, "".concat(prefix, "--btn--secondary"), kind === 'secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--navigation"), kind === 'navigation'), _defineProperty(_classNames, "".concat(prefix, "--btn--ghost"), kind === 'ghost'), _defineProperty(_classNames, "".concat(prefix, "--btn--inverse--primary"), kind === 'inverse--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--inverse"), kind === 'inverse'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--primary"), kind === 'danger--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--secondary"), kind === 'danger--secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--tertiary"), kind === 'tertiary'), _defineProperty(_classNames, "".concat(prefix, "--btn--animating"), count), _classNames));
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses
  };
  var buttonImage = icon ? /*#__PURE__*/React.createElement(Icon, {
    icon: Object(icon) === icon ? icon : undefined,
    name: Object(icon) !== icon ? icon : undefined,
    description: iconDescription,
    className: "".concat(prefix, "--btn__icon")
  }) : null;

  var endAnimation = function endAnimation() {
    setCount(false);
  };

  var onClickAnimation = function onClickAnimation(e) {
    if (onClick) {
      onClick(e);
    }

    setCount(true);
  };

  var button = /*#__PURE__*/React.createElement("button", _extends({}, other, commonProps, {
    disabled: disabled,
    type: type,
    onClick: onClickAnimation,
    ref: other.inputref
  }), iconReverse && buttonImage, children, !iconReverse && buttonImage);
  var anchor = /*#__PURE__*/React.createElement("a", _extends({}, other, commonProps, {
    href: href,
    role: "button",
    onClick: onClickAnimation,
    ref: other.inputref
  }), children, buttonImage);
  return href ? anchor : button;
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * FOR DESIGNERS
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,

  /**
   * FOR DESIGNERS
   * Specify whether the Button should be a large variant
   */
  large: PropTypes.bool,

  /**
   * FOR DESIGNERS
   * Specify the kind of Button you want to create
   */
  kind: PropTypes.oneOf(['primary', 'secondary', 'accent', 'danger', 'ghost', 'inverse--primary', 'inverse', 'danger--primary', 'tertiary', 'navigation']),
  //ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Specify an `icon` to include in the Button through an object representing the SVG data of the icon, similar to the `Icon` component
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }),

  /**
   * If specifying the `icon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: function iconDescription(props) {
    if (props.icon && !props.iconDescription) {
      return new Error('icon property specified without also providing an iconDescription property.');
    }

    return undefined;
  },

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  iconReverse: PropTypes.bool
};
Button.defaultProps = {
  iconReverse: false,
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary'
};
export default Button;