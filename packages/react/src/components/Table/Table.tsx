import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  withBorder?: boolean;
  responsive?: boolean;
}

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
