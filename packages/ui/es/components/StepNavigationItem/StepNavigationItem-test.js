import React from 'react';
import StepNavigationItem from '../StepNavigationItem';
import { shallow } from 'enzyme';
describe('StepNavigationItem', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(StepNavigationItem, {
      status: "locked"
    }));
    it('renders <li> with expected className', function () {
      expect(wrapper.hasClass('wfp--step-navigation__nav-item--locked')).toBe(true);
    });
  });
});