import React from 'react';
import { shallow } from 'enzyme';
import FormLabel from '../FormLabel';
describe('FormLabel', function () {
  it('should render', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(FormLabel, null));
    expect(wrapper).toMatchSnapshot();
  });
});