import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
//import TabContent from '../TabContent';
import useSettings from '../../hooks/useSettings';
import TabsContext from './TabsContext';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel?: string;

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children?: React.ReactNode;

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className?: string;

  /**
   * Provide a customTabContent by using independent action triggers
   * inside the Tabs
   */
  customTabContent?: boolean;

  /**
   * Specify whether the animation should be used
   */
  disableAnimation?: boolean;

  /**
   * Specify whether the Tabs are displayed inline
   */
  inline?: boolean;

  /**
   * Specify whether the Tab content is hidden
   */
  hidden?: boolean;

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role?: string;

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick?: () => void;

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown?: () => void;

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange?: () => void;

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref?: string;

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected?: string;
}

/** Tabs allow users to navigate easily between views within the same context */
const Tabs: React.FC<TabsProps> = (props) => {
  const {
    // ariaLabel = 'listbox',
    disableAnimation,
    inline,
    className,
    //customTabContent,
    // triggerHref = '#',
    role = 'navigation',
    //onSelectionChange,
    selected = null,
    // children,
    ...other
  } = props;

  const { prefix } = useSettings();
  const [currentSelected, setCurrentSelected] = useState<string | null>(
    selected
  );
  //const [sizes, setSizes] = useState<boolean>();
  const rootRef = useRef(null);

  useEffect(() => {
    if (selected !== currentSelected) {
      setCurrentSelected(selected);
    }
  }, [selected]);

  /*useEffect(() => {
    getSizes();
    // eslint-disable-next-line no-undef
    if (window) {
      // eslint-disable-next-line no-undef
      window.addEventListener('resize', getSizes);
      return () => {
        // eslint-disable-next-line no-undef
        window.removeEventListener('resize', getSizes);
      };
    }
  }, []);*/

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

  /*function getTabs() {
    return React.Children.map(props.children, (tab) => tab);
  }*/

  /*const getTabAt = (index) => {
    return this[`tab${index}`] || React.Children.toArray(props.children)[index];
  };*/

  /*const getSizes = () => {
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
*/
  //   const setTabAt = (index, tabRef) => {
  //     this[`tab${index}`] = tabRef;
  //   };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  const handleTabClick = (/*onSelectionChange*/) => {
    return (index, label, evt) => {
      if (evt) {
        evt.preventDefault();
      }
      // selectTabAt(index, onSelectionChange);
    };
  };

  const handleTabKeyDown = (/*onSelectionChange*/) => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        //selectTabAt(index, onSelectionChange);
      }
    };
  };

  const handleTabAnchorFocus = (/*onSelectionChange*/) => {
    /* return (index) => {
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
    };*/
  };

  /*const selectTabAt = (index, onSelectionChange) => {
    /* if (currentSelected !== index) {
      setCurrentSelected(index);
      if (typeof onSelectionChange === 'function') {
        onSelectionChange(index);
      }
    }
  };*/

  //   const { selected, sizes } = this.state;

  /*const tabsWithProps = getTabs().map((Tab, index) => {
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
    */

  //const sizeBar = sizes ? sizes[currentSelected] : undefined;

  return (
    <TabsContext.Provider
      value={{ handleTabClick, handleTabKeyDown, handleTabAnchorFocus }}>
      <nav {...other} className={classes.tabs} role={role}>
        <div className={`${prefix}--tabs__nav__bar`} /*style={sizeBar}*/></div>
        <ul ref={rootRef} role="tablist" className={classes.tablist}>
          {props.children}
        </ul>
      </nav>
    </TabsContext.Provider>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
