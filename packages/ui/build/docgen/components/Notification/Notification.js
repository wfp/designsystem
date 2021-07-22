"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationActionButton = NotificationActionButton;
exports.NotificationButton = NotificationButton;
exports.NotificationTextDetails = NotificationTextDetails;
exports.ToastNotification = ToastNotification;
exports.InlineNotification = InlineNotification;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames5 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _icons = require("@wfp/icons");

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["children", "className", "onClick"],
    _excluded2 = ["ariaLabel", "className", "iconDescription", "type", "renderIcon", "name", "notificationType"],
    _excluded3 = ["title", "subtitle", "caption", "notificationType", "children"],
    _excluded4 = ["role", "notificationType", "onCloseButtonClick", "iconDescription", "statusIconDescription", "className", "caption", "subtitle", "title", "kind", "lowContrast", "hideCloseButton", "children", "timeout"],
    _excluded5 = ["actions", "role", "notificationType", "onCloseButtonClick", "iconDescription", "statusIconDescription", "className", "subtitle", "title", "kind", "lowContrast", "hideCloseButton", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** Notifications are messages that communicate information to the user. The two main types of notifications are toast notifications and inline notifications. */

function NotificationActionButton(_ref) {
  var children = _ref.children,
      customClassName = _ref.className,
      onClick = _ref.onClick,
      other = _objectWithoutProperties(_ref, _excluded);

  var className = (0, _classnames5.default)(customClassName, "".concat(prefix, "--inline-notification__action-button"));
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    className: className,
    kind: "ghost",
    onClick: onClick,
    size: "small"
  }, other), children);
}

NotificationActionButton.propTypes = {
  /**
   * Specify the content of the notification action button.
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the notification action button
   */
  className: _propTypes.default.string,

  /**
   * Optionally specify a click handler for the notification action button.
   */
  onClick: _propTypes.default.func
};

function NotificationButton(_ref2) {
  var ariaLabel = _ref2.ariaLabel,
      className = _ref2.className,
      iconDescription = _ref2.iconDescription,
      type = _ref2.type,
      renderIcon = _ref2.renderIcon,
      name = _ref2.name,
      notificationType = _ref2.notificationType,
      other = _objectWithoutProperties(_ref2, _excluded2);

  var buttonClassName = (0, _classnames5.default)(className, _defineProperty({}, "".concat(prefix, "--").concat(notificationType, "-notification__close-button"), notificationType));
  var iconClassName = (0, _classnames5.default)(_defineProperty({}, "".concat(prefix, "--").concat(notificationType, "-notification__close-icon"), notificationType));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    _react.default.createElement("button", _extends({}, other, {
      type: type,
      "aria-label": iconDescription,
      title: iconDescription,
      className: buttonClassName
    }), renderIcon && /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: renderIcon,
      "aria-label": ariaLabel,
      className: iconClassName,
      name: name
    }))
  );
}

NotificationButton.propTypes = {
  /**
   * Specify a label to be read by screen readers on the notification button
   */
  ariaLabel: _propTypes.default.string,

  /**
   * Specify an optional className to be applied to the notification button
   */
  className: _propTypes.default.string,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Specify an optional icon for the Button through a string,
   * if something but regular "close" icon is desirable
   */
  name: _propTypes.default.string,

  /**
   * Specify the notification type
   */
  notificationType: _propTypes.default.oneOf(['toast', 'inline']),

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Optional prop to specify the type of the Button
   */
  type: _propTypes.default.string
};
NotificationButton.defaultProps = {
  ariaLabel: 'close notification',
  // TODO: deprecate this prop
  notificationType: 'toast',
  type: 'button',
  iconDescription: 'close icon',
  renderIcon: _icons.iconClose
};

