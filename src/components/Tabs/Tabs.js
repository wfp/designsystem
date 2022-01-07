import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import TabContent from '../TabContent';
import settings from '../../globals/js/settings';
import TabContext from './TabContext';
import isEqual from 'lodash.isequal';

const { prefix } = settings;

/** Tabs allow users to navigate easily between views within the same context */
class Tabs extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    role: 'navigation',
    triggerHref: '#',
    selected: 0,
    ariaLabel: 'listbox',
  };

  constructor(props) {
    super(props);
    this.state = {};
    // Create the ref
    this.rootRef = React.createRef();
  }

  static getDerivedStateFromProps({ selected }, state) {
    const { prevSelected } = state;
    return prevSelected === selected
      ? null
      : {
          selected,
          prevSelected: selected,
        };
  }

  getTabs() {
    return React.Children.map(this.props.children, (tab) => tab);
  }

  getTabAt = (index) => {
    const prop = this.state[`tab${index}`];
    return prop || React.Children.toArray(this.props.children)[index];
  };

  setTabAt = (index, tabRef) => {
    this.setState({ ...this.state, [`tab${index}`]: tabRef });
  };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  handleTabClick = (onSelectionChange) => {
    return (index, label, evt) => {
      if (evt) {
        evt.preventDefault();
      }
      this.selectTabAt(index, onSelectionChange);
    };
  };

  handleTabKeyDown = (onSelectionChange) => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        this.selectTabAt(index, onSelectionChange);
      }
    };
  };

  handleTabAnchorFocus = (onSelectionChange) => {
    return (index) => {
      const tabCount = React.Children.count(this.props.children) - 1;
      let tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      const tab = this.getTabAt(tabIndex);

      if (tab) {
        this.selectTabAt(tabIndex, onSelectionChange);
        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

  selectTabAt = (index, onSelectionChange) => {
    if (this.state.selected !== index) {
      this.setState({
        selected: index,
      });
      if (typeof onSelectionChange === 'function') {
        onSelectionChange(index);
      }
    }
  };

  recalculateTabs = () => {
    const {
      ariaLabel,
      disableAnimation,
      inline,
      className,
      customTabContent,
      triggerHref,
      role,
      onSelectionChange,
      ...other
    } = this.props;
    const { selected } = this.state;
    const tabsWithProps = this.getTabs().map((tab, index) => {
      const newTab = React.cloneElement(tab, {
        index,
        selected: index === selected,
        handleTabClick: this.handleTabClick(onSelectionChange),
        handleTabAnchorFocus: this.handleTabAnchorFocus(onSelectionChange),
        ref: (e) => {
          this.setTabAt(index, e);
        },
        handleTabKeyDown: this.handleTabKeyDown(onSelectionChange),
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

    this.setState({
      ...this.state,
      tabsWithProps,
      tabContentWithProps,
    });
  };

  componentDidMount() {
    this.recalculateTabs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !isEqual(this.props.children, prevProps.children) ||
      !isEqual(prevState.selected, this.state.selected)
    ) {
      this.recalculateTabs();
    }
  }

  render() {
    const {
      ariaLabel,
      disableAnimation,
      inline,
      className,
      customTabContent,
      triggerHref,
      role,
      onSelectionChange,
      ...other
    } = this.props;

    const { tabsWithProps, tabContentWithProps } = this.state;

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

    const st = this.getTabAt(this.state.selected)?.ref?.current ?? null;
    const selectedTab = st ?? null;

    return (
      <TabContext.Provider value={{ prevTab: selectedTab }}>
        <nav {...other} className={classes.tabs} role={role}>
          <ul ref={this.rootRef} role="tablist" className={classes.tablist}>
            {tabsWithProps}
          </ul>
        </nav>
        {tabContentWithProps}
      </TabContext.Provider>
    );
  }
}

export default Tabs;
