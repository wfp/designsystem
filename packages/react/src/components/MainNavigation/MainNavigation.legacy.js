import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';
/** The Main Navigation is a Horizontal Menu which consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page. The currently selected item is usually highlighted. */

const MainNavigation = ({
  children,
  className,
  id,
  logo,
  mobilePageWidth,
  pageWidth,
}) => {
  const { prefix } = useSettings();
  const [openMobile, setOpenMobile] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(undefined);

  const onChangeSub = (action, i, e) => {
    if (e) {
      e.preventDefault();
    }

    if (action === 'close') {
      setActiveMenuItem(null);
    } else if (action === 'toggle') {
      const newI =
        activeMenuItem === null || activeMenuItem !== i ? i : undefined;
      setActiveMenuItem(newI);
    }
  };

  const toggleMenu = () => {
    setOpenMobile(!openMobile);
  };

  // const triggerSubNavigation = () => {
  //   setActiveMenuItem(undefined);
  // };

  // const handleClickOutside = () => {
  //   setActiveMenuItem(undefined);
  // };

  const wrapperClasses = classNames(`${prefix}--main-navigation`, className);

  const listClasses = classNames(`${prefix}--main-navigation__list`, {
    [`${prefix}--main-navigation__list--open`]: openMobile,
  });

  const parentProps = {
    onChangeSub: onChangeSub,
    toggleMenu: toggleMenu,
  };

  const childrenSelect =
    typeof children === 'function'
      ? children(parentProps).props.children
      : children;

  return (
    <div id={id} className={wrapperClasses}>
      <Wrapper
        pageWidth={pageWidth}
        mobilePageWidth={mobilePageWidth}
        className={`${prefix}--main-navigation__wrapper`}>
        <div className={`${prefix}--main-navigation__logo-wrapper`}>
          <Button
            className={`${prefix}--main-navigation__button`}
            onClick={toggleMenu}>
            Menu
          </Button>
          <div className={`${prefix}--main-navigation__logo`}>{logo}</div>
        </div>
        <ul className={listClasses}>
          {React.Children.map(childrenSelect, (child, i) => {
            if (child) {
              return React.cloneElement(child, {
                activeMenuItem: activeMenuItem,
                menuItem: i,
                onChangeSub: onChangeSub,
              });
            } else return null;
          })}
        </ul>
      </Wrapper>
    </div>
  );
};

MainNavigation.propTypes = {
  /**
   * Usually multiple `MainNavigationItem` elements
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Defines an ID for the component.
   */
  id: PropTypes.string,
  /**
   * The Logo can be either a string or a component
   */
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  /**
   * Specify the max-width on mobile devices (same as \`Wrapper\` component)
   */
  mobilePageWidth: PropTypes.string,
  /**
   * Additional className for the `Wrapper`
   */
  wrapperClassName: PropTypes.string,
};

MainNavigation.defaultProps = {
  pageWidth: 'lg',
  mobilePageWidth: 'full',
  logo: 'WFP',
};

export default MainNavigation;
