"use strict";

var _react = _interopRequireDefault(require("react"));

var _FormError = _interopRequireDefault(require("../FormError"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormError', function () {
  describe('Renders as expected', function () {
    var errorMessage = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FormError.default, {
      className: "another-class",
      submitFailed: true,
      message: {
        generic: 'Something went terribly wrong',
        fields: [{
          key: 'fieldkey',
          message: 'One field which is wrong'
        }, {
          key: 'anotherfieldkey',
          message: 'Another field which is wrong'
        }]
      }
    }));
    it('should use the appropriate link class', function () {
      expect(errorMessage.hasClass('another-class')).toEqual(true);
    });
  });
});