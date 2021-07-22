"use strict";

var _react = _interopRequireDefault(require("react"));

var _ReadMore = _interopRequireDefault(require("../ReadMore"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ReadMore', function () {
  describe('Renders as expected', function () {
    var readMore = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ReadMore.default, {
      className: "some-class"
    }, "Content"));
    it('should use the appropriate link class', function () {
      expect(readMore.hasClass('wfp--read-more')).toEqual(true);
    });
    it('should all for custom classes to be applied', function () {
      expect(readMore.hasClass('some-class')).toEqual(true);
    });
  });
});