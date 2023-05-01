import React from 'react';
import Value from '.';
import { shallow } from 'enzyme';

describe('Value', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <Value
        value="value"
        secondaryValue="secondaryValue"
        title="title"
        className="some-class"
      />
    );
    it('should use the appropriate link class', () => {
      expect(wrapper.hasClass('wfp--value')).toEqual(true);
    });
    /*it('should inherit the href property', () => {
      expect(wrapper.find('h4').hasClass('wfp--value__title')).toBe(true);
    });
    it('should include child content', () => {
      expect(wrapper.text()).toEqual('A simple link');
    });*/
    it('should all for custom classes to be applied', () => {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });
});
