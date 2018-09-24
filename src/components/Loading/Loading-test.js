import React from 'react';
import Loading from '../Loading';
import { mount } from 'enzyme';

describe('Loading', () => {
  describe('Renders as expected', () => {
    const wrapper = mount(<Loading className="extra-class" />);
    const overlay = wrapper.find('.wfp--loading-overlay');
    const loader = wrapper.find('.wfp--loading');
    const svg = loader.find('svg');

    it('should render with an overlay', () => {
      expect(overlay.length).toEqual(1);
    });

    it('should render with a loader', () => {
      expect(loader.length).toEqual(1);
    });

    it('shoud render an svg', () => {
      expect(svg.length).toEqual(1);
    });

    it('overlay has the expected class', () => {
      expect(overlay.hasClass('wfp--loading-overlay')).toEqual(true);
    });

    it('loader has the expected classes', () => {
      expect(loader.hasClass('wfp--loading')).toEqual(true);
    });

    it('svg has the correct class', () => {
      expect(svg.hasClass('wfp--loading__svg')).toEqual(true);
    });

    it('should add extra classes that are passed via className', () => {
      expect(loader.hasClass('extra-class')).toEqual(true);
    });
  });

  describe('Sets props and state as expected', () => {
    const wrapper = mount(<Loading className="extra-class" />);

    it('should remove and add wfp--loading--stop class', () => {
      wrapper.setProps({ active: false });
      expect(
        wrapper.find('.wfp--loading').hasClass('wfp--loading--stop')
      ).toEqual(true);
      wrapper.setProps({ active: true });
      expect(
        wrapper.find('.wfp--loading').hasClass('wfp--loading--stop')
      ).toEqual(false);
    });

    it('should not render overlay when withOverlay is set to false', () => {
      wrapper.setProps({ withOverlay: false });
      const overlay = wrapper.find('.wfp--loading-overlay');
      expect(overlay.length).toEqual(0);
    });
  });
});
