import PropTypes from 'prop-types';
import React from 'react';

const SliderSkeleton = ({ hideLabel, id }) => {
  const label = hideLabel ? null : (
    <label className="wfp--label wfp--skeleton" htmlFor={id} />
  );

  return (
    <div className="wfp--form-item">
      {label}
      <div className="wfp--slider-container wfp--skeleton">
        <span className="wfp--slider__range-label" />
        <div className="wfp--slider">
          <div className="wfp--slider__track" />
          <div className="wfp--slider__filled-track" />
          <div className="wfp--slider__thumb" />
        </div>
        <span className="wfp--slider__range-label" />
      </div>
    </div>
  );
};

SliderSkeleton.propTypes = {
  hideLabel: PropTypes.bool,
};

export default SliderSkeleton;
