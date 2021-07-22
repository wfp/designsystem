"use strict";

var _react = _interopRequireDefault(require("react"));

var _List = require("../List");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('List', function () {
  describe('Renders as expected', function () {
    var list = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_List.List, {
      className: "some-class"
    }, /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "First Item"), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Second Item")));
    it('should use the appropriate link class', function () {
      var listClass = list.find('.wfp--list');
      expect(listClass.hasClass('wfp--list')).toEqual(true);
    });
    it('Renders children as expected', function () {
      expect(list.props().children.length).toEqual(2);
    });
    it('should all for custom classes to be applied', function () {
      expect(list.hasClass('some-class')).toEqual(true);
    });
  });
});