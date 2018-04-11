import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Wrapper = (props) => {

  const { children, className, pageWidth, ...other } = props;
  const classNames = classnames({
    'wfp--wrapper' : true,
    'wfp--wrapper--narrow' : pageWidth === 'narrow',
    'wfp--wrapper--narrower' : pageWidth === 'narrower',
    [`${className}`]: className,
  });
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string,
  pageWidth: PropTypes.string
};

export default Wrapper;
