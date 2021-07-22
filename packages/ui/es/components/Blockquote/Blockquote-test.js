import React from 'react';
import Blockquote from '../Button';
import { shallow } from 'enzyme';
describe('Blockquote', function () {
  describe('Renders common props as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Blockquote, {
      className: "extra-class"
    }, "Lorem Ipsum"));
    it('Renders children as expected', function () {
      expect(wrapper.props().children.length).toEqual(3);
    });
    it('Should add extra classes via className', function () {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });
  });
});