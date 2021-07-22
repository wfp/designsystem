"use strict";

var _react = _interopRequireDefault(require("react"));

var _Tag = _interopRequireDefault(require("../Tag"));

var _Tag2 = _interopRequireDefault(require("../Tag/Tag.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tag', function () {
  describe('Renders as expected', function () {
    it('should render with the appropriate type', function () {
      var tag = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tag.default, {
        type: "info"
      }));
      expect(tag.hasClass('wfp--tag')).toEqual(true);
      expect(tag.hasClass('wfp--tag--info')).toEqual(true);
    });
    it('should provide a default label based on the type', function () {
      var tag = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tag.default, {
        type: "success"
      }));
      expect(tag.text()).toEqual('Success');
      tag.setProps({
        type: 'custom'
      });
      expect(tag.text()).toEqual('Custom');
    });
  });
  it('should allow for a custom label', function () {
    var tag = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tag.default, {
      type: "custom"
    }, "New Version!"));
    expect(tag.text()).toEqual('New Version!');
  });
  it('should support extra class names', function () {
    var tag = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tag.default, {
      type: "info",
      className: "extra-class"
    }));
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});
describe('TagSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tag2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--tag')).toEqual(true);
    });
  });
});