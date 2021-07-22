"use strict";

var _react = _interopRequireDefault(require("react"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tab', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tab.default, {
      label: "firstTab"
    }));
    it('adds extra classes that are passed via className', function () {
      wrapper.setProps({
        className: 'extra-class'
      });
      expect(wrapper.find('li').hasClass('extra-class')).toBe(true);
    });
    it('renders <a> with expected className', function () {
      expect(wrapper.find('a').hasClass('wfp--tabs__nav-link')).toBe(true);
    });
    it('renders <li> with [role="presentation"]', function () {
      expect(wrapper.find('li').props().role).toEqual('presentation');
    });
    it('renders <a> with [role="tab"]', function () {
      expect(wrapper.find('a').props().role).toEqual('tab');
    });
    it('renders <a> with tabindex set to 0', function () {
      expect(wrapper.find('a').props().tabIndex).toEqual(0);
    });
    it('sets tabIndex on <a> if one is passed via props', function () {
      wrapper.setProps({
        tabIndex: 2
      });
      expect(wrapper.find('a').props().tabIndex).toEqual(2);
    });
    it('uses label to set children on <a> when passed via props', function () {
      expect(wrapper.find('a').props().children).toEqual('firstTab');
    });
    it('sets href as # by default', function () {
      expect(wrapper.find('a').props().href).toEqual('#');
    });
    it('sets new href value when passed in via props', function () {
      wrapper.setProps({
        href: '#other-content'
      });
      expect(wrapper.find('a').props().href).toEqual('#other-content');
    });
    it('should not have [className="wfp--tabs__nav-item--selected"] by default', function () {
      expect(wrapper.hasClass('wfp--tabs__nav-item--selected')).toBe(false);
    });
    it('adds [className="wfp--tabs__nav-item--selected"] when selected prop is true', function () {
      wrapper.setProps({
        selected: true
      });
      expect(wrapper.find('li').hasClass('wfp--tabs__nav-item--selected')).toBe(true);
    });
  });
  describe('events', function () {
    describe('click', function () {
      var onClick = jest.fn();
      var handleTabClick = jest.fn();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tab.default, {
        label: "firstTab"
      }));
      it('invokes handleTabClick from onClick prop', function () {
        wrapper.setProps({
          handleTabClick: handleTabClick
        });
        wrapper.find('li').simulate('click');
        expect(handleTabClick).toBeCalled();
      });
      it('invokes onClick when a function is passed to onClick prop', function () {
        wrapper.setProps({
          onClick: onClick
        });
        wrapper.find('li').simulate('click');
        expect(onClick).toBeCalled();
      });
    });
    describe('keydown', function () {
      var onKeyDown = jest.fn();
      var handleTabAnchorFocus = jest.fn();
      var handleTabKeyDown = jest.fn();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Tab.default, {
        label: "firstTab"
      }));
      wrapper.setProps({
        onKeyDown: onKeyDown,
        handleTabAnchorFocus: handleTabAnchorFocus,
        handleTabKeyDown: handleTabKeyDown
      });
      it('invokes onKeyDown when a function is passed to onKeyDown prop', function () {
        wrapper.find('li').simulate('keyDown', {
          which: 38
        });
        expect(onKeyDown).toBeCalled();
        expect(handleTabAnchorFocus).not.toBeCalled();
      });
      it('invokes handleTabAnchorFocus when onKeyDown occurs for appropriate events', function () {
        wrapper.find('li').simulate('keyDown', {
          which: 37
        });
        expect(onKeyDown).toBeCalled();
        expect(handleTabAnchorFocus).toBeCalled();
      });
    });
  });
  describe('custom render label', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Tab.default, {
      renderAnchor: function renderAnchor() {
        return /*#__PURE__*/_react.default.createElement("a", {
          id: "custom-label",
          href: "#other-content"
        }, "Content");
      }
    }));
    expect(wrapper.find('#custom-label').props().href).toEqual('#other-content');
  });
});