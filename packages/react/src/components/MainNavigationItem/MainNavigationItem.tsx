import React, { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Close, CaretDown } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';
import useMainNavigation from '../MainNavigation/useMainNavigation';

interface MainNavigationItemProps {
  subNavigation?: React.ReactNode;
  activeMenuItem?: string;
  menuItem?: string;
  subNavWideAsContent?: boolean;
  onChangeSub?: (action: string, id?: number, e?: any) => void;
  className?: string;
  external?: boolean;
}

const MainNavigationItem: React.FC<
  PropsWithChildren<MainNavigationItemProps>
> = ({ className, children, subNavigation, subNavWideAsContent }) => {
  const { prefix } = useSettings();

  const { /*onChangeSub,*/ activeMenuItem /*menuItem */ } = useMainNavigation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuItemId] = useState(Math.random().toString(36));

  const wrapperRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (menuItemId === activeMenuItem) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenuItem]);

  const handleClickOutside = (e) => {
    if (wrapperRef?.current && !wrapperRef.current.contains(e.target)) {
      //onChangeSub('close');
    }
  };

  const wrapperClasses = classNames(className, {
    [`${prefix}--main-navigation__item`]: true,
    [`${prefix}--main-navigation__item--open`]: menuItemId === activeMenuItem,
    [`${prefix}--content-width`]: subNavigation && subNavWideAsContent,
  });

  const triggerClasses = classNames({
    [`${prefix}--main-navigation__trigger`]: true,
    [`${prefix}--main-navigation__trigger--has-sub`]: subNavigation,
    [`${prefix}--main-navigation__trigger--open`]:
      menuItemId === activeMenuItem,
  });

  const Icon = menuItemId === activeMenuItem ? Close : CaretDown;

  /*const childrenWithProps = subNavigation
    ? React.cloneElement(children, {
        children: (
          <React.Fragment>
            {children.props.children}
            <Icon
              className={`${prefix}--main-navigation__trigger__icon`}
              fill="#FFFFFF"
              description="expand icon"
            />
          </React.Fragment>
        ),
        onClick: (e) => onChangeSub('toggle', menuItem, e),
      })
    : children;*/

  const subClasses = classNames({
    [`${prefix}--main-navigation__sub`]: true,
    [`${prefix}--main-navigation__sub--open`]: menuItemId === activeMenuItem,
  });

  return (
    <li className={wrapperClasses} ref={wrapperRef as React.Ref<HTMLLIElement>}>
      <div
        className={triggerClasses}
        //onClick={() => onChangeSub('toggle', menuItemId)}
      >
        {children}
        {subNavigation && (
          <Icon
            className={`${prefix}--main-navigation__trigger__icon`}
            fill="#FFFFFF"
            description="expand icon"
          />
        )}
      </div>
      {subNavigation && <div className={subClasses}>{subNavigation}</div>}
    </li>
  );
};

// MainNavigationItem.propTypes = {
//   /**
//    * The CSS class name to be placed on the wrapping element.
//    */
//   className: PropTypes.string,
//   children: PropTypes.element.isRequired,
//   /**
//    * If defined the `MainNaviationItem` will have a toggleable
//    * SubNavigation. See the `SubNavigation` component for details on usage
//    */
//   subNavigation: PropTypes.node,
// };

export default MainNavigationItem;
