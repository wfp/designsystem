import React from 'react';
import StepNavigationItem from '../StepNavigationItem';
import { shallow } from 'enzyme';

describe('StepNavigationItem', () => {
  describe('renders as expected', () => {
    const wrapper = shallow(<StepNavigationItem status="locked" />);
    it('renders <li> with expected className', () => {
      expect(wrapper.hasClass('wfp--step-navigation__nav-item--locked')).toBe(
        true
      );
    });
  });
});
