import React from 'react';
import SelectItemGroup from '../SelectItemGroup';
import { shallow } from 'enzyme';
describe('SelectItemGroup', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SelectItemGroup, {
      className: "extra-class",
      label: "test"
    }));
    it('should have the expected classes', function () {
      expect(wrapper.hasClass('wfp--select-optgroup')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('Should add the label that is passed', function () {
      wrapper.setProps({
        label: 'placeholder-item'
      });
      expect(wrapper.props().label).toEqual('placeholder-item');
    });
    it('Should not be disabled by default', function () {
      expect(wrapper.props().disabled).toEqual(false);
    });
    it('should set disabled as expected', function () {
      expect(wrapper.props().disabled).toEqual(false);
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.props().disabled).toEqual(true);
    });
  });
});