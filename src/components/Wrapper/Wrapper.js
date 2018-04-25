import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Wrapper = (props) => {

  const { background, children, className, pageWidth, ...other } = props;
  const wrapperClasses = classNames({
    'wfp--wrapper' : true,
    'wfp--wrapper--narrow' : pageWidth === 'narrow',
    'wfp--wrapper--narrower' : pageWidth === 'narrower',
    'wfp--wrapper--narrow wfp--wrapper--mobile-full' : pageWidth === 'narrow-full',
    'wfp--wrapper--narrower wfp--wrapper--mobile-full' : pageWidth === 'narrower-full',
    [`${className}`]: className,
  });
  if (background) {
    const backgroundClasses = classNames({
      'wfp--wrapper--background-lighter' : background === 'lighter',
    });

    return (
      <div className={backgroundClasses}>
        <div className={wrapperClasses} {...other}>
        {children}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={wrapperClasses} {...other}>
        {children}
      </div>
    );
  }
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
