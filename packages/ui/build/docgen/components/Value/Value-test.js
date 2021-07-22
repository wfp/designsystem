"use strict";

var _react = _interopRequireDefault(require("react"));

var _Value = _interopRequireDefault(require("../Value"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Value', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Value.default, {
      value: "value",
      secondaryValue: "secondaryValue",
      title: "title",
      className: "some-class"
    }));
    it('should use the appropriate link class', function () {
      expect(wrapper.hasClass('wfp--value')).toEqual(true);
    });
    /*it('should inherit the href property', () => {
      expect(wrapper.find('h4').hasClass('wfp--value__title')).toBe(true);
    });
    it('should include child content', () => {
      expect(wrapper.text()).toEqual('A simple link');
    });*/

    it('should all for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });
});