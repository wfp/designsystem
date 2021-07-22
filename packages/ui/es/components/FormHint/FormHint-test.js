import React from 'react';
import FormHint from '../FormHint';
import { shallow, mount } from 'enzyme';
describe('FormHint', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(FormHint, null, "formhint"));
    it('renders <Tooltip> as the main wrapper', function () {
      expect(wrapper.exists('.wfp--form-hint')).toBe(true);
    });
  });
});