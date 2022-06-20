import * as React from 'react';

declare namespace Pagination {
  interface PaginationProps extends Omit<React.HTMLProps<Pagination>, 'id'> {
    pageSizes: number[];
    backwardText?: string;
    forwardText?: string;
    id?: string | number;
    itemsPerPageText?: string;
    itemsPerPageFollowsText?: string;
    pageNumberText?: string;
    pageSizesDisabled?: boolean;
    totalItems?: number;
    disabled?: boolean;
    page?: number;
    pageSize?: number;
    pagesUnknown?: boolean;
    isLastPage?: boolean;
    pageInputDisabled?: boolean;

    itemRangeText?: (min: number, max: number, total: number) => string;
    itemText?: (min: number, max: number) => string;
    pageRangeText?: (current: number, total: number) => string;
    pageText?: (page: number) => string;
  }
}

declare class Pagination extends React.Component<Pagination.PaginationProps> {}
export = Pagination;
