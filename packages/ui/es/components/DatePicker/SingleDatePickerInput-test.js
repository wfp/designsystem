import React from 'react';
import { SingleDatePickerInput } from '../DatePicker';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import { mount, shallow } from 'enzyme';
describe('SingleDatePickerInput', function () {
  describe('Renders as expected', function () {
    var minProps = {
      datePicker: SingleDatePicker,
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
    var wrapper = shallow( /*#__PURE__*/React.createElement(SingleDatePickerInput, minProps));
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