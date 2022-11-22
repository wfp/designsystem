import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** Grid layout */
const Grid = React.forwardRef(
  ({ gutter, children, grow, justify, align, className, ...other }, ref) => {
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
  }
);

Grid.propTypes = {
  /** <Col /> components only */
  children: PropTypes.node,

  /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
  gutter: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']),

  /** Should columns in the last row take 100% of grid width */
  grow: PropTypes.bool,

  /** Set grid justify-content property */
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),

  /** Set grid align-content property */
  align: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch']),
};

Grid.defaultProps = {
  gutter: 'xs',
  justify: 'flex-start',
  align: 'flex-start',
};

export default Grid;
