"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tooltipStyleDark = exports.tooltipStyle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPopperTooltip = require("react-popper-tooltip");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "dark", "noPadding", "children", "content", "trigger", "modifiers", "placement", "createRefWrapper", "closeOnOutsideClick", "closeOnTriggerHidden", "defaultVisible", "delayHide", "delayShow", "followCursor", "interactive", "mutationObserverOptions", "offset", "onVisibleChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var tooltipStyle = {
  duration: 100,
  animation: 'fade',
  theme: 'light',
  arrow: true
};
exports.tooltipStyle = tooltipStyle;
var tooltipStyleDark = {
  duration: 100,
  animation: 'fade',
  theme: 'dark',
  arrow: true
};
/** Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential. */

exports.tooltipStyleDark = tooltipStyleDark;

var Tooltip = function Tooltip(_ref) {
  var _classnames, _children$props;

  var className = _ref.className,
      dark = _ref.dark,
      noPadding = _ref.noPadding,
      children = _ref.children,
      content = _ref.content,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? [] : _ref$modifiers,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'top' : _ref$placement,
      createRefWrapper = _ref.createRefWrapper,
      closeOnOutsideClick = _ref.closeOnOutsideClick,
      closeOnTriggerHidden = _ref.closeOnTriggerHidden,
      defaultVisible = _ref.defaultVisible,
      delayHide = _ref.delayHide,
      delayShow = _ref.delayShow,
      followCursor = _ref.followCursor,
      interactive = _ref.interactive,
      mutationObserverOptions = _ref.mutationObserverOptions,
      offset = _ref.offset,
      onVisibleChange = _ref.onVisibleChange,
      others = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var classNames = (0, _classnames4.default)(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--tooltip"), true), _defineProperty(_classnames, "".concat(prefix, "--tooltip--disable-padding"), noPadding), _defineProperty(_classnames, "".concat(prefix, "--tooltip--visible"), visibility), _defineProperty(_classnames, "".concat(prefix, "--tooltip--").concat(trigger), trigger), _defineProperty(_classnames, "".concat(prefix, "--tooltip--dark"), dark), _classnames));

  var _usePopperTooltip = (0, _reactPopperTooltip.usePopperTooltip)({
    closeOnOutsideClick: closeOnOutsideClick,
    closeOnTriggerHidden: closeOnTriggerHidden,
    defaultVisible: defaultVisible,
    delayHide: delayHide,
    delayShow: delayShow,
    followCursor: followCursor,
    interactive: interactive,
    mutationObserverOptions: mutationObserverOptions,
    offset: offset,
    onVisibleChange: onVisibleChange,
    placement: placement,
    trigger: trigger
  }),
      getArrowProps = _usePopperTooltip.getArrowProps,
      getTooltipProps = _usePopperTooltip.getTooltipProps,
      setTooltipRef = _usePopperTooltip.setTooltipRef,
      setTriggerRef = _usePopperTooltip.setTriggerRef,
      visible = _usePopperTooltip.visible;

  var elementClassNames = (0, _classnames4.default)(children === null || children === void 0 ? void 0 : (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, _defineProperty({}, "".concat(prefix, "--tooltip--trigger"), true));
  var wrapperClassNames = (0, _classnames4.default)(className, _defineProperty({}, "".concat(prefix, "--tooltip--trigger"), true));
  var triggerElement = !createRefWrapper && typeof children !== 'string' ? /*#__PURE__*/_react.default.cloneElement(children, {
    ref: setTriggerRef,
    className: elementClassNames
  }) : /*#__PURE__*/_react.default.createElement("span", {
    ref: setTriggerRef,
    className: wrapperClassNames
  }, children);

  var visibilityChange = function visibilityChange(e) {
    setVisibility(e);
    if (onVisibilityChange) onVisibilityChange(e);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, triggerElement, visible && /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: setTooltipRef
  }, getTooltipProps({
    className: classNames
  })), typeof content === 'function' ? content({
    setVisibility: setVisibility,
    visibilityChange: visibilityChange
  }) : content, /*#__PURE__*/_react.default.createElement("div", getArrowProps({
    className: "".concat(prefix, "--tooltip__arrow")
  }))));
};

Tooltip.propTypes = {
  /**
   * Provide the children on which the tooltip will show on
   */
  children: _propTypes.default.node,

  /**
   * Provide the content for the tooltip
   */
  content: _propTypes.default.node,

  /**
   * Provide a dark styled tooltip
   */
  dark: _propTypes.default.bool,

  /**
   * Disable the default inner padding of the tooltip
   */
  noPadding: _propTypes.default.bool,

  /**
   * Provide the placement of the tooltip
   */
  placement: _propTypes.default.oneOf(['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),

  /**
   * Provide the placement of the tooltip
   */
  trigger: _propTypes.default.oneOf(['click', 'hover']),

  /**
   * Provide additional modifiers as an object https://popper.js.org/docs/v2/modifiers/
   */
  modifiers: _propTypes.default.array,

  /**
   * Whether to use React.createPortal for creating tooltip.
   */
  usePortal: _propTypes.default.bool,

  /**
   * Use a wrapper html element around the trigger. Useful for components without `forwardRef` support.
   */
  createRefWrapper: _propTypes.default.bool
};
var _default = Tooltip;
exports.default = _default;