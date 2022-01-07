import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import TabContext from '../Tabs/TabContext';

const { prefix } = settings;

class Tab extends React.Component {
  static propTypes = {
    /**
     * Specify an optional className to be added to your Tab
     */
    className: PropTypes.string,

    /**
     * A handler that is invoked when a user clicks on the control.
     * Reserved for usage in Tabs
     */
    handleTabClick: PropTypes.func,

    /**
     * A handler that is invoked when a user presses left/right key.
     * Reserved for usage in Tabs
     */
    handleTabAnchorFocus: PropTypes.func,

    /**
     * A handler that is invoked on the key down event for the control.
     * Reserved for usage in Tabs
     */
    handleTabKeyDown: PropTypes.func,

    /**
     * Whether your Tab is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Provide a string that represents the `href` of the Tab
     */
    href: PropTypes.string.isRequired,

    /**
     * The index of your Tab in your Tabs. Reserved for usage in Tabs
     */
    index: PropTypes.number,

    /**
     * Provide the contents of your Tab
     */
    label: PropTypes.node,

    /**
     * Provide an accessibility role for your Tab
     */
    role: PropTypes.string.isRequired,

    /**
     * Provide a handler that is invoked when a user clicks on the control
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Provide a handler that is invoked on the key down event for the control
     */
    onKeyDown: PropTypes.func.isRequired,

    /**
     * Whether your Tab is selected.
     * Reserved for usage in Tabs
     */
    selected: PropTypes.bool.isRequired,

    /**
     * Specify the tab index of the <a> node
     */
    tabIndex: PropTypes.number.isRequired,

    /*
     * An optional parameter to allow overriding the anchor rendering.
     * Useful for using Tab along with react-router or other client
     * side router libraries.
     **/
    renderAnchor: PropTypes.func,

    /*
     * An optional parameter to allow overriding the content rendering.
     **/
    renderContent: PropTypes.func,
    /*
     * An optional parameter to allow overriding the list element rendering.
     **/
    renderListElement: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  static defaultProps = {
    role: 'presentation',
    label: 'provide a label',
    tabIndex: 0,
    href: '#',
    selected: false,
    onClick: () => {},
    onKeyDown: () => {},
  };

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  setTabFocus(evt) {
    const leftKey = 37;
    const rightKey = 39;
    if (evt.which === leftKey) {
      this.props.handleTabAnchorFocus(this.props.index - 1);
    } else if (evt.which === rightKey) {
      this.props.handleTabAnchorFocus(this.props.index + 1);
    } else {
      return;
    }
  }

  render() {
    const {
      className,
      disabled,
      handleTabClick,
      handleTabAnchorFocus, // eslint-disable-line
      handleTabKeyDown,
      href,
      index,
      label,
      selected,
      tabIndex,
      onClick,
      onKeyDown,
      renderAnchor,
      renderListElement,
    } = this.props;

    const classes = classNames(
      `${prefix}--tabs__nav-item`,
      { [`${prefix}--tabs__nav-item--disabled`]: disabled },
      { [`${prefix}--tabs__nav-item--selected`]: selected },
      className
    );

    const selectedClasses = classNames(
      `${prefix}--tabs__nav-item`,
      `${prefix}--tabs__nav-item--selected`,
      className
    );

    const anchorProps = {
      className: 'wfp--tabs__nav-link',
      href: disabled ? undefined : href,
      label,
      role: 'tab',
      tabIndex,
      'aria-selected': selected,
      ref: (e) => {
        this.tabAnchor = e;
      },
    };

    //  {...other}
    const liProps = {
      tabIndex: -1,
      className: classes,
      onClick: (evt) => {
        if (!disabled) {
          handleTabClick(index, label, evt);
          onClick(evt);
        }
      },
      onKeyDown: (evt) => {
        if (!disabled) {
          this.setTabFocus(evt);
          handleTabKeyDown(index, label, evt);
          onKeyDown(evt);
        }
      },
      role: 'presentation',
      selected: selected,
    };

    const barStyle = {
      transformOrigin: `0 0`,
      opacity: selected ? 1 : 0,
    };

    // Calculate the transform for the indicator bar
    if (this.context.prevTab !== null) {
      const prevOffset = this.context.prevTab.offsetLeft;
      const x = this.ref.current ? this.ref.current.offsetLeft : 0;
      const currOffset = x;
      const diff = prevOffset - currOffset;
      const tx = selected ? `0px` : `${diff}px`;
      barStyle['transform'] = `translateX(${tx})`;
    }

    return (
      <React.Fragment>
        {renderListElement ? (
          renderListElement({
            ...this.props,
            ...liProps,
            anchor: anchorProps,
            selectedClasses: selectedClasses,
          })
        ) : (
          <li {...liProps} ref={this.ref}>
            {renderAnchor ? (
              renderAnchor(anchorProps)
            ) : disabled ? (
              <span {...anchorProps}>{label}</span>
            ) : (
              <a {...anchorProps}>{label}</a>
            )}
            <div className={`${prefix}--tabs__nav__bar`}>
              <div
                className={`${prefix}--tabs__nav__bar__bar`}
                style={barStyle}
              />
            </div>
          </li>
        )}
      </React.Fragment>
    );
  }
}

Tab.contextType = TabContext;

export default Tab;
