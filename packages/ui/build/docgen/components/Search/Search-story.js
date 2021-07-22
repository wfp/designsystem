"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Search = _interopRequireDefault(require("../Search"));

var _Search2 = _interopRequireDefault(require("../Search/Search.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var options = {
  large: 'large',
  small: 'small',
  banner: 'banner',
  main: 'main',
  light: 'light',
  None: undefined
};

var props = function props() {
  return {
    className: 'some-class',
    //light: boolean('Light variant (light)', false),
    kind: (0, _addonKnobs.select)('Kind (kind)', options, undefined),
    name: (0, _addonKnobs.text)('Form item name (name)', ''),
    value: (0, _addonKnobs.text)('Value (value)', ''),
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Search'),
    closeButtonLabelText: (0, _addonKnobs.text)('The label text for the close button (closeButtonLabelText)', ''),
    placeHolderText: (0, _addonKnobs.text)('Placeholder text (placeHolderText)', 'Search'),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('Components|Search', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Search.default, _extends({}, props(), {
    id: "search-1"
  }));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Search2.default, null), "\xA0", /*#__PURE__*/_react.default.createElement(_Search2.default, {
    small: true
  }));
});