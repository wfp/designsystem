import React from 'react';
import FormWizard from '../FormWizard';
import { shallow, mount } from 'enzyme';
describe('FormWizard', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(FormWizard, {
      sidebar: /*#__PURE__*/React.createElement("div", null, "The Sidebar content")
    }, "formhint"));
    it('renders form wizard wrapper', function () {
      expect(wrapper.exists('.wfp--form-wizard')).toBe(true);
    });
  });
  describe('Renders as a sticky sidebar', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(FormWizard, {
      stickySidebar: true,
      sidebar: /*#__PURE__*/React.createElement("div", null, "The Sidebar content")
    }, "formhint"));
    it('prop as expected', function () {
      expect(wrapper.props().stickySidebar).toEqual(true);
    });
    it('classes to stickySidebar prop ', function () {
      expect(wrapper.exists('.wfp--form-wizard--sticky')).toBe(true);
    });
  });
});