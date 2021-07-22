import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
describe('Card', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Card, {
      isLink: false,
      kind: "simple-card"
    }));

    var cardWrapper = function cardWrapper() {
      return wrapper.find('div.wfp--card-box');
    };

    describe('cardWrapper', function () {
      it('renders as expected', function () {
        expect(cardWrapper().length).toBe(1);
      });
    });
    it('Should only set type to [simple-card, overlay] if one is passed via props', function () {
      wrapper.setProps({
        type: 'simple-card'
      });
      expect(wrapper.props().type).toEqual('simple-card');
      wrapper.setProps({
        type: 'overlay'
      });
      expect(wrapper.props().type).toEqual('overlay');
    });
  });
});