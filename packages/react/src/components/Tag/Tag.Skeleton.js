import React from 'react';
import useSettings from '../../hooks/useSettings';

const TagSkeleton = () => {
  const { prefix } = useSettings();
  return <span className={`${prefix}--tag ${prefix}--skeleton`} />;
};

export default TagSkeleton;
