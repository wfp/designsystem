function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
  var _classnames;

  var className = _ref.className,
      dark = _ref.dark,
      noPadding = _ref.noPadding,
      children = _ref.children,
      content = _ref.content,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
      modifiers = _ref.modifiers,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'top' : _ref$placement,
      utlis = _ref.utlis,
      useWrapper = _ref.useWrapper;
  var referenceElement = useRef(null);
  var popperElement = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      arrowElement = _useState2[0],
      setArrowElement = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isShown = _useState4[0],
      setIsShown = _useState4[1];

  var handleInsideClick = function handleInsideClick() {
    setIsShown(true);
    document.addEventListener('mousedown', handleClickOutside);
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (popperElement && !popperElement.current.contains(event.target)) {
      setIsShown(false);
      document.removeEventListener('mousedown', handleClickOutside, false);
    }
  };

  var _usePopper = usePopper(referenceElement.current, popperElement.current, _objectSpread({
    placement: placement,
    modifiers: [_objectSpread({
      name: 'offset',
      options: {
        offset: [0, 10]
      }
    }, modifiers), {
      name: 'arrow',
      options: {
        element: arrowElement,
        padding: 8
      }
    }]
  }, utlis)),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--tooltip"), true), _defineProperty(_classnames, "".concat(prefix, "--tooltip--visible"), isShown), _defineProperty(_classnames, "".concat(prefix, "--tooltip--disable-padding"), noPadding), _defineProperty(_classnames, "".concat(prefix, "--tooltip--").concat(trigger), trigger), _defineProperty(_classnames, "".concat(prefix, "--tooltip--dark"), dark), _classnames));
  var actions = trigger === 'hover' ? {
    onMouseEnter: function onMouseEnter() {
      return setIsShown(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsShown(false);
    }
  } : {
    onClick: function onClick() {
      return handleInsideClick(true);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, useWrapper === true ? /*#__PURE__*/React.createElement("span", _extends({
    type: "button",
    ref: referenceElement
  }, actions), children) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(children, _objectSpread({
    ref: referenceElement
  }, actions))), /*#__PURE__*/React.createElement("div", _extends({
    ref: popperElement,
    style: styles.popper
  }, attributes.popper, {
    className: classNames
  }), content, /*#__PURE__*/React.createElement("div", {
    ref: setArrowElement,
    style: styles.arrow,
    className: "".concat(prefix, "--tooltip__arrow")
  })));
};

Tooltip.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
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
  modifiers: PropTypes.object,

  /**
   * Provide additional utils as an object https://popper.js.org/docs/v2/utils/
   */
  utils: PropTypes.object,

  /**
   * Use a wrapper html element aroud the trigger. Useful for components without `forwardRef` support.
   */
  useWrapper: PropTypes.bool
};
export default Tooltip;