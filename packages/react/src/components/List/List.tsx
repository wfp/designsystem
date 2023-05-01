import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** List component show a number of connected items written consecutively, typically one below the other. */
export interface ListBaseProps {
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
}

interface ListOlProps
  extends ListBaseProps,
    React.ComponentPropsWithRef<'button'> {}

interface ListUlProps extends ListBaseProps, React.ComponentPropsWithRef<'a'> {}

type ConditionalProps<T> = T extends { kind: 'ordered' }
  ? ListOlProps
  : ListUlProps;

type ListProps<T extends { kind?: string }> = ConditionalProps<T> &
  React.ComponentPropsWithRef<T extends { kind: 'ordered' } ? 'ol' : 'ul'>;

export const List = React.forwardRef(
  <T extends { kind?: string }>(
    { children, className, colon, kind, small, ...other }: ListProps<T>,
    ref: React.Ref<
      T extends { kind: string } ? HTMLAnchorElement : HTMLButtonElement
    >
  ) => {
    const { prefix } = useSettings();

    const classes = classNames(`${prefix}--list`, className, {
      [`${prefix}--list--${kind}`]: kind,
      [`${prefix}--list--small`]: small,
      [`${prefix}--list--colon`]: colon,
    });

    /* if (kind == 'ordered') {
      const olProps = {
        ...other,
        href: other.href,
      } as React.AnchorHTMLAttributes<HTMLOListElement>;

      return (
        <ol
          className={classes}
          {...olProps}
          ref={ref as React.Ref<HTMLOListElement>}>
          {children}
        </ol>
      );
    }*/

    const ulProps = {
      ...other,
    } as React.ButtonHTMLAttributes<HTMLUListElement>;

    return (
      <ul
        className={classes}
        {...ulProps}
        ref={ref as React.Ref<HTMLUListElement>}>
        {children}
      </ul>
    );
  }
);

export default List;
