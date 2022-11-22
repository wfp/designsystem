/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Loading from '../Loading';

interface InlineLoadingProps {
  success?: boolean;
  description?: string;
  successDelay?: number;
  onSuccess?: () => void;
  className?: string;
}

const InlineLoading: React.FC<InlineLoadingProps> = (props) => {
  const { className, success, description, onSuccess, successDelay, ...other } =
    props;

  const { prefix } = useSettings();

  const loadingClasses = classNames(`${prefix}--inline-loading`, className);

  const getLoading = () => {
    if (success) {
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
      }, successDelay);

      return (
        <svg
          className={`${prefix}--inline-loading__checkmark-container ${prefix}--inline-loading__svg`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10">
          <polyline
            className={`${prefix}--inline-loading__checkmark`}
            points="0.74 3.4 3.67 6.34 9.24 0.74"
          />
        </svg>
      );
    }

    return <Loading small withOverlay={false} />;
  };

  const loadingText = (
    <p className={`${prefix}--inline-loading__text`}>{description}</p>
  );

  return (
    <div className={loadingClasses} {...other}>
      <div className={`${prefix}--inline-loading__animation`}>
        {getLoading()}
      </div>
      {description && loadingText}
    </div>
  );
};

export default InlineLoading;
