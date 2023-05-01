import React from 'react';
import useSettings from '../../hooks/useSettings';

interface NumberInputSkeletonProps {
  /**
   * Specify whether the label should be hidden, or not
   **/
  hideLabel?: boolean;
  id?: string;
}

const NumberInputSkeleton: React.FC<NumberInputSkeletonProps> = ({
  hideLabel,
  id,
}) => {
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

export default NumberInputSkeleton;
