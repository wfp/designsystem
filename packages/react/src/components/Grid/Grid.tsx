import React, { PropsWithChildren, ForwardRefRenderFunction } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

interface GridProps {
  gutter?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  grow?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  className?: string;
}

const Grid: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<GridProps>
> = ({ gutter, children, grow, justify, align, className, ...other }, ref) => {
  const wrapperClasses = classNames(`${prefix}--grid`, {
    [`${prefix}--grid--spacing-${gutter}`]: gutter,
    [`${prefix}--grid--grow`]: grow,
    [`${className}`]: className,
  });

  return (
    <div
      ref={ref}
      className={wrapperClasses}
      {...other}
      style={{ justifyContent: justify, alignItems: align }}>
      {children}
    </div>
  );
};

export default React.forwardRef(Grid);
