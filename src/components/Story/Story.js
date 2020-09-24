import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import settings from '../../globals/js/settings';
const { prefix } = settings;

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
