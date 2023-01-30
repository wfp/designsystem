import PropTypes from 'prop-types';
import React from 'react';
import useSettings from '../../hooks/useSettings';

const NumberInputSkeleton = ({ hideLabel, id }) => {
  const { prefix } = useSettings();
  const label = hideLabel ? null : (
    <label className={`${prefix}--label ${prefix}--skeleton`} htmlFor={id} />
  );

  return (
    <div className={`${prefix}--form-item`}>
      {label}
      <div className={`${prefix}--number ${prefix}--skeleton`} />
    </div>
  );
};

NumberInputSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,
};

export default NumberInputSkeleton;
