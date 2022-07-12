import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** Credits are mostly used when a photo need a source attribution. */
const Col = React.forwardRef(
  (
    { children, span, className, innerStyle, lg, md, sm, xs, ...other },
    ref
  ) => {
    const wrapperClasses = classnames(`${prefix}--grid-col`, {
      [`${prefix}--col--span-${span}`]: span,
      [`${prefix}--col--lg--${lg}`]: lg,
      [`${prefix}--col--lg--${md}`]: md,
      [`${prefix}--col--sm--${sm}`]: sm,
      [`${className}`]: className,
    });

    const innerClasses = classnames(`${prefix}--container-style`);
    return (
      <div ref={ref} className={wrapperClasses} {...other}>
        <div className={innerClasses} style={innerStyle}>
          {children}
        </div>
      </div>
    );
  }
);

Col.propTypes = {
  children: PropTypes.node,

  span: PropTypes.number,

  /** innerStyle represents style prop wrapping the inner container */
  innerStyle: PropTypes.object,

  /** Responsiveness on large(1200) screen will have 12 columns and calcuations will be based on this */
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /** Responsiveness on medium(992) screen will have 12 columns and calcuations will be based on this */
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /** Responsiveness on small(768) screen will have 8 columns and calcuations will be based on this */
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),

  /** Responsiveness on extra small(500) screen will have 8 columns and calcuations will be based on this */
  xs: PropTypes.oneOf([1, 2, 3, 4]),
};

export default Col;
