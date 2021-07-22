"use strict";

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("../Form"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Form', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Form.default, {
      className: "extra-class"
    }));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(0);
    });
    it('renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('wfp--form')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should render wrapper as expected', function () {
      var form = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Form.default, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child1"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child2"
      })));
      expect(form.length).toEqual(1);
    });
    it('should render children as expected', function () {
      var form1 = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Form.default, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child"
      })));
      expect(form1.find('.test-child').length).toBe(2);
    });
    it('should handle submit events', function () {
      var onSubmit = jest.fn();
      var form1 = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Form.default, null, /*#__PURE__*/_react.default.createElement("button", {
        className: "button",
        type: "submit",
        onSubmit: onSubmit
      }, "Submit")));
      var btn = form1.find('button');
      btn.simulate('submit');
      expect(onSubmit).toBeCalled();
    });
  });
});