import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { iconClose, iconCaretDown } from '@wfp/icons';

class MainNavigationItem extends Component {
  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.menuItem === nextProps.activeMenuItem) {
      document.addEventListener('mousedown', this.handleClickOutside);
    } else {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.props.onChangeSub('close');
    }
  };

  render() {
    const {
      activeMenuItem,
      className,
      children,
      menuItem,
      onChangeSub,
      subNavigation,
      subNavWideAsContent,
    } = this.props;

    const wrapperClasses = classNames(className, {
      'wfp--main-navigation__item': true,
      'wfp--main-navigation__item--open': menuItem === activeMenuItem,
      'wfp--content-width': subNavigation && subNavWideAsContent,
    });

    const triggerClasses = classNames({
      'wfp--main-navigation__trigger': true,
      'wfp--main-navigation__trigger--has-sub': subNavigation,
      'wfp--main-navigation__trigger--open': menuItem === activeMenuItem,
    });

    const childrenWithProps = subNavigation
      ? React.cloneElement(children, {
          children: (
            <React.Fragment>
              {children.props.children}
              <Icon
                className="wfp--main-navigation__trigger__icon"
                icon={menuItem === activeMenuItem ? iconClose : iconCaretDown}
                fill="#FFFFFF"
                description="expand icon"
              />
            </React.Fragment>
          ),
          onClick: e => onChangeSub('toggle', e, menuItem),
        })
      : children;

    const subClasses = classNames({
      'wfp--main-navigation__sub': true,
      'wfp--main-navigation__sub--open': menuItem === activeMenuItem,
    });

    return (
      <li className={wrapperClasses} ref={this.setWrapperRef}>
        <div className={triggerClasses}>{childrenWithProps}</div>
        {subNavigation && (
          <div
            className={subClasses}
            open={menuItem === activeMenuItem ? true : false}>
            {subNavigation}
          </div>
        )}
      </li>
    );
  }
}

MainNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  /**
   * If defined the `MainNaviationItem` will have a toggleable
   * SubNavigation. See the `SubNavigation` component for details on usage
   */
  subNavigation: PropTypes.node,
};

export default MainNavigationItem;
