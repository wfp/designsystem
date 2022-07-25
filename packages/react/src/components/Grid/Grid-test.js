import React from 'react';
import Link from '../Link';
import { shallow } from 'enzyme';

describe('Grid', () => {
  describe('Renders as expected', () => {
    const link = shallow(
      <Link href="www.google.com" className="some-class">
        A simple link
      </Link>
    );
  });
});
