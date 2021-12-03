import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';

describe('Item', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<Item className="some-class">A simple link</Item>);

    it('renders children as expected', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should use the appropriate Item class', () => {
      expect(wrapper.hasClass('wfp--item')).toEqual(true);
    });

    it('has inner wrapper content', () => {
      expect(wrapper.exists('.wfp--item__content')).toBe(true);
  })
    it('has inner text wrapper', () => {
      expect(wrapper.exists('.wfp--item__text-wrapper')).toBe(true);
    })

    // describe('renders Image as expected', () => {
    //   const imageWrapper = shallow(<Item image="" >A simple link</Item>);

    //   it('has error div classes as expected', () => {
    //       expect(imageWrapper.exists('.wfp--item__image')).toBe(true);
    //   })
    // });

  });
});
