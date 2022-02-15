import React from 'react';
import StepNavigationItem from '../StepNavigationItem';
import { shallow } from 'enzyme';

describe('StepNavigationItem', () => {

  describe('renders as expected', () => {
    const wrapper = shallow(<StepNavigationItem status="locked"/>);
    it('renders <li> length as exected', () => {
      expect(wrapper.find('li')).toHaveLength(1);
    })

     it('renders <li> with expected className', () => {
      expect(wrapper.hasClass('wfp--step-navigation__nav-item')).toEqual(true);
    });

    it('Should always render with [role="presentation"] by default', () => {
      expect(wrapper.props().role).toEqual('presentation');
    });
  });

  

});