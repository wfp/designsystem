"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** dkjnslknkjfndn */
var CloseButton = function CloseButton(_ref) {
  var YouCanPassAnyProps = _ref.YouCanPassAnyProps,
      closeToast = _ref.closeToast;
  return /*#__PURE__*/_react.default.createElement("button", {
    ariaLabel: "close",
    className: "Toastify__close-button",
    onClick: closeToast
  }, /*#__PURE__*/_react.default.createElement("span", null));
};
/** huyhuyghu */


var notificationStyle = {
  position: 'bottom-right',
  closeButton: /*#__PURE__*/_react.default.createElement(CloseButton, {
    YouCanPassAnyProps: "foo"
  })
};
var _default = notificationStyle;
exports.default = _default;