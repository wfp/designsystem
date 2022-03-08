import React from 'react';
import classnames from 'classnames';
import Pagination from '../Pagination';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const ReactTablePagination = ({
  // Computed
  data,
  page,
  pageSizeOptions,
  paginationClassName,
  totalItems,
  style,
  onPageChange,
  onPageSizeChange,
  // Props
  isLastPage,
  pages,
  showPageSizeOptions,
  pageInputDisabled,
  pageSize,
  pagesUnknown,
  backwardText,
  forwardText,
  itemsPerPageText,
  itemsPerPageFollowsText,
  itemRangeText,
  pageRangeText,
  pageSizesDisabled,
  itemText,
  pageNumberText,
}) => {
  const getSafePage = (newPage) => {
    if (isNaN(newPage)) {
      newPage = page;
    }
    return newPage;
  };

  const changePage = (page) => {
    const nextPage = getSafePage(page.page - 1);

    // Update Page
    if (page !== nextPage) {
      onPageChange(nextPage);
    }

    // Update PageSize
    if (pageSize !== page.pageSize) {
      onPageSizeChange(page.pageSize);
    }
  };

  const propList = {
    isLastPage,
    pages,
    //showPageSizeOptions,
    pageInputDisabled,
    pageSize,
    pagesUnknown,
    backwardText,
    forwardText,
    itemsPerPageText,
    itemsPerPageFollowsText,
    itemRangeText,
    pageRangeText,
    pageSizesDisabled,
    itemText,
    pageNumberText,
  };

  return (
    <div
      className={classnames(paginationClassName, '-pagination')}
      style={style}
    >
      <div className={`${prefix}-pagination`}>
        <Pagination
          onChange={changePage}
          pageSizes={pageSizeOptions}
          page={page}
          totalItems={totalItems ? totalItems : data ? data.length : undefined}
          {...propList}
        />
      </div>
    </div>
  );
};

export default ReactTablePagination;
