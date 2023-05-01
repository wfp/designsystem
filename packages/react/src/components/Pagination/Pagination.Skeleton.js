import React from 'react';
import SkeletonText from '../SkeletonText';
import useSettings from '../../hooks/useSettings';

const PaginationSkeleton = () => {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--pagination ${prefix}--skeleton`}>
      <div className={`${prefix}--pagination__left`}>
        <SkeletonText width="70px" />
        <SkeletonText width="35px" />
        <SkeletonText width="105px" />
      </div>
      <div
        className={`${prefix}--pagination__right ${prefix}--pagination--inline`}>
        <SkeletonText width="70px" />
      </div>
    </div>
  );
};

export default PaginationSkeleton;
