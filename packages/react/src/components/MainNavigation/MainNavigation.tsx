import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';
import { ScreenSize } from '../../utils';
import MainNavigationContext from './MainNavigationContext';
/** The Main Navigation is a Horizontal Menu which consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page. The currently selected item is usually highlighted. */

interface MainNavigationProps extends React.ComponentPropsWithRef<'div'> {
  logo?: string | React.ReactNode;
  pageWidth?: ScreenSize;
  components?: {
    Wrapper?: React.ComponentType<any>;
  };
  mobilePageWidth?: ScreenSize;
  wrapperClassName?: string;
  className?: string;
  id?: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({
  children,
  components: componentsOverride = {},
  className,
  id,
  logo,
  mobilePageWidth,
  pageWidth,
}) => {
  const { prefix } = useSettings();
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const onChangeSub = (action: string, i?: string, e?: any) => {
    if (e) e.preventDefault();

    if (action === 'close') {
      setActiveMenuItem(null);
    } else if (action === 'toggle') {
      const newI = activeMenuItem === null || activeMenuItem !== i ? i : null;
      if (newI) setActiveMenuItem(newI);
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

  const Components = { Wrapper, ...componentsOverride };

  return (
    <div id={id} className={wrapperClasses}>
      <MainNavigationContext.Provider
        value={{ activeMenuItem, openMobile, toggleMenu, onChangeSub }}>
        <Components.Wrapper
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
        </Components.Wrapper>
      </MainNavigationContext.Provider>
    </div>
  );
};

MainNavigation.displayName = 'MainNavigation';

export default MainNavigation;
