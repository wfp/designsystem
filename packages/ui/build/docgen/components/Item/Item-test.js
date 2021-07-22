"use strict";

var _react = _interopRequireDefault(require("react"));

var _Item = _interopRequireDefault(require("../Item"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Item', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Item.default, {
      className: "some-class"
    }, "A simple link"));
    it('renders children as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should use the appropriate Item class', function () {
      expect(wrapper.hasClass('wfp--item')).toEqual(true);
    });
    it('has inner wrapper content', function () {
      expect(wrapper.exists('.wfp--item__content')).toBe(true);
    });
    it('has inner text wrapper', function () {
      expect(wrapper.exists('.wfp--item__text-wrapper')).toBe(true);
    }); // describe('renders Image as expected', () => {
    //   const imageWrapper = shallow(<Item image="" >A simple link</Item>);
    //   it('has error div classes as expected', () => {
    //       expect(imageWrapper.exists('.wfp--item__image')).toBe(true);
    //   })
    // });
  });
});