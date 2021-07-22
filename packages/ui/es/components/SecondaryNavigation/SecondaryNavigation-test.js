import React from 'react';
import { SecondaryNavigation } from '../SecondaryNavigation';
import { shallow, mount } from 'enzyme';
describe('SecondaryNavigation', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SecondaryNavigation, {
      className: "some-class",
      additional: "additional Information"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--secondary-navigation')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
    it('renders additional props as expected', function () {
      var additionalWrapper = mount( /*#__PURE__*/React.createElement(SecondaryNavigation, {
        additional: "additional Information"
      }, "Content"));
      expect(additionalWrapper.props().additional).toEqual('additional Information');
    });
  });
});