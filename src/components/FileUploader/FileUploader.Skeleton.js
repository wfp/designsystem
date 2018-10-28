import React from 'react';
import SkeletonText from '../SkeletonText';
import ButtonSkeleton from '../Button/Button.Skeleton';

export default class FileUploaderSkeleton extends React.Component {
  render() {
    return (
      <div className="wfp--form-item">
        <SkeletonText heading width="100px" />
        <SkeletonText width="225px" className="wfp--label-description" />
        <ButtonSkeleton />
      </div>
    );
  }
}