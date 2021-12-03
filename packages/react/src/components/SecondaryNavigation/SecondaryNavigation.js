import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';

const SecondaryNavigationTitle = ({ className, children }) => {
  const { prefix } = useSettings();

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
  id,
  pageWidth,
}) => {
  const { prefix } = useSettings();

  const wrapperClasses = classNames(
    `${prefix}--secondary-navigation`,
    className
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
};

SecondaryNavigation.defaultProps = {
  pageWidth: 'lg',
};

export { SecondaryNavigationTitle, SecondaryNavigation };
