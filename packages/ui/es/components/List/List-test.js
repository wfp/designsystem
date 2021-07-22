import React from 'react';
import { List, ListItem } from '../List';
import { mount } from 'enzyme';
describe('List', function () {
  describe('Renders as expected', function () {
    var list = mount( /*#__PURE__*/React.createElement(List, {
      className: "some-class"
    }, /*#__PURE__*/React.createElement(ListItem, null, "First Item"), /*#__PURE__*/React.createElement(ListItem, null, "Second Item")));
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