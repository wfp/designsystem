import React from 'react';
import SkeletonText from '../SkeletonText';

export default class PaginationSkeleton extends React.Component {
  render() {
    return (
      <div className="wfp--pagination wfp--skeleton">
        <div className="wfp--pagination__left">
          <SkeletonText width="70px" />
          <SkeletonText width="35px" />
          <SkeletonText width="105px" />
        </div>
        <div className="wfp--pagination__right wfp--pagination--inline">
          <SkeletonText width="70px" />
        </div>
      </div>
    );
  }
}
