import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** A Module is identifiable as a single, contained unit. */

const Module = ({
  dark,
  light,
  centered,
  children,
  className,
  margin,
  fullHeight,
  noMargin,
  withHover,
  ...other
}) => {
  const { prefix } = useSettings();
  const wrapperClasses = classnames(
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

Module.propTypes = {
  /**
   * * Specify the content of the `Module`, usually a `ModuleHeader` `ModuleBody` and `ModuleFooter`component.
   */
  children: PropTypes.node,
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,
  /**
   * Disables the default margin
   */
  noMargin: PropTypes.bool,
  /**
   * Use 100% height of parent container
   */
  fullHeight: PropTypes.bool,
  /**
   * Light appearance (for white backgrounds)
   */
  light: PropTypes.bool,
  /**
   * Dark appearance
   */
  dark: PropTypes.bool,
  /**
   * Additional hover styling
   */
  withHover: PropTypes.bool,
};

export default Module;
