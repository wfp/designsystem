"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _icons = require("@wfp/icons");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  formControls: function formControls() {
    return {
      className: 'some-class',
      onNextClick: (0, _addonActions.action)('onNextClick'),
      nextDisabled: (0, _addonKnobs.boolean)('disable Next button (nextDisabled)', false),
      nextIcon: (0, _addonKnobs.object)('custom icon for Next button (nextIcon)', _icons.iconArrowRight),
      nextHidden: (0, _addonKnobs.boolean)('hide Next button (nextHidden)', false),
      nextText: (0, _addonKnobs.text)('custom text for Next button (nextText)', undefined),
      onPreviousClick: (0, _addonActions.action)('onPreviousClick'),
      previousDisabled: (0, _addonKnobs.boolean)('disable Previous button (previousDisabled)', false),
      previousIcon: (0, _addonKnobs.object)('custom icon for Previous button (previousIcon)', _icons.iconArrowLeft),
      previousHidden: (0, _addonKnobs.boolean)('hide Next button (nextHidden)', false),
      previousText: (0, _addonKnobs.text)('custom text for Next button (nextText)', undefined),
      onSubmitClick: (0, _addonActions.action)('onSubmitClick'),
      submitDisabled: (0, _addonKnobs.boolean)('disable Submit button (SubmitDisabled)', false),
      submitIcon: (0, _addonKnobs.text)('optional icon for Next button (nextIcon)', undefined),
      submitHidden: (0, _addonKnobs.boolean)('hide Submit button (submitHidden)', false),
      submitText: (0, _addonKnobs.text)('custom text for Next button (nextText)', undefined)
    };
  },
  formControlsSimple: function formControlsSimple() {
    return {
      className: 'some-class',
      onNextClick: (0, _addonActions.action)('onNextClick'),
      nextDisabled: (0, _addonKnobs.boolean)('disable Next button (nextDisabled)', false),
      nextIcon: (0, _addonKnobs.text)('custom icon for Next button (nextIcon)', false),
      nextHidden: (0, _addonKnobs.boolean)('hide Next button (nextHidden)', false),
      nextText: (0, _addonKnobs.text)('custom text for Next button (nextText)', 'Save form'),
      onPreviousClick: (0, _addonActions.action)('onPreviousClick'),
      previousDisabled: (0, _addonKnobs.boolean)('disable Previous button (previousDisabled)', false),
      previousIcon: (0, _addonKnobs.text)('custom icon for Previous button (previousIcon)', 'arrow--left'),
      previousHidden: (0, _addonKnobs.boolean)('hide Next button (nextHidden)', true),
      previousText: (0, _addonKnobs.text)('custom text for Next button (nextText)', undefined),
      onSubmitClick: (0, _addonActions.action)('onSubmitClick'),
      submitDisabled: (0, _addonKnobs.boolean)('disable Submit button (SubmitDisabled)', false),
      submitIcon: (0, _addonKnobs.text)('optional icon for Next button (nextIcon)', undefined),
      submitHidden: (0, _addonKnobs.boolean)('hide Submit button (submitHidden)', false),
      submitText: (0, _addonKnobs.text)('custom text for Next button (nextText)', undefined)
    };
  }
};
(0, _react2.storiesOf)('Components|FormControls', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '60vw'
    }
  }, story());
}).add('Default (legacy, wizard)', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, props.formControls());
}).add('Simple form', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, props.formControlsSimple());
});