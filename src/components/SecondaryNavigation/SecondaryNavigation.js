import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

const SecondaryNavigationItem = ({className, children}) => {

  const wrapperClasses = classNames(
    'wfp--banner-navigation__item',
    className
  );
	return (
		<li className={wrapperClasses}>
			{children}
		</li>
	)
};

SecondaryNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const SecondaryNavigation = ({children, className, id, pageWidth}) => {

  const wrapperClasses = classNames(
    'wfp--banner-navigation',
    className
  );

  return (
    <div id={id} className={wrapperClasses}>
			<Wrapper pageWidth={pageWidth}>
				<ul className="wfp--banner-navigation__list">
					{children}
				</ul>
			</Wrapper>
    </div>
  );
};

SecondaryNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  id: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

SecondaryNavigation.defaultProps = {
	pageWidth: 'narrower'
};

export { SecondaryNavigationItem, SecondaryNavigation };
