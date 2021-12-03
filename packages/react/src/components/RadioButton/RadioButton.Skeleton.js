import React from 'react';
import useSettings from '../../hooks/useSettings';

const RadioButtonSkeleton = (props) => {
  const { prefix } = useSettings();
  const { id } = props;
  return (
    <div className="radioButtonWrapper">
      <div className={`${prefix}--radio-button ${prefix}--skeleton`} />
      {
        /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
        <label
          className={`${prefix}--radio-button__label ${prefix}--skeleton`}
          htmlFor={id}
        />
      }
    </div>
  );
};

export default RadioButtonSkeleton;
