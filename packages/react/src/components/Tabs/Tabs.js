import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import TabContent from '../TabContent';
import useSettings from '../../hooks/useSettings';

/** Tabs allow users to navigate easily between views within the same context */
const Tabs = (props) => {
  const {
    ariaLabel,
    disableAnimation,
    inline,
    className,
    customTabContent,
    triggerHref,
    role,
    onSelectionChange,
    selected,
    children,
    ...other
  } = props;
  const { prefix } = useSettings();
  const [currentSelected, setCurrentSelected] = useState(selected);
  const [sizes, setSizes] = useState();
  const rootRef = useRef(null);

  useEffect(() => {
    if (selected !== currentSelected) {
      setCurrentSelected(selected);
    }
  }, [selected]);

  useEffect(() => {
    getSizes();
    window.addEventListener('resize', getSizes);
    return () => {
      window.removeEventListener('resize', getSizes);
    };
  }, []);

  const classes = {
    tabs: classNames(
      `${prefix}--tabs`,
      { [`${prefix}--tabs--no-animation`]: disableAnimation },
      className
    ),
    tablist: classNames(`${prefix}--tabs__nav`, {
      [`${prefix}--tabs__nav--inline`]: inline,
    }),
  };

  function getTabs() {
    return React.Children.map(props.children, (tab) => tab);
  }

  const getTabAt = (index) => {
    return this[`tab${index}`] || React.Children.toArray(props.children)[index];
  };

  const getSizes = () => {
    if (rootRef.current === null || rootRef.current.length > 1) {
      return null;
    }
    const rootBounds = rootRef.current.getBoundingClientRect();
    const sizes = {};
    Object.values(rootRef.current.children).forEach((el, key) => {
      const bounds = el.children[0].getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = { left, right };
    });
    setSizes(sizes);
  };

  //   const setTabAt = (index, tabRef) => {
  //     this[`tab${index}`] = tabRef;
  //   };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  const handleTabClick = (onSelectionChange) => {
    return (index, label, evt) => {
      if (evt) {
        evt.preventDefault();
      }
      selectTabAt(index, onSelectionChange);
    };
  };

  const handleTabKeyDown = (onSelectionChange) => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        selectTabAt(index, onSelectionChange);
      }
    };
  };

  const handleTabAnchorFocus = (onSelectionChange) => {
    return (index) => {
      const tabCount = React.Children.count(props.children) - 1;
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

  const selectTabAt = (index, onSelectionChange) => {
    if (currentSelected !== index) {
      setCurrentSelected(index);
      if (typeof onSelectionChange === 'function') {
        onSelectionChange(index);
      }
    }
  };

  //   const { selected, sizes } = this.state;

  const tabsWithProps = getTabs().map((Tab, index) => {
    const newTab = React.cloneElement(Tab, {
      index,
      selected: index === currentSelected,
      handleTabClick: handleTabClick(onSelectionChange),
      handleTabAnchorFocus: handleTabAnchorFocus(onSelectionChange),
      //   ref: (e) => {
      //     setTabAt(index, e);
      //   },
      handleTabKeyDown: handleTabKeyDown(onSelectionChange),
    });

    return newTab;
  });

  const tabContentWithProps = !customTabContent
    ? React.Children.map(tabsWithProps, (tab) => {
        const { children, selected } = tab.props;
        if (!children) {
          return null;
        }
        return (
          <TabContent
            className={`${prefix}--tab-content`}
            aria-hidden={!selected}
            hidden={!selected}
            selected={selected}>
            {children}
          </TabContent>
        );
      })
    : null;

  const sizeBar = sizes ? sizes[currentSelected] : undefined;

  return (
    <>
      <nav {...other} className={classes.tabs} role={role}>
        <div className={`${prefix}--tabs__nav__bar`} style={sizeBar}></div>
        <ul ref={rootRef} role="tablist" className={classes.tablist}>
          {tabsWithProps}
        </ul>
      </nav>
      {tabContentWithProps}
    </>
  );
};

Tabs.propTypes = {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel: PropTypes.string,

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes.string,

  /**
   * Provide a customTabContent by using independent action triggers
   * inside the Tabs
   */
  customTabContent: PropTypes.bool,

  /**
   * Specify whether the animation should be used
   */
  disableAnimation: PropTypes.bool,

  /**
   * Specify whether the Tabs are displayed inline
   */
  inline: PropTypes.bool,

  /**
   * Specify whether the Tab content is hidden
   */
  hidden: PropTypes.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown: PropTypes.func,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func,

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: PropTypes.string.isRequired,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes.number,
};

Tabs.defaultProps = {
  role: 'navigation',
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox',
};

export default Tabs;
