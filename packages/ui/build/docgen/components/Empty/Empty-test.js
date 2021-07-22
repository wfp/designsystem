"use strict";

var _react = _interopRequireDefault(require("react"));

var _Empty = _interopRequireDefault(require("../Empty"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Empty', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Empty.default, {
      title: "title",
      kind: "large"
    }));

    var emptyWrapper = function emptyWrapper() {
      return wrapper.find('div.wfp--empty');
    };

    describe('emptyWrapper', function () {
      it('renders as expected', function () {
        expect(emptyWrapper().length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(emptyWrapper().hasClass('wfp--empty')).toEqual(true);
      });
    });

    var emptyIcon = function emptyIcon() {
      return wrapper.find('div.wfp--empty__icon');
    };

    describe('emptyIcon', function () {
      it('renders as expected', function () {
        expect(emptyIcon().length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(emptyIcon().hasClass('wfp--empty__icon')).toEqual(true);
      });
    });

    var emptyText = function emptyText() {
      return wrapper.find('div.wfp--empty__text');
    };

    describe('emptyText', function () {
      it('renders as expected', function () {
        expect(emptyText().length).toBe(1);
      });
      it('renders children as expected', function () {
        expect(emptyText().props().children).toEqual([/*#__PURE__*/_react.default.createElement("h2", null, "title"), /*#__PURE__*/_react.default.createElement("p", null)]);
      });
      it('renders title as expected', function () {
        expect(emptyText().find("h2").length).toBe(1);
      });
      it('renders additional content as expected', function () {
        expect(emptyText().find("p").length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(emptyText().hasClass('wfp--empty__text')).toEqual(true);
      });
    });

    var emptyButton = function emptyButton() {
      return wrapper.find('div.wfp--empty__button');
    };

    describe('emptyButton', function () {
      it('has the expected classes', function () {
        expect(emptyButton().hasClass('wfp--empty__button')).toEqual(true);
      });
    });
  });
});