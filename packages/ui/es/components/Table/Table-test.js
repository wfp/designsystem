import React from 'react';
import Table from '../Table';
import { mount } from 'enzyme';
describe('FormWizard', function () {
  describe('Renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Table, {
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