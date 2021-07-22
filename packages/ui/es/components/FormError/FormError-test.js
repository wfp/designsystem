import React from 'react';
import FormError from '../FormError';
import { shallow } from 'enzyme';
describe('FormError', function () {
  describe('Renders as expected', function () {
    var errorMessage = shallow( /*#__PURE__*/React.createElement(FormError, {
      className: "another-class",
      submitFailed: true,
      message: {
        generic: 'Something went terribly wrong',
        fields: [{
          key: 'fieldkey',
          message: 'One field which is wrong'
        }, {
          key: 'anotherfieldkey',
          message: 'Another field which is wrong'
        }]
      }
    }));
    it('should use the appropriate link class', function () {
      expect(errorMessage.hasClass('another-class')).toEqual(true);
    });
  });
});