import React from 'react';
import TabContent from '../TabContent';
import { shallow } from 'enzyme';
describe('TabContent', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(TabContent, null, /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "content"), /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "content")));
    it('renders children as expected', function () {
      expect(wrapper.props().children.length).toEqual(2);
    });
    it('sets selected if passed in via props', function () {
      wrapper.setProps({
        selected: true
      });
      expect(wrapper.props().selected).toEqual(true);
    });
    it('sets selected and hidden props with opposite boolean values', function () {
      wrapper.setProps({
        selected: true
      });
      expect(wrapper.props().hidden).toEqual(false);
    });
  });
});