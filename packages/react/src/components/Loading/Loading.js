import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { componentsX } from '../../internal/FeatureFlags';
import useSettings from '../../hooks/useSettings';

/** Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway. */

const Loading = (props) => {
  const { active, className, withOverlay, small, ...other } = props;

  const { prefix } = useSettings();

  const loadingClasses = classNames(`${prefix}--loading`, className, {
    [`${prefix}--loading--small`]: small,
    [`${prefix}--loading--stop`]: !active,
  });

  const overlayClasses = classNames(`${prefix}--loading-overlay`, {
    [`${prefix}--loading-overlay--stop`]: !active,
  });

  const loading = (
    <div
      {...other}
      aria-live={active ? 'assertive' : 'off'}
      className={loadingClasses}>
      <svg className={`${prefix}--loading__svg`} viewBox="-75 -75 150 150">
        <title>Loading</title>
        {componentsX && small ? (
          <circle
            className={`${prefix}--loading__background`}
            cx="0"
            cy="0"
            r="37.5"
          />
        ) : null}
        <circle
          className={componentsX ? `${prefix}--loading__stroke` : null}
          cx="0"
          cy="0"
          r="37.5"
        />
      </svg>
    </div>
  );

  return withOverlay ? (
    <div className={overlayClasses}>{loading}</div>
  ) : (
    loading
  );
};

Loading.propTypes = {
  active: PropTypes.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: PropTypes.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: PropTypes.bool,
};

Loading.defaultProps = {
  active: true,
  withOverlay: true,
  small: false,
};

export default Loading;
