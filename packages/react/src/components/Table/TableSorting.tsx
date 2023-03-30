import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { CaretDown, CaretUp } from '@un/icons-react';

type TableSortingProps = PropsWithChildren<{
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortType?: boolean;
  withBorder?: boolean;
  className?: string;
}>;

const TableSorting: React.FC<TableSortingProps> = ({
  className,
  isSorted,
  isSortedDesc,
  sortType,
}) => {
  const classes = classNames(className, 'wfp--table--sorting', {
    'wfp--table--is-sorted': isSorted,
    'wfp--table--is-sortable': sortType,
  });
  return (
    <span className={classes}>
      {isSorted ? isSortedDesc ? <CaretDown /> : <CaretUp /> : ''}
    </span>
  );
};

export default TableSorting;
