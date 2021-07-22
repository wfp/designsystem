import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';
describe('Item', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Item, {
      className: "some-class"
    }, "A simple link"));
    it('renders children as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should use the appropriate Item class', function () {
      expect(wrapper.hasClass('wfp--item')).toEqual(true);
    });
    it('has inner wrapper content', function () {
      expect(wrapper.exists('.wfp--item__content')).toBe(true);
    });
    it('has inner text wrapper', function () {
      expect(wrapper.exists('.wfp--item__text-wrapper')).toBe(true);
    }); // describe('renders Image as expected', () => {
    //   const imageWrapper = shallow(<Item image="" >A simple link</Item>);
    //   it('has error div classes as expected', () => {
    //       expect(imageWrapper.exists('.wfp--item__image')).toBe(true);
    //   })
    // });
  });
});