function NotificationTextDetails(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle,
      caption = _ref3.caption,
      notificationType = _ref3.notificationType,
      children = _ref3.children,
      other = _objectWithoutProperties(_ref3, _excluded3);

  if (notificationType === 'toast') {
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
      className: "".concat(prefix, "--toast-notification__details")
    }), /*#__PURE__*/_react.default.createElement("h3", {
      className: "".concat(prefix, "--toast-notification__title")
    }, title), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefix, "--toast-notification__subtitle")
    }, subtitle), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefix, "--toast-notification__caption")
    }, caption), children);
  }

  if (notificationType === 'inline') {
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
      className: "".concat(prefix, "--inline-notification__text-wrapper")
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "".concat(prefix, "--inline-notification__title")
    }, title), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefix, "--inline-notification__subtitle")
    }, subtitle), children);
  }
}

NotificationTextDetails.propTypes = {
  /**
   * Specify the caption
   */
  caption: _propTypes.default.node,

  /**
   * Pass in the children that will be rendered in NotificationTextDetails
   */
  children: _propTypes.default.node,

  /**
   * Specify the notification type
   */
  notificationType: _propTypes.default.oneOf(['toast', 'inline']),

  /**
   * Specify the sub-title
   */
  subtitle: _propTypes.default.node,

  /**
   * Specify the title
   */
  title: _propTypes.default.string
};
NotificationTextDetails.defaultProps = {
  title: 'title',
  caption: 'caption',
  notificationType: 'toast'
};
var iconTypes = {
  error: _icons.iconError,
  success: _icons.iconCheckmarkGlyph,
  warning: _icons.iconWarningSolid,
  //['warning-alt']: WarningAltFilled20,
  info: _icons.iconInfoGlyph //['info-square']: InformationSquareFilled20,

};

function NotificationIcon(_ref4) {
  var iconDescription = _ref4.iconDescription,
      kind = _ref4.kind,
      notificationType = _ref4.notificationType;
  var iconForKind = iconTypes[kind];

  if (!iconForKind) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: iconForKind,
    className: "".concat(prefix, "--").concat(notificationType, "-notification__icon")
  }, /*#__PURE__*/_react.default.createElement("title", null, iconDescription));
}

NotificationIcon.propTypes = {
  iconDescription: _propTypes.default.string.isRequired,
  kind: _propTypes.default.oneOf(['error', 'success', 'warning', 'warning-alt', 'info' //'info-square',
  ]).isRequired,
  notificationType: _propTypes.default.oneOf(['inline', 'toast']).isRequired
};
/** sdfghjk */

function ToastNotification(_ref5) {
  var _classnames3;

  var role = _ref5.role,
      notificationType = _ref5.notificationType,
      onCloseButtonClick = _ref5.onCloseButtonClick,
      iconDescription = _ref5.iconDescription,
      statusIconDescription = _ref5.statusIconDescription,
      className = _ref5.className,
      caption = _ref5.caption,
      subtitle = _ref5.subtitle,
      title = _ref5.title,
      kind = _ref5.kind,
      lowContrast = _ref5.lowContrast,
      hideCloseButton = _ref5.hideCloseButton,
      children = _ref5.children,
      timeout = _ref5.timeout,
      other = _objectWithoutProperties(_ref5, _excluded4);

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var containerClassName = (0, _classnames5.default)(className, (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefix, "--toast-notification"), true), _defineProperty(_classnames3, "".concat(prefix, "--toast-notification--low-contrast"), lowContrast), _defineProperty(_classnames3, "".concat(prefix, "--toast-notification--").concat(kind), kind), _classnames3));

  function handleCloseButtonClick(event) {
    setIsOpen(false);
    onCloseButtonClick(event);
  }

  (0, _react.useEffect)(function () {
    if (!timeout) {
      return;
    }

    var timeoutId = window.setTimeout(function () {
      setIsOpen(false);
      onCloseButtonClick(event);
    }, timeout);
    return function () {
      window.clearTimeout(timeoutId);
    };
  }, [onCloseButtonClick, timeout]);

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
    role: role,
    kind: kind,
    className: containerClassName
  }), /*#__PURE__*/_react.default.createElement(NotificationIcon, {
    notificationType: notificationType,
    kind: kind,
    iconDescription: statusIconDescription || "".concat(kind, " icon")
  }), /*#__PURE__*/_react.default.createElement(NotificationTextDetails, {
    title: title,
    subtitle: subtitle,
    caption: caption,
    notificationType: notificationType
  }, children), !hideCloseButton && /*#__PURE__*/_react.default.createElement(NotificationButton, {
    iconDescription: iconDescription,
    notificationType: notificationType,
    onClick: handleCloseButtonClick
  }));
}

