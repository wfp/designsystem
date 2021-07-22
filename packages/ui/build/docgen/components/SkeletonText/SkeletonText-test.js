"use strict";

var _react = _interopRequireDefault(require("react"));

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SkeletonText', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SkeletonText.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton__text')).toEqual(true);
    });
  });
});
describe('SkeletonText Heading', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SkeletonText.default, {
      heading: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton__heading')).toEqual(true);
    });
  });
});