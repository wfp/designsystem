"use strict";

var _react = _interopRequireDefault(require("react"));

var _ContentSwitcher = _interopRequireDefault(require("../ContentSwitcher"));

var _Switch = _interopRequireDefault(require("../Switch"));

var _enzyme = require("enzyme");

var _testUtils = require("react-dom/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ContentSwitcher', function () {
  describe('component initial rendering', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ContentSwitcher.default, {
      onChange: function onChange() {},
      className: "extra-class"
    }, /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "one"
    }), /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(_Switch.default);
    it('should have the correct class', function () {
      expect(wrapper.hasClass('wfp--content-switcher')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(children.length).toEqual(2);
    });
    it('should default "selected" property to true on first child', function () {
      expect(children.first().props().selected).toEqual(true);
      expect(children.last().props().selected).toEqual(false);
    });
    it('should apply extra classes passed to it', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('Allow initial state to draw from props', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ContentSwitcher.default, {
      selectedIndex: 1,
      onChange: function onChange() {},
      className: "extra-class"
    }, /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "one"
    }), /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(_Switch.default);
    it('Should apply the selected property on the selected child', function () {
      expect(children.first().props().selected).toEqual(false);
      expect(children.last().props().selected).toEqual(true);
    });
  });
  describe('when child component onClick is invoked', function () {
    var onChange = jest.fn();
    var mockData = {
      index: 1
    };
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ContentSwitcher.default, {
      onChange: onChange
    }, /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "one"
    }), /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(_Switch.default);
    (0, _testUtils.act)(function () {
      children.first().props().onClick(mockData);
    });
    it('should invoke onChange', function () {
      expect(onChange).toBeCalledWith(mockData);
    });
    it('should set selected to true on the correct child', function () {
      wrapper.update();
      var firstChild = wrapper.find(_Switch.default).first();
      var secondChild = wrapper.find(_Switch.default).last();
      expect(firstChild.props().selected).toEqual(false);
      expect(secondChild.props().selected).toEqual(true);
    });
  });
  describe('when child component onKeyDown is invoked', function () {
    var onChange = jest.fn();
    var mockData = {
      index: 1
    };
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_ContentSwitcher.default, {
      onChange: onChange
    }, /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "one"
    }), /*#__PURE__*/_react.default.createElement(_Switch.default, {
      kind: "anchor",
      text: "two"
    })));
    var children = wrapper.find(_Switch.default);
    (0, _testUtils.act)(function () {
      children.first().props().onKeyDown(mockData);
    });
    it('should invoke onChange', function () {
      expect(onChange).toBeCalledWith(mockData);
    });
    it('should set selected to true on the correct child', function () {
      wrapper.update();
      var firstChild = wrapper.find(_Switch.default).first();
      var secondChild = wrapper.find(_Switch.default).last();
      expect(firstChild.props().selected).toEqual(false);
      expect(secondChild.props().selected).toEqual(true);
    });
  });
});