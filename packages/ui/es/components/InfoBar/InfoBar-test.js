import React from 'react';
import InfoBar from '../InfoBar';
import { shallow } from 'enzyme';
describe('InfoBar', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(InfoBar, null, "Info bar content "));
    it('renders children as exepected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('renders root classes as expected', function () {
      expect(wrapper.hasClass('wfp--info-bar')).toEqual(true);
    });
  });
});