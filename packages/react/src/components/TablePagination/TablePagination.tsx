import React from 'react';
import classNames from 'classnames';
import Pagination from '../Pagination';
import useSettings from '../../hooks/useSettings';

export interface TagProps extends React.HTMLAttributes<HTMLTableElement> {
  withBorder?: boolean;
  responsive?: boolean;
}

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
  // showPageSizeOptions,
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
  const { prefix } = useSettings();

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
      className={classNames(paginationClassName, '-pagination')}
      style={style}>
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

ReactTablePagination.displayName = 'ReactTablePagination';

export default ReactTablePagination;
