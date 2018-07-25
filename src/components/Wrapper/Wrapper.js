import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Wrapper = props => {
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
    [`${className}`]: className,
  });
  if (background || backgroundStyle) {
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
  children: PropTypes.node,
  className: PropTypes.string,
  /**
    Width of Wrapper
  */
  pageWidth: PropTypes.string,
  /**
    Width on mobile devices
  */
  mobilePageWidth: PropTypes.string,
  /**
    Spacing on top and bottom
  */
  spacing: PropTypes.string,
};

export default Wrapper;
