import React from 'react';
import Item from '../Item';
import { shallow } from 'enzyme';

describe('Link', () => {
  describe('Renders as expected', () => {
    const link = shallow(<Item className="some-class">A simple link</Item>);
    it('should use the appropriate link class', () => {
      expect(link.hasClass('wfp--item')).toEqual(true);
    });
  });
});
