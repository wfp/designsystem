function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classnames from 'classnames';
import Pagination from '../Pagination';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

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
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(paginationClassName, '-pagination'),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-pagination")
  }, /*#__PURE__*/React.createElement(Pagination, _extends({
    onChange: changePage,
    pageSizes: pageSizeOptions,
    page: page,
    totalItems: totalItems ? totalItems : data ? data.length : undefined
  }, propList))));
};

export default ReactTablePagination;