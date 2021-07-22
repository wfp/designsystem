import React from 'react';
import Unit from '../User';
import { mount } from 'enzyme';
describe('Unit', function () {
  describe('renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Unit, {
      type: "usd"
    }, "123"));
    it('renders as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should add extra classes that are passed via className', function () {
      wrapper.setProps({
        className: 'extra-class'
      });
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});