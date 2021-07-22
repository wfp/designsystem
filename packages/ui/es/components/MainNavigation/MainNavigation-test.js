import React from 'react';
import MainNavigation from '../MainNavigation';
import MainNavigationItem from '../MainNavigationItem';
import Link from '../Link';
import { shallow } from 'enzyme';
describe('MainNavigation', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(MainNavigation, {
      className: "some-class"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--main-navigation')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
    it('has children as expected', function () {
      expect(wrapper.find("ul").length).toBe(1);
    });
  });
});