import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Hero from './Hero';
import { shallow } from 'enzyme';
import { cleanup, render, screen } from '@testing-library/react';

describe('Hero', () => {
  
  describe('Renders as expected', () => {
    afterEach(cleanup);
    // const wrapper = shallow(
      
    // );
    it('should render content as ecpected', () => {
      render(<Hero href="www.google.com" className="some-class" kind="landscape">
      A simple link
    </Hero>)
      expect(screen.getByText('A simple link')).toBeInTheDocument();
    });

    it('should use the appropriate link class', () => {
      render(<Hero href="www.google.com" className="some-class" kind="landscape">
      A simple link
    </Hero>)
      expect(screen.getByText('A simple link')).toHaveClass('wfp--photo-card');
    });
    
    it('Renders as an <a> element with an href', () => {
      render(<Hero data-testid="hero" href="www.google.com" className="some-class" kind="landscape">
      A simple link
    </Hero>)
      expect(screen.getByText('A simple link')).toHaveAttribute('href','www.google.com');
    });
  
    
    it('should call for custom classes to be applied', () => {
      render(<Hero href="www.google.com" className="some-class" kind="landscape">
      A simple link
    </Hero>)
      expect(screen.getByText('A simple link')).toHaveClass('some-class');
    });

  });

  describe('Renders as expected', () => {
    const wrapper = shallow(
      <Hero className="some-class" kind="related" isLink={false}>
        A simple link
      </Hero>
    )
    it('Renders as expected', () => {
      expect(wrapper.length).toBe(1);
    });

    it('Renders as a <div> element with isLink props set as false', () => {
      expect(wrapper.is('div')).toBe(true);
    });

    describe('Renders content as expected', () => {
      const contentWrapper = () => wrapper.find('div.wfp--photo-card__background');
      const infoWrapper = () => wrapper.find('div.wfp--photo-card__info');

      it("renders content background class as expected", () => {
        expect(contentWrapper().hasClass('wfp--photo-card__background')).toEqual(true)
      })

      it("renders hero info class as expected", () => {
        expect(infoWrapper().hasClass('wfp--photo-card__info')).toEqual(true)
      })

      it("renders hero info content as expected", () => {
        expect(infoWrapper().props().children.length).toBe(2)
      })
    })

    
  })


  
});
