import * as React from 'react';
import classNames from 'classnames';
import { componentsX } from '../../internal/FeatureFlags';
import useSettings from '../../hooks/useSettings';

interface LoadingProps {
  active?: boolean;
  className?: string;
  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay?: boolean;
  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small?: boolean;
}

/** Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway. */

const Loading: React.FC<LoadingProps> = (props) => {
  const {
    active = true,
    className,
    withOverlay = true,
    small = false,
    ...other
  } = props;
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
          className={componentsX ? `${prefix}--loading__stroke` : undefined}
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

Loading.displayName = 'Loading';

export default Loading;
