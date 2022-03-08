import React from 'react';
import Hero from '../Hero';
import { shallow, mount } from 'enzyme';

describe('Hero', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <Hero href="www.google.com" className="some-class" kind="landscape">
        A simple link
      </Hero>
    );
    it('should use the appropriate link class', () => {
      expect(wrapper.length).toBe(1);
    });
    it('should use the appropriate link class', () => {
      expect(wrapper.hasClass('wfp--photo-card')).toEqual(true);
    });
    it('Renders as an <a> element with an href', () => {
      expect(wrapper.is('a')).toBe(true);
    });

    it('should inherit the href property', () => {
      expect(wrapper.props().href).toEqual('www.google.com');
    });

    it('should all for custom classes to be applied', () => {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('Renders as expected', () => {
    const wrapper = shallow(
      <Hero className="some-class" kind="related" isLink={false}>
        A simple link
      </Hero>
    );
    it('Renders as expected', () => {
      expect(wrapper.length).toBe(1);
    });

    it('Renders as a <div> element with isLink props set as false', () => {
      expect(wrapper.is('div')).toBe(true);
    });

    describe('Renders content as expected', () => {
      const contentWrapper = () =>
        wrapper.find('div.wfp--photo-card__background');
      const infoWrapper = () => wrapper.find('div.wfp--photo-card__info');

      it('renders content background class as expected', () => {
        expect(
          contentWrapper().hasClass('wfp--photo-card__background')
        ).toEqual(true);
      });

      it('renders card info class as expected', () => {
        expect(infoWrapper().hasClass('wfp--photo-card__info')).toEqual(true);
      });

      it('renders card info content as expected', () => {
        expect(infoWrapper().props().children.length).toBe(2);
      });

      // it('render kind props as expected', () => {
      //   wrapper.setProps({ kind: 'related' });
      //   expect(wrapper.props().kind).toEqual('related');
      // });
    });
  });
});
