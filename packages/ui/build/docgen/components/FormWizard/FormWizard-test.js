"use strict";

var _react = _interopRequireDefault(require("react"));

var _FormWizard = _interopRequireDefault(require("../FormWizard"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormWizard', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormWizard.default, {
      sidebar: /*#__PURE__*/_react.default.createElement("div", null, "The Sidebar content")
    }, "formhint"));
    it('renders form wizard wrapper', function () {
      expect(wrapper.exists('.wfp--form-wizard')).toBe(true);
    });
  });
  describe('Renders as a sticky sidebar', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_FormWizard.default, {
      stickySidebar: true,
      sidebar: /*#__PURE__*/_react.default.createElement("div", null, "The Sidebar content")
    }, "formhint"));
    it('prop as expected', function () {
      expect(wrapper.props().stickySidebar).toEqual(true);
    });
    it('classes to stickySidebar prop ', function () {
      expect(wrapper.exists('.wfp--form-wizard--sticky')).toBe(true);
    });
  });
});