"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _icons = require("@wfp/icons");

var _Icon = _interopRequireWildcard(require("../Icon"));

var _enzyme = require("enzyme");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon', function () {
  describe('Renders as expected', function () {
    var props = {
      className: 'extra-class',
      icon: _icons.iconSearch,
      width: '20',
      height: '20',
      description: 'close the thing',
      style: {
        transition: '2s'
      }
    };
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Icon.default, props));
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
      var content = (0, _Icon.svgShapes)(svgData);
      expect(content.length).toBeGreaterThan(0);
      expect(content).toEqual(['']);
    });
  });
  describe('isPrefixed', function () {
    it('returns true when given a name with icon-- prefix', function () {
      var prefixed = (0, _Icon.isPrefixed)('icon--search');
      expect(prefixed).toBe(true);
    });
    it('returns false when given a name without icon-- prefix', function () {
      var prefixed = (0, _Icon.isPrefixed)('search');
      expect(prefixed).toBe(false);
    });
  });
});