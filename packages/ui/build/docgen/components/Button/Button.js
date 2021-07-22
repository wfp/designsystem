"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "disabled", "small", "large", "kind", "href", "iconReverse", "tabIndex", "type", "useFlexbox", "icon", "iconDescription", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prefix = _settings.default.prefix;
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

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      return endAnimation();
    }, 500);
    return function () {
      clearTimeout(timer);
    };
  }, [count]);
  var buttonClasses = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), small), _defineProperty(_classNames, "".concat(prefix, "--btn--lg"), large), _defineProperty(_classNames, "".concat(prefix, "--btn--icon-reverse"), iconReverse), _defineProperty(_classNames, "".concat(prefix, "--btn--flexbox"), useFlexbox), _defineProperty(_classNames, "".concat(prefix, "--btn--icon-only"), icon && children === undefined), _defineProperty(_classNames, "".concat(prefix, "--btn--primary"), kind === 'primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger"), kind === 'danger'), _defineProperty(_classNames, "".concat(prefix, "--btn--accent"), kind === 'accent'), _defineProperty(_classNames, "".concat(prefix, "--btn--secondary"), kind === 'secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--navigation"), kind === 'navigation'), _defineProperty(_classNames, "".concat(prefix, "--btn--ghost"), kind === 'ghost'), _defineProperty(_classNames, "".concat(prefix, "--btn--inverse--primary"), kind === 'inverse--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--inverse"), kind === 'inverse'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--primary"), kind === 'danger--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--secondary"), kind === 'danger--secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--tertiary"), kind === 'tertiary'), _defineProperty(_classNames, "".concat(prefix, "--btn--animating"), count), _classNames));
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses
  };
  var buttonImage = icon ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
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

  var button = /*#__PURE__*/_react.default.createElement("button", _extends({}, other, commonProps, {
    disabled: disabled,
    type: type,
    onClick: onClickAnimation,
    ref: other.inputref
  }), iconReverse && buttonImage, children, !iconReverse && buttonImage);

  var anchor = /*#__PURE__*/_react.default.createElement("a", _extends({}, other, commonProps, {
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
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * FOR DESIGNERS
   * Specify whether the Button should be a small variant
   */
  small: _propTypes.default.bool,

  /**
   * FOR DESIGNERS
   * Specify whether the Button should be a large variant
   */
  large: _propTypes.default.bool,

  /**
   * FOR DESIGNERS
   * Specify the kind of Button you want to create
   */
  kind: _propTypes.default.oneOf(['primary', 'secondary', 'accent', 'danger', 'ghost', 'inverse--primary', 'inverse', 'danger--primary', 'tertiary', 'navigation']),
  //ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: _propTypes.default.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: _propTypes.default.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: _propTypes.default.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: _propTypes.default.string,

  /**
   * Specify an `icon` to include in the Button through an object representing the SVG data of the icon, similar to the `Icon` component
   */
  icon: _propTypes.default.shape({
    width: _propTypes.default.string,
    height: _propTypes.default.string,
    viewBox: _propTypes.default.string.isRequired,
    svgData: _propTypes.default.object.isRequired
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
  iconReverse: _propTypes.default.bool
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
var _default = Button;
exports.default = _default;