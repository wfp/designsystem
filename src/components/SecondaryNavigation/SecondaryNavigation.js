import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

const SecondaryNavigationTitle = ({className, children}) => {

  const wrapperClasses = classNames(
    'wfp--secondary-navigation__title',
    className
  );
	return (
		<h1 className={wrapperClasses}>
			{children}
		</h1>
	)
};

SecondaryNavigationTitle.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const SecondaryNavigation = ({additional, children, className, id, pageWidth}) => {

  const wrapperClasses = classNames(
    'wfp--secondary-navigation',
    className
  );

  return (
    <div id={id} className={wrapperClasses}>
			<Wrapper pageWidth={pageWidth} className="wfp--secondary-navigation__wrapper">
				<div className="wfp--secondary-navigation__list">
					{children}
				</div>
        {additional &&
          <div className="wfp--secondary-navigation__additional">
            {additional}
          </div>
        }
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

export { SecondaryNavigationTitle, SecondaryNavigation };
