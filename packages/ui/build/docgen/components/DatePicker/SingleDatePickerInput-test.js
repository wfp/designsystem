"use strict";

var _react = _interopRequireDefault(require("react"));

var _DatePicker = require("../DatePicker");

var _reactDates = require("react-dates");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SingleDatePickerInput', function () {
  describe('Renders as expected', function () {
    var minProps = {
      datePicker: _reactDates.SingleDatePicker,
      labelText: 'Label text (labelText)',
      placeholder: 'Placeholder text (placeholder)',
      disabled: false,
      hideLabel: false,
      showClearDate: false,
      invalid: true,
      invalidText: 'A valid value is required',
      showDefaultInputIcon: true,
      inputIconPosition: 'after',
      helperText: 'Optional helper text.'
    };
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_DatePicker.SingleDatePickerInput, minProps));
    it('has default classes as expected', function () {
      expect(wrapper.hasClass('wfp--form-item')).toEqual(true);
    });
    it('has error div class when invalid prop is passed', function () {
      expect(wrapper.exists('.wfp--form-requirement')).toBe(true);
    });
    it('has error message shows passed message', function () {
      expect(wrapper.find('div.wfp--form-requirement').text()).toEqual('A valid value is required');
    });
  });
});