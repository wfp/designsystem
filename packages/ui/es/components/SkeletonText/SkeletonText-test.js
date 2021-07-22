import React from 'react';
import SkeletonText from '../SkeletonText';
import { shallow } from 'enzyme';
describe('SkeletonText', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SkeletonText, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton__text')).toEqual(true);
    });
  });
});
describe('SkeletonText Heading', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SkeletonText, {
      heading: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton__heading')).toEqual(true);
    });
  });
});