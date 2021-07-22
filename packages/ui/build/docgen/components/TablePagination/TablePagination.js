"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prefix = _settings.default.prefix;

var ReactTablePagination = function ReactTablePagination(_ref) {
  var data = _ref.data,
      page = _ref.page,
      pageSizeOptions = _ref.pageSizeOptions,
      paginationClassName = _ref.paginationClassName,
      totalItems = _ref.totalItems,
      style = _ref.style,
      onPageChange = _ref.onPageChange,
      onPageSizeChange = _ref.onPageSizeChange,
      isLastPage = _ref.isLastPage,
      pages = _ref.pages,
      showPageSizeOptions = _ref.showPageSizeOptions,
      pageInputDisabled = _ref.pageInputDisabled,
      pageSize = _ref.pageSize,
      pagesUnknown = _ref.pagesUnknown,
      backwardText = _ref.backwardText,
      forwardText = _ref.forwardText,
      itemsPerPageText = _ref.itemsPerPageText,
      itemsPerPageFollowsText = _ref.itemsPerPageFollowsText,
      itemRangeText = _ref.itemRangeText,
      pageRangeText = _ref.pageRangeText,
      pageSizesDisabled = _ref.pageSizesDisabled,
      itemText = _ref.itemText,
      pageNumberText = _ref.pageNumberText;

  var getSafePage = function getSafePage(newPage) {
    if (isNaN(newPage)) {
      newPage = page;
    }

    return newPage;
  };

  var changePage = function changePage(page) {
    var nextPage = getSafePage(page.page - 1); // Update Page

    if (page !== nextPage) {
      onPageChange(nextPage);
    } // Update PageSize


    if (pageSize !== page.pageSize) {
      onPageSizeChange(page.pageSize);
    }
  };

  var propList = {
    isLastPage: isLastPage,
    pages: pages,
    //showPageSizeOptions,
    pageInputDisabled: pageInputDisabled,
    pageSize: pageSize,
    pagesUnknown: pagesUnknown,
    backwardText: backwardText,
    forwardText: forwardText,
    itemsPerPageText: itemsPerPageText,
    itemsPerPageFollowsText: itemsPerPageFollowsText,
    itemRangeText: itemRangeText,
    pageRangeText: pageRangeText,
    pageSizesDisabled: pageSizesDisabled,
    itemText: itemText,
    pageNumberText: pageNumberText
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(paginationClassName, '-pagination'),
    style: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-pagination")
  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, _extends({
    onChange: changePage,
    pageSizes: pageSizeOptions,
    page: page,
    totalItems: totalItems ? totalItems : data ? data.length : undefined
  }, propList))));
};

var _default = ReactTablePagination;
exports.default = _default;