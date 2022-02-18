import * as React from 'react';

declare namespace TablePagination  {
  interface TablePaginationProps extends React.HTMLProps<TablePagination> {
  }
}

declare class TablePagination extends React.Component<TablePagination.TablePaginationProps>{ }
export = TablePagination
