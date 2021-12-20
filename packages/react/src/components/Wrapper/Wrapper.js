import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

export const pageWidths = ['sm', 'md', 'lg', 'full'];

/** Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width. */
const Wrapper = (props) => {
  const { prefix } = useSettings();

  const {
    background,
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
    const backgroundClasses = classNames({
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

Wrapper.propTypes = {
  /**
   * The content which should be displayed
   */
  children: PropTypes.node,
  /**
 Specify additional className which will be added
*/
  className: PropTypes.string,
  /**
    `xs` `sm` `md` `lg`:  Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px`
  */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  /**
    Width on mobile devices
  */
  mobilePageWidth: PropTypes.string,
  /**
    `full` `sm` `md` `lg`:  Width on mobile devices `full`: `100%`
  */
  spacing: PropTypes.string,
};

export default Wrapper;
