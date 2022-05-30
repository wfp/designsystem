import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const SecondaryNavigationTitle = ({ className, children }) => {
  const wrapperClasses = classNames(
    `${prefix}--secondary-navigation__title`,
    className
  );
  return <h1 className={wrapperClasses}>{children}</h1>;
};

SecondaryNavigationTitle.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,

  /**
   * The content of the SecondaryNavigation can be fully customized.
   */
  children: PropTypes.node.isRequired,
};

/** The SecondaryNavigation shows the page title and and optional tab navigation. */
const SecondaryNavigation = ({
  additional,
  children,
  className,
  wrapperClassName,
  id,
  pageWidth,
}) => {
  const wrapperClasses = classNames(
    `${prefix}--secondary-navigation`,
    className,
    wrapperClassName
  );

  return (
    <div id={id} className={wrapperClasses}>
      <Wrapper
        pageWidth={pageWidth}
        className={`${prefix}--secondary-navigation__wrapper`}>
        <div className={`${prefix}--secondary-navigation__list`}>
          {children}
        </div>
        {additional && (
          <div className={`${prefix}--secondary-navigation__additional`}>
            {additional}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

SecondaryNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element
   */
  className: PropTypes.string,
  id: PropTypes.string,
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  wrapperClassName: PropTypes.string,
  /**
   * The additional prop is for any additional information tto be added at the right corner
   */
  additional: PropTypes.node,
};

SecondaryNavigation.defaultProps = {
  pageWidth: 'lg',
};

export { SecondaryNavigationTitle, SecondaryNavigation };
