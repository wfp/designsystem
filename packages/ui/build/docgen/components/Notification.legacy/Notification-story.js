"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _reactToastify = require("react-toastify");

var _Notification = _interopRequireDefault(require("./Notification"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _icons = require("@wfp/icons");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var displayTypes = {
  'default (default)': 'default',
  'Info (info)': 'info',
  'Success (success)': 'success',
  'Warning (warning)': 'warning',
  'error (error)': 'error'
};
var props = {
  regular: function regular() {
    return {
      hideProgressBar: (0, _addonKnobs.boolean)('hideProgressBar (hideProgressBar)', true),
      autoClose: (0, _addonKnobs.number)('Auto close (autoClose)', 229000),
      type: (0, _addonKnobs.select)('Display Type (type)', displayTypes, undefined)
    };
  }
};
(0, _react2.storiesOf)('Components|Notification', module).addDecorator(_addonKnobs.withKnobs).add('Default (experimental)', function () {
  var notify = function notify() {
    (0, _reactToastify.toast)('A regular message');
  };

  var notifyAll = function notifyAll() {
    _reactToastify.toast.success( /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: _icons.iconCheckmarkGlyph
    }), " Wow so easy!"));

    _reactToastify.toast.success('Wow so easy!');

    _reactToastify.toast.warn('Please check again!');

    _reactToastify.toast.error('Something went terribly wrong!');
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: notify
  }, "Regular notification"), ' ', /*#__PURE__*/_react.default.createElement(_Button.default, {
    kind: "secondary",
    onClick: notifyAll
  }, "All Notifications"), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, _extends({}, _Notification.default, props.regular())));
});