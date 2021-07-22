import React from 'react';
import Text from '../Text';
import { shallow, mount } from 'enzyme';
describe('Text', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Text, null, "test child here"));
    it('renders as expected ', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should render classes as exected', function () {
      var textWrapper = function textWrapper() {
        return wrapper.find('div.wfp--text');
      };

      expect(textWrapper().hasClass('wfp--text')).toBe(true);
    });
  });
});