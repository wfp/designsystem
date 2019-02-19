import React from 'react';
import Unit from '../User';
import { mount } from 'enzyme';

describe('Unit', () => {
  describe('renders as expected', () => {
    const wrapper = mount(<Unit type="usd">123</Unit>);

    it('renders as expected', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should add extra classes that are passed via className', () => {
      wrapper.setProps({ className: 'extra-class' });
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
