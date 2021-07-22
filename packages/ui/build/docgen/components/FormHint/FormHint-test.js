"use strict";

var _react = _interopRequireDefault(require("react"));

var _FormHint = _interopRequireDefault(require("../FormHint"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormHint', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormHint.default, null, "formhint"));
    it('renders <Tooltip> as the main wrapper', function () {
      expect(wrapper.exists('.wfp--form-hint')).toBe(true);
    });
  });
});