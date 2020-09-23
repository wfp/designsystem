import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

/** The Story component adds a default style, formatting and spacing for a longer text with main focus on readability. */
const Story = ({ children, className, pageWidth, spacing }) => {
  const classNames = classnames({
    'wfp--story': true,
    [`${className}`]: className,
  });
  return (
    <div
      className={classNames}
      pageWidth={pageWidth ? pageWidth : 'md'}
      spacing={spacing}>
      {children}
    </div>
  );
};

Story.propTypes = {
  /**
    The Story content
  */
  children: PropTypes.node,
  /**
    Additional className for Story
  */
  className: PropTypes.string,
};

export default Story;
