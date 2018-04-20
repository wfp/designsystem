import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Wrapper from '../Wrapper';

const Story = ({ children, className }) => {
  const classNames = classnames({
    'wfp--story' : true,
    [`${className}`]: className,
  });
  return (
    <Wrapper className={classNames}>
      {children}
    </Wrapper>
  );
};

Story.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string
};

export default Story;
