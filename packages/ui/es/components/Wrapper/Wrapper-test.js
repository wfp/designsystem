import React from 'react';
import Wrapper from '../Wrapper';
import { shallow } from 'enzyme';
describe('ReadMore', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Wrapper, {
      className: "some-class"
    }, "Content"));
    it('should all for custom classes to be applied', function () {
      expect(wrapper.hasClass('wfp--wrapper')).toEqual(true);
    });
  });
  describe('wrapper with background prop', function () {
    it('prop lighter should have class as expected', function () {
      var lightWrapper = shallow( /*#__PURE__*/React.createElement(Wrapper, {
        background: "lighter"
      }, "Content"));
      expect(lightWrapper.hasClass('wfp--wrapper--background-lighter')).toEqual(true);
    });
    it('prop dark should have class as expected', function () {
      var darkWrapper = shallow( /*#__PURE__*/React.createElement(Wrapper, {
        background: "dark"
      }, "Content"));
      expect(darkWrapper.hasClass('wfp--wrapper--background-dark')).toEqual(true);
    });
  });
  describe('wrapper with pageWidth prop', function () {
    it('should have class as expected', function () {
      var pageWrapper = shallow( /*#__PURE__*/React.createElement(Wrapper, {
        pageWidth: "lg"
      }, "Content"));
      expect(pageWrapper.hasClass('wfp--wrapper--width-lg')).toEqual(true);
    });
  });
  describe('wrapper with mobilePageWidth prop', function () {
    it('should have class as expected', function () {
      var mobileWrapper = shallow( /*#__PURE__*/React.createElement(Wrapper, {
        mobilePageWidth: "full"
      }, "Content"));
      expect(mobileWrapper.hasClass('wfp--wrapper--width-mobile-full')).toEqual(true);
    });
  });
});