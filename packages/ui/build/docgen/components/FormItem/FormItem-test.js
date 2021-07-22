"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FormItem = _interopRequireDefault(require("../FormItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormItem', function () {
  it('should render', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormItem.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});