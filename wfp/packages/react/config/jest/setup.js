'use strict';

jest.unmock('promise');
jest.unmock('whatwg-fetch');
jest.unmock('object-assign');

global.__DEV__ = true;

require('../polyfills');

const enzyme = jest.requireActual('enzyme');
const Adapter = jest.requireActual('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
