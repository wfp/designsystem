import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import TabContent from '../TabContent';
import { withUNCoreSettings } from '../UNCoreSettings';

/** Tabs allow users to navigate easily between views within the same context */
class Tabs extends React.Component {
  static propTypes = {
    prefix: PropTypes.string.isRequired,
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

  componentDidMount() {
    this.getSizes();
    window.addEventListener('resize', this.getSizes);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getSizes);
  }

  getTabs() {
    return React.Children.map(this.props.children, (tab) => tab);
  }

  getTabAt = (index) => {
    return (
      this[`tab${index}`] || React.Children.toArray(this.props.children)[index]
    );
  };

  getSizes = () => {
    if (this.rootRef.current === null || this.rootRef.current.length > 1) {
      return null;
    }
    const rootBounds = this.rootRef.current.getBoundingClientRect();
    const sizes = {};
    Object.values(this.rootRef.current.children).forEach((el, key) => {
      const bounds = el.children[0].getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = { left, right };
    });

    this.setState({ sizes });
    return sizes;
  };

  setTabAt = (index, tabRef) => {
    this[`tab${index}`] = tabRef;
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

  render() {
    const {
      prefix,
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

    const { selected, sizes } = this.state;

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

    const sizeBar = sizes ? sizes[selected] : undefined;

    return (
      <>
        <nav {...other} className={classes.tabs} role={role}>
          <div className={`${prefix}--tabs__nav__bar`} style={sizeBar}></div>
          <ul ref={this.rootRef} role="tablist" className={classes.tablist}>
            {tabsWithProps}
          </ul>
        </nav>
        {tabContentWithProps}
      </>
    );
  }
}

export default withUNCoreSettings(Tabs);
