import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className="wfp--label">
      {label}
    </label>
  );
};

export default Label;
