import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Wrapper from '../Wrapper';

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
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Story;
