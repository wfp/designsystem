"use strict";

var _react = _interopRequireDefault(require("react"));

var _InfoBar = _interopRequireDefault(require("../InfoBar"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InfoBar', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_InfoBar.default, null, "Info bar content "));
    it('renders children as exepected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('renders root classes as expected', function () {
      expect(wrapper.hasClass('wfp--info-bar')).toEqual(true);
    });
  });
});