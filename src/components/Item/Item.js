import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { iconChevronRight } from '@wfp/icons';
import settings from '../../globals/js/settings';
import Icon from '../Icon';
const { prefix } = settings;

/** The item component to show entries inside a list, like a sidebar or an overview page. */
export const Item = ({
  active,
  additional,
  button,
  children,
  className,
  href,
  subContent,
  image,
  hint,
  noImage,
  showAdditionalIcon,
  title,
  kind = 'large',
  wrapper = 'none',
  ...other
}) => {
  const classNames = classnames(
    {
      [`${prefix}--item`]: true,
      [`${prefix}--item--${kind}`]: kind,
      [`${prefix}--item--${wrapper}`]: wrapper,
      [`${prefix}--item--active`]: active,
    },
    className
  );
  return (
    <div className={classNames} {...other}>
      {image ? (
        <div className={`${prefix}--item__image`}>{image}</div>
      ) : noImage ? (
        <div
          className={`${prefix}--item__image ${prefix}--item__image-empty`}></div>
      ) : null}

      <div className={`${prefix}--item__content`}>
        {title && (
          <div className={`${prefix}--item__title-wrapper`}>
            <h2 className={`${prefix}--item__title`}>{title}</h2>
            {additional && (
              <div className={`${prefix}--item__additional`}>
                {additional}
                {showAdditionalIcon && (
                  <Icon
                    icon={iconChevronRight}
                    className={`${prefix}--item__additional-icon`}
                  />
                )}
              </div>
            )}
          </div>
        )}
        <div className={`${prefix}--item__text-wrapper`}>
          <div>
            {children && (
              <div className={`${prefix}--item__text`}>{children}</div>
            )}
            {subContent && (
              <div className={`${prefix}--item__sub-content`}>{subContent}</div>
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
  kind: PropTypes.oneOf(['undefined', 'large', 'horizontal']),

  /**
   * Provide a wrap to use different borders.
   */
  wrapper: PropTypes.oneOf(['undefined', 'sidebar', 'repeater']),

  /**
   * Set to true of false if you want additional icon to be shown
   */
  showAdditionalIcon: PropTypes.bool,
  /**
   * Provide subcontent if needed
   */
  subContent: PropTypes.string,
  /**
   * Provide additional content if needed.
   */
  additional: PropTypes.string,
  /**
   * Provide hint to your item.
   */
  hint: PropTypes.node,
};

export default Item;
