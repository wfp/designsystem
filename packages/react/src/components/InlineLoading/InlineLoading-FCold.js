/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Loading from '../Loading';

const InlineLoading = (props) => {
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

InlineLoading.propTypes = {
  className: PropTypes.string,

  /**
   * Specify whether the load was successful
   */
  success: PropTypes.bool,

  /**
   * Specify the description for the inline loading text
   */
  description: PropTypes.node,

  /**
   * Provide an optional handler to be invoked when <InlineLoading> is
   * successful
   */
  onSuccess: PropTypes.func,

  /**
   * Provide a delay for the `setTimeout` for success
   */
  successDelay: PropTypes.number,
};

InlineLoading.defaultProps = {
  success: false,
  successDelay: 1500,
};

export default InlineLoading;
