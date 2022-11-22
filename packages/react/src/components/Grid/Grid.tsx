import React, { PropsWithChildren, RefObject } from 'react';
import classnames from 'classnames';
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
  ref?: RefObject<HTMLDivElement>;
}

/** Grid layout */
const Grid: React.FC<PropsWithChildren<GridProps>> = ({
  gutter,
  children,
  grow,
  justify,
  align,
  className,
  ref,
  ...other
}) => {
  const wrapperClasses = classnames(`${prefix}--grid`, {
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

export default Grid;
