import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** List component show a number of connected items written consecutively, typically one below the other. */
type ListProps = PropsWithChildren<{
  className?: Argument;
  colon?: boolean;
  kind?:
    | 'unstyled'
    | 'simple-inline'
    | 'details'
    | 'unordered'
    | 'ordered'
    | 'tooltip'
    | 'bullets';
  small?: boolean;
}>;

const List: React.FC<ListProps> = ({
  children,
  className,
  colon,
  kind,
  small,
  ...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(`${prefix}--list`, className, {
    [`${prefix}--list--${kind}`]: kind,
    [`${prefix}--list--small`]: small,
    [`${prefix}--list--colon`]: colon,
  });
  return (
    <>
      {kind == 'ordered' ? (
        <ol className={classNames} {...other}>
          {children}
        </ol>
      ) : (
        <ul className={classNames} {...other}>
          {children}
        </ul>
      )}
    </>
  );
};

export default List;
