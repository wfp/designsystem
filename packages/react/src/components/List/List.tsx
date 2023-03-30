import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** List component show a number of connected items written consecutively, typically one below the other. */
type ListProps = PropsWithChildren<{
  className?: string;
  colon?: boolean;
  kind?:
    | 'unstyled'
    | 'simple-inline'
    | 'simple'
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

  const classes = classNames(`${prefix}--list`, className, {
    [`${prefix}--list--${kind}`]: kind,
    [`${prefix}--list--small`]: small,
    [`${prefix}--list--colon`]: colon,
  });
  return (
    <>
      {kind == 'ordered' ? (
        <ol className={classes} {...other}>
          {children}
        </ol>
      ) : (
        <ul className={classes} {...other}>
          {children}
        </ul>
      )}
    </>
  );
};

export default List;
