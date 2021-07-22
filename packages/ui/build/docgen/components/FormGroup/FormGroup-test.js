"use strict";

var _react = _interopRequireDefault(require("react"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormGroup', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
      className: "extra-class",
      legendText: "legendtest"
    }));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(0);
    });
    it('renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('wfp--fieldset')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should not render the data-invalid property by default', function () {
      expect(wrapper.props()['data-invalid']).toBe(undefined);
    });
    it('should render the data-invalid attribute when invalid is set', function () {
      var formgroup = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
        legendText: "legendtest",
        invalid: true
      }));
      expect(formgroup.props()['data-invalid']).toBe('');
    });
    it('should render wrapper as expected', function () {
      var formGroup = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
        legendText: "legendtest"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child1"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child2"
      })));
      expect(formGroup.length).toEqual(1);
    });
    it('should render children as expected', function () {
      var formGroup1 = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
        legendText: "legendtest"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "test-child"
      })));
      expect(formGroup1.find('.test-child').length).toBe(2);
    });
  });
});