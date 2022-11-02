import type { PropsWithChildren } from 'react';
import React, { useState, createRef } from 'react';
import classNames, { Argument } from 'classnames';

import useSettings from '../../hooks/useSettings';

/** Step Navigation provide indications to help users reach their destination from their current position */
type StepNavigationProps = PropsWithChildren<{
  className?: Argument;
  small?: boolean;
  vertical?: boolean;
  inline?: boolean;
  role: string;
  onSelectionChange?: React.FormEventHandler;
  selectedPage?: number;
}>;

const StepNavigation: React.FC<StepNavigationProps> = ({
  children,
  inline,
  small,
  vertical,
  className,
  role,
  selectedPage,
  onSelectionChange,
}) => {
  const { prefix } = useSettings();
  const [dropdownHidden] = useState(true);
  const [elRefs, setElRefs] = useState({});

  const getTabAt = (index) => {
    return elRefs[`tab${index}`] || React.Children.toArray(children)[index];
  };

  const getTabs = () => {
    return React.Children.map(children, (tab) => tab);
  };

  const arrLength = getTabs()?.length;

  React.useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  // const setTabAt = (index, tabRef) => {
  //   //setElRefs({ ...elRefs, [`tab${index}`]: tabRef });
  // };

  const handleTabClick = (onSelectionChange) => {
    return (index, label, evt) => {
      evt.preventDefault();
      selectTabAt(index, onSelectionChange);
    };
  };

  const handleTabAnchorFocus = (onSelectionChange) => {
    return (index) => {
      const tabCount = React.Children.count(children) - 1;
      let tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      const tab = getTabAt(tabIndex);

      if (tab) {
        selectTabAt(tabIndex, onSelectionChange);
        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

  // const handleDropdownClick = () => {
  //   setDropdownHidden(!dropdownHidden);
  // };

  const selectTabAt = (index, onSelectionChange) => {
    handleTabClick(index);
    if (typeof onSelectionChange === 'function') {
      onSelectionChange(index);
    }
  };

  const tabsWithProps = getTabs()?.map((tab, index) => {
    const newTab = React.cloneElement(tab, {
      index,
      selectedPage: selectedPage,
      handleTabClick: handleTabClick(onSelectionChange),
      handleTabAnchorFocus: handleTabAnchorFocus(onSelectionChange),
      ref: elRefs[index],
    });

    return newTab;
  });

  const classes = {
    tabs: classNames(className, {
      [`${prefix}--step-navigation`]: true,
      [`${prefix}--step-navigation--vertical`]: vertical,
      [`${prefix}--step-navigation--small`]: small,
      [`${prefix}--step-navigation--regular`]: !small,
    }),
    tablist: classNames(`${prefix}--step-navigation__nav`, {
      [`${prefix}--step-navigation__nav--hidden`]: dropdownHidden,
      [`${prefix}--step-navigation__nav--inline`]: inline,
    }),
  };

  return (
    <>
      <nav className={classes.tabs} role={role}>
        <ul role="tablist" className={classes.tablist}>
          {tabsWithProps}
        </ul>
      </nav>
    </>
  );
};

export default StepNavigation;
