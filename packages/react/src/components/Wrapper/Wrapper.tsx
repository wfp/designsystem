import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { ScreenSize, Spacing } from '../../types/utils';

export const pageWidths = ['sm', 'md', 'lg', 'full'];

/** Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width. */
type WrapperProps = PropsWithChildren<{
  pageWidth?: ScreenSize | 'xs' | 'narrow' | 'narrower' | 'narrowest';
  mobilePageWidth?: ScreenSize;
  spacing?: Spacing;
  background?: 'lighter' | 'dark';
  className?: Argument;
  backgroundClassName?: string;
  backgroundStyle: any;
}>;

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { prefix } = useSettings();

  const {
    background,
    backgroundClassName,
    backgroundStyle,
    children,
    className,
    pageWidth,
    mobilePageWidth,
    spacing,
    ...other
  } = props;
  const wrapperClasses = classNames({
    [`${prefix}--wrapper`]: true,
    [`${prefix}--wrapper--width-lg`]:
      pageWidth === 'narrow' || pageWidth === 'lg',
    [`${prefix}--wrapper--width-md`]:
      pageWidth === 'narrower' || pageWidth === 'md',
    [`${prefix}--wrapper--width-sm`]:
      pageWidth === 'narrowest' || pageWidth === 'sm',
    [`${prefix}--wrapper--width-xs`]:
      pageWidth === 'narrowest' || pageWidth === 'xs',
    [`${prefix}--wrapper--width-mobile-full`]: mobilePageWidth === 'full',
    [`${prefix}--wrapper--spacing-md`]: spacing === 'md',
    [`${prefix}--wrapper--spacing-xl`]: spacing === 'xl',
    [`${className}`]: className,
  });
  if (background || backgroundStyle) {
    const backgroundClasses = classNames(backgroundClassName, {
      [`${prefix}--wrapper--background-lighter`]: background === 'lighter',
      [`${prefix}--wrapper--background-dark`]: background === 'dark',
    });

    return (
      <div className={backgroundClasses} style={backgroundStyle}>
        <div className={wrapperClasses} {...other}>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className={wrapperClasses} {...other}>
        {children}
      </div>
    );
  }
};

export default Wrapper;
