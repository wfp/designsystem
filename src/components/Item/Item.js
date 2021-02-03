import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
const { prefix } = settings;

/** The item component can be used whenever a section should indicate that there is no content available. This can be the case for a item list table or search results. */
export const Item = ({
  additional,
  button,
  children,
  className,
  href,
  subText,
  icon,
  hint,
  title,
  kind = 'large',
  ...other
}) => {
  const classNames = classnames(
    {
      [`${prefix}--item`]: true,
      [`${prefix}--item--${kind}`]: kind,
    },
    className
  );
  return (
    <div className={classNames} {...other}>
      <div className={`${prefix}--item__icon`}>{icon}</div>
      <div className={`${prefix}--item__content`}>
        {title && (
          <h2 className={`${prefix}--item__title`}>
            {title}
            {additional && (
              <div className={`${prefix}--item__additional`}>{additional}</div>
            )}
          </h2>
        )}
        <div className={`${prefix}--item__textwrapper`}>
          <div>
            {children && (
              <div className={`${prefix}--item__text`}>{children}</div>
            )}
            {subText && (
              <div className={`${prefix}--item__subtext`}>{subText}</div>
            )}
          </div>
          <div className={`${prefix}--item__right`}>
            {hint && <div className={`${prefix}--item__hint`}>{hint}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  /**
   * Provide the description for the item content
   */
  children: PropTypes.node,

  /**
   * Provide the title for the item contet
   */
  title: PropTypes.node,

  /**
   * Provide the icon for the item content
   */
  icon: PropTypes.node,

  /**
   * Provide one or multiple buttons
   */
  button: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide a kind to use different appearances.
   */
  kind: PropTypes.oneOf(['undefined', 'large']),
};

export default Item;
