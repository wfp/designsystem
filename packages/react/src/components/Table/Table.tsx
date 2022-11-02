import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

type TableProps = PropsWithChildren<{
  withBorder?: boolean;
  responsive?: boolean;
  className?: Argument;
}>;

/** Tables are used to make large volumes of data easy to understand and to access. */
const Table: React.FC<TableProps> = ({
  className,
  children,
  responsive,
  withBorder,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(
    `${prefix}--table`,
    {
      [`${prefix}--table--responsive`]: responsive,
      [`${prefix}--table--with-border`]: withBorder,
    },
    className
  );
  return (
    <table {...other} className={classes}>
      {children}
    </table>
  );
};

export default Table;
