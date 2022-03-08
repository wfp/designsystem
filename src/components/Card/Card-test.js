import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<Card isLink={false} kind="simple-card" />);

    const cardWrapper = () => wrapper.find('div.wfp--card-box');

    describe('cardWrapper', () => {
      it('renders as expected', () => {
        expect(cardWrapper().length).toBe(1);
      });
    });

    it('Should only set type to [simple-card, overlay] if one is passed via props', () => {
      wrapper.setProps({ type: 'simple-card' });
      expect(wrapper.props().type).toEqual('simple-card');
      wrapper.setProps({ type: 'overlay' });
      expect(wrapper.props().type).toEqual('overlay');
    });
  });
});
