"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Card', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Card.default, {
      isLink: false,
      kind: "simple-card"
    }));

    var cardWrapper = function cardWrapper() {
      return wrapper.find('div.wfp--card-box');
    };

    describe('cardWrapper', function () {
      it('renders as expected', function () {
        expect(cardWrapper().length).toBe(1);
      });
    });
    it('Should only set type to [simple-card, overlay] if one is passed via props', function () {
      wrapper.setProps({
        type: 'simple-card'
      });
      expect(wrapper.props().type).toEqual('simple-card');
      wrapper.setProps({
        type: 'overlay'
      });
      expect(wrapper.props().type).toEqual('overlay');
    });
  });
});