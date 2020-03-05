import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import settings from '../../globals/js/settings';

const { prefix } = settings;

export default class StepNavigation extends React.Component {
  static propTypes = {
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
     * Provide a customTabContent by using independent action triggers
     * inside the Tabs
     */
    customTabContent: PropTypes.bool,

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
     * Optionally provide an `onClick` handler that is invoked when a <Tab> is
     * clicked
     */
    onClick: PropTypes.func,

    /**
     * Provide an optional handler that is called whenever the selection
     * changes. This method is called with the index of the tab that was
     * selected
     */
    onSelectionChange: PropTypes.func,
    /**
     * Optionally provide an index for the currently selected <Tab>
     */
    selected: PropTypes.number,
  };

  static defaultProps = {
    iconDescription: 'show menu options',
    role: 'navigation',
    triggerHref: '#',
    selected: 0,
    ariaLabel: 'listbox',
  };

  state = {
    dropdownHidden: true,
  };

  getTabs() {
    return React.Children.map(this.props.children, tab => tab);
  }

  getTabAt = index => {
    return (
      this[`tab${index}`] || React.Children.toArray(this.props.children)[index]
    );
  };

  setTabAt = (index, tabRef) => {
    this[`tab${index}`] = tabRef;
  };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  handleTabClick = onSelectionChange => {
    return (index, label, evt) => {
      evt.preventDefault();
      this.selectTabAt(index, onSelectionChange);
    };
  };

  handleTabKeyDown = onSelectionChange => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        this.selectTabAt(index, onSelectionChange);
        this.setState({
          dropdownHidden: true,
        });
      }
    };
  };

  handleTabAnchorFocus = onSelectionChange => {
    return index => {
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

  handleDropdownClick = () => {
    this.setState({
      dropdownHidden: !this.state.dropdownHidden,
    });
  };

  selectTabAt = (index, onSelectionChange) => {
    console.log(this.state.selected, index);
    this.props.handleTabClick(index);
    if (typeof onSelectionChange === 'function') {
      onSelectionChange(index);
    }
    //}
  };

  render() {
    const {
      inline,
      small,
      vertical,
      className,
      role,
      selectedPage,
      onSelectionChange,
    } = this.props;

    const tabsWithProps = this.getTabs().map((tab, index) => {
      const newTab = React.cloneElement(tab, {
        index,
        //selected: index === this.state.selected,
        selectedPage: selectedPage,
        handleTabClick: this.handleTabClick(onSelectionChange),
        handleTabAnchorFocus: this.handleTabAnchorFocus(onSelectionChange),
        ref: e => {
          this.setTabAt(index, e);
        },
        handleTabKeyDown: this.handleTabKeyDown(onSelectionChange),
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
      tablist: classNames('wfp--step-navigation__nav', {
        'wfp--step-navigation__nav--hidden': this.state.dropdownHidden,
        'wfp--step-navigation__nav--inline': inline,
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
}
