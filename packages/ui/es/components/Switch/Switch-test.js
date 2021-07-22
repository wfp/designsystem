import React from 'react';
import Switch from '../Switch';
import { shallow } from 'enzyme';
describe('Switch', function () {
  describe('component rendering', function () {
    var buttonWrapper = shallow( /*#__PURE__*/React.createElement(Switch, {
      kind: "button",
      icon: /*#__PURE__*/React.createElement("svg", null),
      text: "test"
    }));
    var linkWrapper = shallow( /*#__PURE__*/React.createElement(Switch, {
      kind: "anchor",
      icon: /*#__PURE__*/React.createElement("svg", {
        className: "testClass"
      }),
      text: "test"
    }));
    it('should render a button when kind is button', function () {
      expect(buttonWrapper.is('button')).toEqual(true);
    });
    it('should render a link when kind is link', function () {
      expect(linkWrapper.is('a')).toEqual(true);
    });
    it('should have the expected text', function () {
      expect(buttonWrapper.text()).toEqual('test');
      expect(linkWrapper.text()).toEqual('test');
    });
    it('should have the expected icon', function () {
      expect(buttonWrapper.find('svg').length).toEqual(1);
      expect(linkWrapper.find('svg').length).toEqual(1);
    });
    it('icon should have the expected class', function () {
      var cls = 'wfp--content-switcher__icon';
      expect(buttonWrapper.find('svg').hasClass(cls)).toEqual(true);
      expect(linkWrapper.find('svg').hasClass(cls)).toEqual(true);
      expect(linkWrapper.find('svg').hasClass('testClass')).toEqual(true);
    });
    it('should have the expected class', function () {
      var cls = 'wfp--content-switcher-btn';
      expect(buttonWrapper.hasClass(cls)).toEqual(true);
      expect(linkWrapper.hasClass(cls)).toEqual(true);
    });
    it('should not have selected class', function () {
      var selectedClass = 'wfp--content-switcher--selected';
      expect(buttonWrapper.hasClass(selectedClass)).toEqual(false);
      expect(linkWrapper.hasClass(selectedClass)).toEqual(false);
    });
    it('should have a selected class when selected is set to true', function () {
      var selected = true;
      buttonWrapper.setProps({
        selected: selected
      });
      linkWrapper.setProps({
        selected: selected
      });
      expect(buttonWrapper.hasClass('wfp--content-switcher--selected')).toEqual(true);
      expect(linkWrapper.hasClass('wfp--content-switcher--selected')).toEqual(true);
    });
  });
  describe('events', function () {
    var buttonOnClick = jest.fn();
    var linkOnClick = jest.fn();
    var buttonOnKey = jest.fn();
    var linkOnKey = jest.fn();
    var index = 1;
    var name = 'first';
    var text = 'test';
    var spaceKey = 32;
    var enterKey = 13;
    var buttonWrapper = shallow( /*#__PURE__*/React.createElement(Switch, {
      index: index,
      name: name,
      kind: "button",
      onClick: buttonOnClick,
      onKeyDown: buttonOnKey,
      text: text
    }));
    var linkWrapper = shallow( /*#__PURE__*/React.createElement(Switch, {
      index: index,
      name: name,
      kind: "anchor",
      onClick: linkOnClick,
      onKeyDown: linkOnKey,
      text: text
    }));
    it('should invoke button onClick handler', function () {
      buttonWrapper.simulate('click', {
        preventDefault: function preventDefault() {}
      });
      expect(buttonOnClick).toBeCalledWith({
        index: index,
        name: name,
        text: text
      });
    });
    it('should invoke link onClick handler', function () {
      linkWrapper.simulate('click', {
        preventDefault: function preventDefault() {}
      });
      expect(buttonOnClick).toBeCalledWith({
        index: index,
        name: name,
        text: text
      });
    });
    it('should invoke button onKeyDown handler', function () {
      buttonWrapper.simulate('keydown', {
        which: spaceKey
      });
      expect(buttonOnKey).toBeCalledWith({
        index: index,
        name: name,
        text: text
      });
      buttonWrapper.simulate('keydown', {
        which: enterKey
      });
      expect(buttonOnKey).toBeCalledWith({
        index: index,
        name: name,
        text: text
      });
    });
    it('should invoke link onKeyDown handler', function () {
      linkWrapper.simulate('keydown', {
        which: spaceKey
      });
      expect(linkOnKey).toBeCalledWith({
        index: index,
        name: name,
        text: text
      });
      linkWrapper.simulate('keydown', {
        which: enterKey
      });
      expect(linkOnKey).toBeCalledWith({
        index: index,
        name: name,
        text: text
      });
    });
  });
});