import PropTypes from 'prop-types';
import React, { useState, createRef } from 'react';
import classNames from 'classnames';

import settings from '../../globals/js/settings';

const { prefix } = settings;

/** Step Navigation provide indications to help users reach their destination from their current position */

export default function StepNavigation({
  children,
  inline,
  small,
  vertical,
  className,
  role,
  selectedPage,
  onSelectionChange,
  ...other
}) {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const [elRefs, setElRefs] = useState({});

  const getTabAt = (index) => {
    return elRefs[`tab${index}`] || React.Children.toArray(children)[index];
  };

  React.useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  const getTabs = () => {
    return React.Children.map(children, (tab) => tab);
  };

  const arrLength = getTabs().length;

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

  const tabsWithProps = getTabs().map((tab, index) => {
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
}

StepNavigation.defaultProps = {
  role: 'navigation',
  selectedPage: 0,
};

StepNavigation.propTypes = {
  /**
   * Pass in a collection of <StepNavigationItem> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes.string,

  /**
   * Specify whether the StepNavigation will be displayed small
   */
  small: PropTypes.bool,

  /**
   * Specify whether the StepNavigation will be displayed vertically
   */
  vertical: PropTypes.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func,
  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selectedPage: PropTypes.number,
};
