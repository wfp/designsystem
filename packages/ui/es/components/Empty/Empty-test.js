import React from 'react';
import Empty from '../Empty';
import { shallow } from 'enzyme';
describe('Empty', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Empty, {
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
        expect(emptyText().props().children).toEqual([/*#__PURE__*/React.createElement("h2", null, "title"), /*#__PURE__*/React.createElement("p", null)]);
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