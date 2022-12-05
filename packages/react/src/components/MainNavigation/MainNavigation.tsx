import React, { useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';
import { ScreenSize } from '../../types/utils';
import MainNavigationContext from './MainNavigationContext';
/** The Main Navigation is a Horizontal Menu which consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page. The currently selected item is usually highlighted. */

type MainNavigationProps = PropsWithChildren<{
  logo?: string | React.ReactNode;
  pageWidth?: ScreenSize;
  mobilePageWidth?: ScreenSize;
  wrapperClassName?: string;
  className?: string;
  id?: string;
}>;

const MainNavigation: React.FC<MainNavigationProps> = ({
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
    // console.log('unchange', action, i, e);
    if (e) {
      e.preventDefault();
    }

    if (action === 'close') {
      setActiveMenuItem(undefined);
    } else if (action === 'toggle') {
      const newI =
        activeMenuItem === undefined || activeMenuItem !== i ? i : undefined;
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

  return (
    <div id={id} className={wrapperClasses}>
      <MainNavigationContext.Provider
        value={{ activeMenuItem, openMobile, toggleMenu, onChangeSub }}>
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
          <ul className={listClasses}>{children}</ul>
        </Wrapper>
      </MainNavigationContext.Provider>
    </div>
  );
};

export default MainNavigation;
