import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** A Module is identifiable as a single, contained unit. */
type ModuleProps = PropsWithChildren<{
  className?: Argument;
  noMargin?: boolean;
  fullHeight?: boolean;
  light?: boolean;
  dark?: boolean;
  withHover?: boolean;
  margin?: 'xs' | 'md' | 'lg';
}>;
const Module: React.FC<ModuleProps> = ({
  dark,
  light,
  children,
  className,
  margin,
  fullHeight,
  noMargin,
  withHover,
  ...other
}) => {
  const { prefix } = useSettings();
  const wrapperClasses = classNames(
    {
      [`${prefix}--module--dark`]: dark,
      [`${prefix}--module--no-margin`]: noMargin,
      [`${prefix}--module--full-height`]: fullHeight,
      [`${prefix}--module--margin-x`]: margin === 'xs',
      [`${prefix}--module--margin-md`]: margin === 'md',
      [`${prefix}--module--margin-lg`]: margin === 'lg',
      [`${prefix}--module--light`]: light,
      [`${prefix}--module--with-hover`]: withHover,
    },
    className,
    [`${prefix}--module`]
  );

  return (
    <div className={wrapperClasses} {...other}>
      <div className={`${prefix}--module__inner`}>{children}</div>
    </div>
  );
};

export default Module;
