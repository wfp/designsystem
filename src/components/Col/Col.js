import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** Credits are mostly used when a photo need a source attribution. */
const Col = React.forwardRef(
  ({ children, span, className, innerStyle, ...other }, ref) => {
    const wrapperClasses = classnames(`${prefix}--grid-col`, {
      [`${prefix}--col--span-${span}`]: span,
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
};

export default Col;
