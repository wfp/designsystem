"use strict";

var _react = _interopRequireDefault(require("react"));

var _Module = require("../Module");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Module', function () {
  describe('Renders as expected', function () {
    var testModule = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Module.Module, {
      className: "extra-class"
    }, /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, "Body")));
    it('renders a Module', function () {
      expect(testModule.length).toEqual(1);
    });
    it('should render the appropriate classes', function () {
      expect(testModule.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(testModule.find(_Module.ModuleBody).length).toEqual(1);
    });
  });
  describe('ModuleBody', function () {
    describe('Renders as expected', function () {
      var moduleBody = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, {
        className: "extra-class",
        centered: true
      }, "Body"));
      it('renders a ModuleBody', function () {
        expect(moduleBody.length).toEqual(1);
      });
      it('has the expected class', function () {
        expect(moduleBody.hasClass('wfp--module__content')).toEqual(true);
        expect(moduleBody.hasClass('extra-class')).toEqual(true);
      });
      it('has the centered class when centered prop is true', function () {
        expect(moduleBody.hasClass('wfp--module__content--centered')).toEqual(true);
      });
      it('should render children as expected', function () {
        expect(moduleBody.text()).toEqual('Body');
      });
    });
  });
});