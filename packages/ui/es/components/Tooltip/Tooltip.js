var _excluded = ["className", "dark", "noPadding", "children", "content", "trigger", "modifiers", "placement", "createRefWrapper", "closeOnOutsideClick", "closeOnTriggerHidden", "defaultVisible", "delayHide", "delayShow", "followCursor", "interactive", "mutationObserverOptions", "offset", "onVisibleChange"];

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

import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { usePopperTooltip } from 'react-popper-tooltip';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
export var tooltipStyle = {
  duration: 100,
  animation: 'fade',
  theme: 'light',
  arrow: true
};
export var tooltipStyleDark = {
  duration: 100,
  animation: 'fade',
  theme: 'dark',
  arrow: true
};
/** Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential. */

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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--tooltip"), true), _defineProperty(_classnames, "".concat(prefix, "--tooltip--disable-padding"), noPadding), _defineProperty(_classnames, "".concat(prefix, "--tooltip--visible"), visibility), _defineProperty(_classnames, "".concat(prefix, "--tooltip--").concat(trigger), trigger), _defineProperty(_classnames, "".concat(prefix, "--tooltip--dark"), dark), _classnames));

  var _usePopperTooltip = usePopperTooltip({
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

  var elementClassNames = classnames(children === null || children === void 0 ? void 0 : (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, _defineProperty({}, "".concat(prefix, "--tooltip--trigger"), true));
  var wrapperClassNames = classnames(className, _defineProperty({}, "".concat(prefix, "--tooltip--trigger"), true));
  var triggerElement = !createRefWrapper && typeof children !== 'string' ? /*#__PURE__*/React.cloneElement(children, {
    ref: setTriggerRef,
    className: elementClassNames
  }) : /*#__PURE__*/React.createElement("span", {
    ref: setTriggerRef,
    className: wrapperClassNames
  }, children);

  var visibilityChange = function visibilityChange(e) {
    setVisibility(e);
    if (onVisibilityChange) onVisibilityChange(e);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, triggerElement, visible && /*#__PURE__*/React.createElement("div", _extends({
    ref: setTooltipRef
  }, getTooltipProps({
    className: classNames
  })), typeof content === 'function' ? content({
    setVisibility: setVisibility,
    visibilityChange: visibilityChange
  }) : content, /*#__PURE__*/React.createElement("div", getArrowProps({
    className: "".concat(prefix, "--tooltip__arrow")
  }))));
};

Tooltip.propTypes = {
  /**
   * Provide the children on which the tooltip will show on
   */
  children: PropTypes.node,

  /**
   * Provide the content for the tooltip
   */
  content: PropTypes.node,

  /**
   * Provide a dark styled tooltip
   */
  dark: PropTypes.bool,

  /**
   * Disable the default inner padding of the tooltip
   */
  noPadding: PropTypes.bool,

  /**
   * Provide the placement of the tooltip
   */
  placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),

  /**
   * Provide the placement of the tooltip
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * Provide additional modifiers as an object https://popper.js.org/docs/v2/modifiers/
   */
  modifiers: PropTypes.array,

  /**
   * Whether to use React.createPortal for creating tooltip.
   */
  usePortal: PropTypes.bool,

  /**
   * Use a wrapper html element around the trigger. Useful for components without `forwardRef` support.
   */
  createRefWrapper: PropTypes.bool
};
export default Tooltip;