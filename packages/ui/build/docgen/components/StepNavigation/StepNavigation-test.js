"use strict";

var _react = _interopRequireDefault(require("react"));

var _StepNavigation = _interopRequireDefault(require("../StepNavigation"));

var _StepNavigationItem = _interopRequireDefault(require("../StepNavigationItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tabs', function () {
  describe('renders as expected', function () {
    describe('navigation (<nav>)', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_StepNavigation.default, {
        className: "extra-class"
      }, /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
        label: "Item without Status",
        page: 0
      }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
        label: "Item without Status",
        page: 1
      })));
      it('renders extra classes on <div> via className prop', function () {
        expect(wrapper.find('nav').hasClass('extra-class')).toBe(true);
      });
    });
  });
});