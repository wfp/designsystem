import React from 'react';
import useSettings from '../../hooks/useSettings';

const BreadcrumbSkeleton = () => {
  const { prefix } = useSettings();
  const item = (
    <div className={`${prefix}--breadcrumb-item`}>
      <a href="/#" className={`${prefix}--link`}>
        &nbsp;
      </a>
    </div>
  );
  return (
    <div className={`${prefix}--breadcrumb ${prefix}--skeleton`}>
      {item}
      {item}
      {item}
    </div>
  );
};

export default BreadcrumbSkeleton;
