import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Label = ({ children, hideLabel, input, label, id, /* info, */ isRequired, ...other }) => {

  if (children !== false && label !== false) {
    const labelClasses = classNames({
      'wfp--label': true,
      'wfp--visually-hidden': hideLabel,
      'label--required': isRequired
    }); 
    return (
      <label
        {...other}
        className={labelClasses}
        htmlFor={id ? id : input ? input.name : ''}
      >
        {children ? children : label}
      </label>
    );
  }
  else {
    return null;
  }
};

Label.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool
};

export default Label;
