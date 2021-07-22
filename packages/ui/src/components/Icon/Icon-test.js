import React from 'react';
import { iconSearch } from '@wfp/icons-react';
import Icon, { svgShapes, isPrefixed } from '../Icon';
import { mount } from 'enzyme';

describe('Icon', () => {
  describe('Renders as expected', () => {
    const props = {
      className: 'extra-class',
      icon: iconSearch,
      width: '20',
      height: '20',
      description: 'close the thing',
      style: {
        transition: '2s',
      },
    };

    const wrapper = mount(<Icon {...props} />);

    it('Renders `description` as expected', () => {
      expect(wrapper.props().description).toEqual('close the thing');
    });

    it('should have a default role prop', () => {
      expect(wrapper.props().role).toEqual('img');
    });

    it('should have expected viewBox on <svg>', () => {
      expect(wrapper.find('svg').props().viewBox).not.toEqual('');
    });

    it('should add extra classes that are passed via className', () => {
      expect(wrapper.props().className).toEqual('extra-class');
    });

    it('should recieve width props', () => {
      expect(wrapper.props().width).toEqual('20');
    });

    it('should recieve height props', () => {
      expect(wrapper.props().height).toEqual('20');
    });

    it('should recieve style props', () => {
      expect(wrapper.props().style).toEqual({ transition: '2s' });
    });
  });

  describe('svgShapes', () => {
    it('returns empty when given an icon with no valid svgProp', () => {
      const svgData = {
        invalidProp: [{ invalidAttribute: 43 }],
      };
      const content = svgShapes(svgData);
      expect(content.length).toBeGreaterThan(0);
      expect(content).toEqual(['']);
    });
  });

  describe('isPrefixed', () => {
    it('returns true when given a name with icon-- prefix', () => {
      const prefixed = isPrefixed('icon--search');
      expect(prefixed).toBe(true);
    });

    it('returns false when given a name without icon-- prefix', () => {
      const prefixed = isPrefixed('search');
      expect(prefixed).toBe(false);
    });
  });
});
