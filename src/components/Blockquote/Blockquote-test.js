import React from 'react';
import Blockquote from '../Button';
import { shallow } from 'enzyme';

describe('Blockquote', () => {
  describe('Renders common props as expected', () => {
    const wrapper = shallow(
      <Blockquote className="extra-class">Lorem Ipsum</Blockquote>
    );
    it('Renders children as expected', () => {
      expect(wrapper.props().children.length).toEqual(3);
    });

    it('Should add extra classes via className', () => {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });
  });
});
