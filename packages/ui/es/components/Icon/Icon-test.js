import React from 'react';
import { iconSearch } from '@wfp/icons';
import Icon, { svgShapes, isPrefixed } from '../Icon';
import { mount } from 'enzyme';
describe('Icon', function () {
  describe('Renders as expected', function () {
    var props = {
      className: 'extra-class',
      icon: iconSearch,
      width: '20',
      height: '20',
      description: 'close the thing',
      style: {
        transition: '2s'
      }
    };
    var wrapper = mount( /*#__PURE__*/React.createElement(Icon, props));
    it('Renders `description` as expected', function () {
      expect(wrapper.props().description).toEqual('close the thing');
    });
    it('should have a default role prop', function () {
      expect(wrapper.props().role).toEqual('img');
    });
    it('should have expected viewBox on <svg>', function () {
      expect(wrapper.find('svg').props().viewBox).not.toEqual('');
    });
    it('should add extra classes that are passed via className', function () {
      expect(wrapper.props().className).toEqual('extra-class');
    });
    it('should recieve width props', function () {
      expect(wrapper.props().width).toEqual('20');
    });
    it('should recieve height props', function () {
      expect(wrapper.props().height).toEqual('20');
    });
    it('should recieve style props', function () {
      expect(wrapper.props().style).toEqual({
        transition: '2s'
      });
    });
  });
  describe('svgShapes', function () {
    it('returns empty when given an icon with no valid svgProp', function () {
      var svgData = {
        invalidProp: [{
          invalidAttribute: 43
        }]
      };
      var content = svgShapes(svgData);
      expect(content.length).toBeGreaterThan(0);
      expect(content).toEqual(['']);
    });
  });
  describe('isPrefixed', function () {
    it('returns true when given a name with icon-- prefix', function () {
      var prefixed = isPrefixed('icon--search');
      expect(prefixed).toBe(true);
    });
    it('returns false when given a name without icon-- prefix', function () {
      var prefixed = isPrefixed('search');
      expect(prefixed).toBe(false);
    });
  });
});