import React from 'react';
import Wrapper from '../Wrapper';
import { shallow } from 'enzyme';

describe('ReadMore', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <Wrapper className="some-class">Content</Wrapper>
    );
    it('should all for custom classes to be applied', () => {
      expect(wrapper.hasClass('wfp--wrapper')).toEqual(true);
    });
  });

  describe('wrapper with background prop', () => {
    
    it('prop lighter should have class as expected', () => {
        const lightWrapper = shallow(
            <Wrapper background="lighter">Content</Wrapper>
          );
        expect(lightWrapper.hasClass('wfp--wrapper--background-lighter')).toEqual(true);
    });

    it('prop dark should have class as expected', () => {
        const darkWrapper = shallow(
            <Wrapper background="dark">Content</Wrapper>
          );
        expect(darkWrapper.hasClass('wfp--wrapper--background-dark')).toEqual(true);
    });
  });

  describe('wrapper with pageWidth prop', () => {
    
    it('should have class as expected', () => {
        const pageWrapper = shallow(
            <Wrapper pageWidth="lg">Content</Wrapper>
          );
        expect(pageWrapper.hasClass('wfp--wrapper--width-lg')).toEqual(true);
    });
  });

  describe('wrapper with mobilePageWidth prop', () => {
    
    it('should have class as expected', () => {
        const mobileWrapper = shallow(
            <Wrapper mobilePageWidth="full">Content</Wrapper>
          );
        expect(mobileWrapper.hasClass('wfp--wrapper--width-mobile-full')).toEqual(true);
    });
  });
});
