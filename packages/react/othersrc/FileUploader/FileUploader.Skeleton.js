import React from 'react';
import SkeletonText from '../SkeletonText';
import ButtonSkeleton from '../Button/Button.Skeleton';
import useSettings from '../../hooks/useSettings';

const FileUploaderSkeleton = () => {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--form-item`}>
      <SkeletonText heading width="100px" />
      <SkeletonText width="225px" className={`${prefix}--label-description`} />
      <ButtonSkeleton />
    </div>
  );
};

export default FileUploaderSkeleton;
