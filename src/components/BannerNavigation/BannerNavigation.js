import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

const BannerNavigationItem = ({ className, children }) => {
  const wrapperClasses = classNames('wfp--banner-navigation__item', className);
  return <li className={wrapperClasses}>{children}</li>;
};

BannerNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const BannerNavigation = ({ children, className, id, pageWidth }) => {
  const wrapperClasses = classNames('wfp--banner-navigation', className);

  return (
    <div id={id} className={wrapperClasses}>
      <Wrapper pageWidth={pageWidth}>
        <ul className="wfp--banner-navigation__list">{children}</ul>
      </Wrapper>
    </div>
  );
};

BannerNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  id: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

BannerNavigation.defaultProps = {
  pageWidth: 'narrower',
};

export { BannerNavigationItem, BannerNavigation };
