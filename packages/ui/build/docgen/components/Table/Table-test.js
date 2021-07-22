"use strict";

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("../Table"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormWizard', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      withBorder: true
    }));
    it('renders class as expected', function () {
      expect(wrapper.exists('.wfp--table')).toBe(true);
    });
    it('renders class on withBorder prop', function () {
      expect(wrapper.exists('.wfp--table--with-border')).toBe(true);
    });
    it('renders prop as expected', function () {
      expect(wrapper.props().withBorder).toBe(true);
    });
  });
});