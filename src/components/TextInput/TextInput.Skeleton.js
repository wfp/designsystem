import PropTypes from 'prop-types';
import React from 'react';

const TextInputSkeleton = ({ hideLabel, id }) => {
  const label = hideLabel ? null : (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label className="wfp--label wfp--skeleton" htmlFor={id} />
  );

  return (
    <div className="wfp--form-item">
      {label}
      <div className="wfp--skeleton wfp--text-input" />
    </div>
  );
};

TextInputSkeleton.propTypes = {
  hideLabel: PropTypes.bool,
};

export default TextInputSkeleton;
