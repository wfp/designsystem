import React from 'react';
import StepNavigation from '../StepNavigation';
import StepNavigationItem from '../StepNavigationItem';
import { shallow } from 'enzyme';

describe('Tabs', () => {
  describe('renders as expected', () => {
    describe('navigation (<nav>)', () => {
      const wrapper = shallow(
        <StepNavigation className="extra-class">
          <StepNavigationItem label="Item without Status" page={0} />
          <StepNavigationItem label="Item without Status" page={1} />
        </StepNavigation>
      );
      it('renders extra classes on <div> via className prop', () => {
        expect(wrapper.find('nav').hasClass('extra-class')).toBe(true);
      });
    });
  });
});
