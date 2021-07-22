"use strict";

var _react = _interopRequireDefault(require("react"));

var _Story = _interopRequireDefault(require("../Story"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Story', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Story.default, {
      className: "some-class"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--story')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });
});