import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export const pageWidths = ['xs', 'sm', 'md', 'lg', 'full'];

const Wrapper = (props) => {
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
    'wfp--wrapper': true,
    'wfp--wrapper--width-lg': pageWidth === 'narrow' || pageWidth === 'lg',
    'wfp--wrapper--width-md': pageWidth === 'narrower' || pageWidth === 'md',
    'wfp--wrapper--width-sm': pageWidth === 'narrowest' || pageWidth === 'sm',
    'wfp--wrapper--width-xs': pageWidth === 'narrowest' || pageWidth === 'xs',
    'wfp--wrapper--width-mobile-full': mobilePageWidth === 'full',
    'wfp--wrapper--spacing-md': spacing === 'md',
    'wfp--wrapper--spacing-xl': spacing === 'xl',
    [`${className}`]: className,
  });
  if (background || backgroundStyle) {
    const backgroundClasses = classNames({
      'wfp--wrapper--background-lighter': background === 'lighter',
      'wfp--wrapper--background-dark': background === 'dark',
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
  pageWidth: PropTypes.string,
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