ToastNotification.propTypes = {
  /**
   * Specify the caption
   */
  caption: _propTypes.default.node,

  /**
   * Pass in the children that will be rendered within the ToastNotification
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: _propTypes.default.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: _propTypes.default.bool,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Specify what state the notification represents
   */
  kind: _propTypes.default.oneOf(['error', 'info', //'info-square',
  'success', 'warning', 'warning-alt']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the ToastNotification.
   */
  lowContrast: _propTypes.default.bool,

  /**
   * By default, this value is "toast". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: _propTypes.default.string,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: _propTypes.default.func,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: _propTypes.default.string,

  /**
   * Specify the sub-title
   */
  subtitle: _propTypes.default.node,

  /**
   * Specify an optional duration the notification should be closed in
   */
  timeout: _propTypes.default.number,

  /**
   * Specify the title
   */
  title: _propTypes.default.string.isRequired
};
ToastNotification.defaultProps = {
  kind: 'error',
  title: 'provide a title',
  caption: 'provide a caption',
  role: 'alert',
  notificationType: 'toast',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false,
  timeout: 0
};

function InlineNotification(_ref6) {
  var _classnames4;

  var actions = _ref6.actions,
      role = _ref6.role,
      notificationType = _ref6.notificationType,
      onCloseButtonClick = _ref6.onCloseButtonClick,
      iconDescription = _ref6.iconDescription,
      statusIconDescription = _ref6.statusIconDescription,
      className = _ref6.className,
      subtitle = _ref6.subtitle,
      title = _ref6.title,
      kind = _ref6.kind,
      lowContrast = _ref6.lowContrast,
      hideCloseButton = _ref6.hideCloseButton,
      children = _ref6.children,
      other = _objectWithoutProperties(_ref6, _excluded5);

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var containerClassName = (0, _classnames5.default)(className, (_classnames4 = {}, _defineProperty(_classnames4, "".concat(prefix, "--inline-notification"), true), _defineProperty(_classnames4, "".concat(prefix, "--inline-notification--low-contrast"), lowContrast), _defineProperty(_classnames4, "".concat(prefix, "--inline-notification--").concat(kind), kind), _defineProperty(_classnames4, "".concat(prefix, "--inline-notification--hide-close-button"), hideCloseButton), _classnames4));

  function handleCloseButtonClick(event) {
    setIsOpen(false);
    onCloseButtonClick(event);
  }

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
    role: role,
    kind: kind,
    className: containerClassName
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--inline-notification__details")
  }, /*#__PURE__*/_react.default.createElement(NotificationIcon, {
    notificationType: notificationType,
    kind: kind,
    iconDescription: statusIconDescription || "".concat(kind, " icon")
  }), /*#__PURE__*/_react.default.createElement(NotificationTextDetails, {
    title: title,
    subtitle: subtitle,
    notificationType: notificationType
  }, children)), actions, !hideCloseButton && /*#__PURE__*/_react.default.createElement(NotificationButton, {
    iconDescription: iconDescription,
    notificationType: notificationType,
    onClick: handleCloseButtonClick
  }));
}

InlineNotification.propTypes = {
  /**
   * Pass in the action nodes that will be rendered within the InlineNotification
   */
  actions: _propTypes.default.node,

  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: _propTypes.default.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: _propTypes.default.bool,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Specify what state the notification represents
   */
  kind: _propTypes.default.oneOf(['error', 'info', //'info-square',
  'success', 'warning', 'warning-alt']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
   */
  lowContrast: _propTypes.default.bool,

  /**
   * By default, this value is "inline". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: _propTypes.default.string,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: _propTypes.default.func,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: _propTypes.default.string,

  /**
   * Specify the sub-title
   */
  subtitle: _propTypes.default.node,

  /**
   * Specify the title
   */
  title: _propTypes.default.string.isRequired
};
InlineNotification.defaultProps = {
  role: 'alert',
  notificationType: 'inline',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false
};