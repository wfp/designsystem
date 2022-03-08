import React from 'react';
import { SecondaryNavigation } from '../SecondaryNavigation';
import { shallow, mount } from 'enzyme';

describe('SecondaryNavigation', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <SecondaryNavigation
        className="some-class"
        additional="additional Information"
      >
        Content
      </SecondaryNavigation>
    );

    it('has classes as expected', () => {
      expect(wrapper.exists('.wfp--secondary-navigation')).toBe(true);
    });

    it('should allow for custom classes to be applied', () => {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });

    it('renders additional props as expected', () => {
      const additionalWrapper = mount(
        <SecondaryNavigation additional="additional Information">
          Content
        </SecondaryNavigation>
      );
      expect(additionalWrapper.props().additional).toEqual(
        'additional Information'
      );
    });
  });
});
