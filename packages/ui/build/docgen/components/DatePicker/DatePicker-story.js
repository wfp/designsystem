"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _SingleDatePickerInput = require("./SingleDatePickerInput");

var _DateRangePickerInput = require("./DateRangePickerInput");

var _configureStore = _interopRequireDefault(require("../../internal/configureStore"));

var _RfFormWrapper = _interopRequireDefault(require("../../internal/RfFormWrapper"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

require("react-dates/initialize");

var _reactDates = require("react-dates");

var _ReduxFormWrapper = _interopRequireDefault(require("../ReduxFormWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  datePicker: function datePicker() {
    return {
      datePicker: _reactDates.SingleDatePicker,
      date: (0, _moment.default)(),
      labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Text Input label'),
      placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Placeholder text'),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
      showClearDate: (0, _addonKnobs.boolean)('Show clear dates button (showClearDate)', false),
      invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
      invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'A valid value is required'),
      showDefaultInputIcon: (0, _addonKnobs.boolean)('Show Input Icon (showDefaultInputIcon)', true),
      //showClearDates: boolean('Show clear date (showClearDates)', true),
      inputIconPosition: (0, _addonKnobs.text)('Icon Position(inputIconPosition)', 'after'),
      helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
      onClick: (0, _addonActions.action)('onClick'),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  dateRangePicker: function dateRangePicker() {
    return {
      datePicker: _reactDates.DateRangePicker,
      labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Text Input label'),
      placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Placeholder text'),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
      invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
      showClearDates: (0, _addonKnobs.boolean)('Show clear dates button (showClearDates)', false),
      showDefaultInputIcon: (0, _addonKnobs.boolean)('Show Input Icon (showDefaultInputIcon)', true),
      inputIconPosition: (0, _addonKnobs.text)('Icon Position(showDefaultInputIcon)', 'after'),
      invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'A valid value is required'),
      helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
      onClick: (0, _addonActions.action)('onClick'),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  datePickerField: function datePickerField() {
    return {
      component: _ReduxFormWrapper.default,
      inputComponent: _SingleDatePickerInput.SingleDatePickerInput,
      datePicker: _reactDates.SingleDatePicker,
      name: (0, _addonKnobs.text)('The input name (name)', 'inputname'),
      helperText: (0, _addonKnobs.text)('Helper', 'inputname'),
      labelText: 'Select a date'
    };
  },
  dateRangePickerField: function dateRangePickerField() {
    return {
      component: _ReduxFormWrapper.default,
      inputComponent: _DateRangePickerInput.DateRangePickerInput,
      datePicker: _reactDates.DateRangePicker,
      name: 'datepicker',
      labelText: 'Select a date range'
    };
  }
};
(0, _react2.storiesOf)('Components|DatePicker', module).addDecorator(_addonKnobs.withKnobs).add('SingleDatePicker (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_SingleDatePickerInput.SingleDatePickerInput, props.datePicker());
}).add('DateRangePicker (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_DateRangePickerInput.DateRangePickerInput, props.dateRangePicker());
});
(0, _react2.storiesOf)('Components|DatePicker', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _configureStore.default
  }, /*#__PURE__*/_react.default.createElement(_RfFormWrapper.default, {
    sampleData: {
      datepicker: {
        startDate: (0, _moment.default)(),
        endDate: (0, _moment.default)().add(15, 'days')
      },
      inputname: (0, _moment.default)()
    }
  }, ' ', story()));
}).add('DatePicker Field (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_reduxForm.Field, _extends({}, props.datePickerField(), {
    format: function format(value) {
      return value ? (0, _moment.default)(value) : undefined;
    },
    normalize: function normalize(data) {
      return data && data.value && data.value.format();
    }
  }));
}).add('DateRangePicker Field (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_reduxForm.Field, _extends({}, props.dateRangePickerField(), {
    format: function format(value) {
      return value ? {
        startDate: (0, _moment.default)(value.startDate),
        endDate: (0, _moment.default)(value.endDate)
      } : undefined;
    }
  }));
});