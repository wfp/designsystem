"use strict";

var _react = _interopRequireDefault(require("react"));

var _TabContent = _interopRequireDefault(require("../TabContent"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TabContent', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_TabContent.default, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "child"
    }, "content"), /*#__PURE__*/_react.default.createElement("div", {
      className: "child"
    }, "content")));
    it('renders children as expected', function () {
      expect(wrapper.props().children.length).toEqual(2);
    });
    it('sets selected if passed in via props', function () {
      wrapper.setProps({
        selected: true
      });
      expect(wrapper.props().selected).toEqual(true);
    });
    it('sets selected and hidden props with opposite boolean values', function () {
      wrapper.setProps({
        selected: true
      });
      expect(wrapper.props().hidden).toEqual(false);
    });
  });
});