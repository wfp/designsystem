"use strict";

var _react = _interopRequireDefault(require("react"));

var _icons = require("@wfp/icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.useFakeTimers();
describe('Pagination', function () {
  describe('renders as expected', function () {
    var pagination = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
      className: "extra-class",
      pageSizes: [5, 20],
      totalItems: 50
    }));
    beforeEach(function () {
      pagination.setProps({
        itemsPerPageFollowsText: undefined
      });
    });
    describe('icons', function () {
      var icons = pagination.find(_Icon.default);
      it('should have 3 icons', function () {
        expect(icons.length).toEqual(2);
      });
      it('should use correct "backward" icon', function () {
        expect(icons.first().props().icon).toEqual(_icons.iconChevronLeft);
      });
      it('should use correct "forward" icon', function () {
        expect(icons.last().props().icon).toEqual(_icons.iconChevronRight);
      });
    });
    describe('pagination container', function () {
      it('should render the expected classes', function () {
        expect(pagination.hasClass('wfp--pagination')).toBe(true);
        expect(pagination.hasClass('extra-class')).toBe(true);
      });
    });
    describe('pagination size container', function () {
      var left = pagination.find('.wfp--pagination__left');
      it('should render a left container', function () {
        expect(left.length).toBe(1);
      });
      it('should have a size dropdown', function () {
        var select = left.find(_Select.default);
        var items = select.find(_SelectItem.default);
        expect(select.length).toBe(1);
        expect(items.length).toBe(2);
        expect(items.at(0).props().value).toBe(5);
        expect(items.at(1).props().value).toBe(20);
      });
      it('should label the dropdown', function () {
        var label = left.find('.wfp--pagination__text').first();
        expect(label.text()).toBe('Items per page:');
      });
      it('should support translated label with colon', function () {
        pagination.setProps({
          itemsPerPageFollowsText: 'foo'
        });
        var label = pagination.find('.wfp--pagination__left').find('.wfp--pagination__text').first();
        expect(label.text()).toBe('foo');
      });
      it('should show the item spacers', function () {
        var label = left.find('.wfp--pagination__text').at(1);
        expect(label.text()).toBe("\xA0|\xA0\xA0");
      });
      it('should show the item range out of the total', function () {
        var label = left.find('.wfp--pagination__text').at(2);
        expect(label.text()).toBe('1-5 of 50 items');
      });
      describe('pagination size container when total pages unknown', function () {
        var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
          pageSizes: [5, 10],
          pagesUnknown: true
        }));
        var left = pager.find('.wfp--pagination__left');
        it('should render a left container', function () {
          expect(left.length).toBe(1);
        });
        it('should have a size dropdown', function () {
          var select = left.find(_Select.default);
          var items = select.find(_SelectItem.default);
          expect(select.length).toBe(1);
          expect(items.length).toBe(2);
          expect(items.at(0).props().value).toBe(5);
          expect(items.at(1).props().value).toBe(10);
        });
        it('should label the dropdown', function () {
          var label = left.find('.wfp--pagination__text').first();
          expect(label.text()).toBe('Items per page:');
        });
        it('should support translated label with colon', function () {
          pagination.setProps({
            itemsPerPageFollowsText: 'foo'
          });
          var label = pagination.find('.wfp--pagination__left').find('.wfp--pagination__text').first();
          expect(label.text()).toBe('foo');
        });
        it('should show the item range spacers', function () {
          var label = left.find('.wfp--pagination__text').at(1);
          expect(label.text()).toBe("\xA0|\xA0\xA0");
        });
        it('should show the item range out of the total', function () {
          var label = left.find('.wfp--pagination__text').at(2);
          expect(label.text()).toBe('1-5 items');
        });
      });
      describe('pagination sizing', function () {
        it('should respond to page size changes', function () {
          var actualPageSize;

          var handler = function handler(_ref) {
            var pageSize = _ref.pageSize;
            actualPageSize = pageSize;
          };

          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            onChange: handler
          }));
          expect(pager.state().pageSize).toBe(5);
          pager.find('select').first().simulate('change', {
            target: {
              value: 10
            }
          });
          expect(actualPageSize).toBe(10);
          expect(pager.state().pageSize).toBe(10); // Text updates after change

          var labels = pager.find('.wfp--pagination__text');
          expect(labels.at(1).text()).toBe("\xA0|\xA0\xA0");
          expect(labels.at(2).text()).toBe('1-10 of 50 items');
        });
        it('should reset the page when page size changes', function () {
          var actualPage;

          var handler = function handler(_ref2) {
            var page = _ref2.page;
            actualPage = page;
          };

          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            onChange: handler
          }));
          pager.setState({
            page: 2
          });
          expect(pager.state().page).toBe(2);
          pager.find('select').first().simulate('change', {
            target: {
              value: 10
            }
          });
          expect(actualPage).toBe(1);
          expect(pager.state().page).toBe(1);
        });
        it('should return to first page on changes to pageSizes', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50
          }));
          pager.setState({
            page: 2
          });
          pager.setProps({
            pageSizes: [3, 6]
          });
          expect(pager.state().page).toEqual(1);
        });
        it('should avoid returning to first page unless actual change in pageSizes is detected', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50
          }));
          pager.setState({
            page: 2
          });
          pager.setProps({
            pageSizes: [5, 10]
          });
          expect(pager.state().page).toEqual(2);
        });
        it('should default to pageSize if pageSize is provided', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            pageSize: 10,
            totalItems: 50
          }));
          expect(pager.state().pageSize).toEqual(10);
        });
        it('should default to pageSize if on change to pageSize', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50
          }));
          pager.setProps({
            pageSize: 10
          });
          expect(pager.state().pageSize).toEqual(10);
        });
        it('should avoid defaulting to pageSize unless actual change in pageSize is detected', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            pageSize: 10,
            totalItems: 50
          }));
          pager.setState({
            pageSize: 20
          });
          pager.setProps({
            pageSize: 10
          });
          expect(pager.state().pageSize).toEqual(20);
        });
      });
    });
    describe('pagination paging container', function () {
      var right = pagination.find('.wfp--pagination__right');
      it('should render a right container', function () {
        expect(right.length).toBe(1);
      });
      it('should show the current page out of the total number of pages', function () {
        var label = right.find('.wfp--pagination__text').first();
        expect(label.text()).toBe('1 of 10 pages');
      });
      it('should render ranges and pages for no items', function () {
        var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
          pageSizes: [5, 10],
          totalItems: 0
        }));
        var labels = pager.find('.wfp--pagination__text');
        expect(labels.at(1).text()).toBe("\xA0|\xA0\xA0");
        expect(labels.at(2).text()).toBe('0-0 of 0 items');
      });
      it('should have two buttons for navigation', function () {
        var buttons = right.find('.wfp--pagination__button');
        expect(buttons.length).toBe(2);
        expect(buttons.at(0).hasClass('wfp--pagination__button--backward')).toBe(true);
        expect(buttons.at(1).hasClass('wfp--pagination__button--forward')).toBe(true);
      });
      it('should disable backward navigation for the first page', function () {
        var buttons = right.find('.wfp--pagination__button');
        expect(buttons.at(0).props().disabled).toBe(true);
        expect(buttons.at(1).props().disabled).toBe(false);
      });
      it('should disable forward navigation for the last page', function () {
        var smallPage = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
          className: "extra-class",
          pageSizes: [100],
          totalItems: 50
        }));
        var buttons = smallPage.find('.wfp--pagination__button');
        expect(buttons.at(0).props().disabled).toBe(true);
        expect(buttons.at(1).props().disabled).toBe(true);
      });
      describe('pagination paging container when total pages unknown', function () {
        var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
          pageSizes: [5, 10],
          pagesUnknown: true
        }));
        var right = pager.find('.wfp--pagination__right');
        it('should render a right container', function () {
          expect(right.length).toBe(1);
        });
        it('should show the current page without the total number of pages', function () {
          var label = right.find('.wfp--pagination__text').first();
          expect(label.text()).toBe('page 1');
        });
        it('should have two buttons for navigation', function () {
          var buttons = right.find('.wfp--pagination__button');
          expect(buttons.length).toBe(2);
          expect(buttons.at(0).hasClass('wfp--pagination__button--backward')).toBe(true);
          expect(buttons.at(1).hasClass('wfp--pagination__button--forward')).toBe(true);
        });
        it('should disable backward navigation for the first page', function () {
          var buttons = right.find('.wfp--pagination__button');
          expect(buttons.at(0).props().disabled).toBe(true);
          expect(buttons.at(1).props().disabled).toBe(false);
        });
        it('should disable forward navigation for the last page', function () {
          var smallPage = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [100],
            pagesUnknown: true,
            isLastPage: true
          }));
          var buttons = smallPage.find('.wfp--pagination__button');
          expect(buttons.at(0).props().disabled).toBe(true);
          expect(buttons.at(1).props().disabled).toBe(true);
        });
        it('should hide text input if disabled', function () {
          var noTextInput = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [100],
            pagesUnknown: true,
            pageInputDisabled: true
          }));
          var right = noTextInput.find('.wfp--pagination__right .wfp--text-input');
          expect(right.length).toEqual(0);
        });
      });
      describe('pagination navigation', function () {
        it('should go to the next page when clicking forward', function () {
          var actualPage;

          var handler = function handler(_ref3) {
            var page = _ref3.page;
            actualPage = page;
          };

          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            onChange: handler
          }));
          expect(pager.state().page).toBe(1);
          pager.find('.wfp--pagination__button--forward').simulate('click');
          expect(actualPage).toBe(2);
          expect(pager.state().page).toBe(2);
        });
        it('should go to the previous page when clicking backward', function () {
          var actualPage;

          var handler = function handler(_ref4) {
            var page = _ref4.page;
            actualPage = page;
          };

          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            onChange: handler
          }));
          pager.setState({
            page: 2
          });
          expect(pager.state().page).toBe(2);
          pager.find('.wfp--pagination__button--backward').simulate('click');
          expect(actualPage).toBe(1);
          expect(pager.state().page).toBe(1);
        });
        it('should jump to the page entered in the input field', function () {
          var actualPage;

          var handler = function handler(_ref5) {
            var page = _ref5.page;
            actualPage = page;
          };

          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            onChange: handler
          }));
          expect(pager.state().page).toBe(1);
          pager.find('select').last().simulate('change', {
            target: {
              value: 2
            }
          });
          jest.runAllTimers();
          expect(actualPage).toBe(2);
          expect(pager.state().page).toBe(2);
        });
        it('should jump to page number if prop page is provided', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            page: 3
          }));
          expect(pager.state().page).toBe(3);
          pager.setProps({
            page: 2
          });
          expect(pager.state().page).toBe(2);
        });
        it('should avoid jumping to page number unless actual change in prop page is detected', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [5, 10],
            totalItems: 50,
            page: 3
          }));
          expect(pager.state().page).toBe(3);
          pager.setState({
            page: 2
          });
          pager.setProps({
            page: 3
          });
          expect(pager.state().page).toBe(2);
        });
        it('should not increment page if there is only 1 page', function () {
          var pager = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Pagination.default, {
            pageSizes: [10],
            totalItems: 5
          }));
          var buttons = pager.find('.wfp--pagination__button');
          expect(buttons.at(1).props().disabled).toBe(true);
        });
      });
    });
  });
});