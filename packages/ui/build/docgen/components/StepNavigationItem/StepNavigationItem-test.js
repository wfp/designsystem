"use strict";

var _react = _interopRequireDefault(require("react"));

var _StepNavigationItem = _interopRequireDefault(require("../StepNavigationItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StepNavigationItem', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
      status: "locked"
    }));
    it('renders <li> with expected className', function () {
      expect(wrapper.hasClass('wfp--step-navigation__nav-item--locked')).toBe(true);
    });
  });
});