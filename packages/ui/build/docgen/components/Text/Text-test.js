"use strict";

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../Text"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Text.default, null, "test child here"));
    it('renders as expected ', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should render classes as exected', function () {
      var textWrapper = function textWrapper() {
        return wrapper.find('div.wfp--text');
      };

      expect(textWrapper().hasClass('wfp--text')).toBe(true);
    });
  });
});