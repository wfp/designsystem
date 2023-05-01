/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';

const SelectSkeleton = ({ hideLabel, id }) => {
  const label = hideLabel ? null : (
    <label className="wfp--label wfp--skeleton" htmlFor={id} />
  );

  return (
    <div className="wfp--form-item">
      {label}
      <div className="wfp--select wfp--skeleton">
        <select className="wfp--select-input" />
      </div>
    </div>
  );
};

SelectSkeleton.propTypes = {
  hideLabel: PropTypes.bool,
};

export default SelectSkeleton;
