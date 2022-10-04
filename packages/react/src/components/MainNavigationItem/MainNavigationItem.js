import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { Close, CaretDown } from '@un/icons-react';
import { withUNCoreSettings } from '../UNCoreSettings';

class MainNavigationItem extends Component {
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps.menuItem === nextProps.activeMenuItem) {
      document.addEventListener('mousedown', this.handleClickOutside);
    } else {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (e) => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.props.onChangeSub('close');
    }
  };

  render() {
    const {
      prefix,
      activeMenuItem,
      className,
      children,
      menuItem,
      onChangeSub,
      subNavigation,
      subNavWideAsContent,
    } = this.props;

    const wrapperClasses = classNames(className, {
      [`${prefix}--main-navigation__item`]: true,
      [`${prefix}--main-navigation__item--open`]: menuItem === activeMenuItem,
      [`${prefix}--content-width`]: subNavigation && subNavWideAsContent,
    });

    const triggerClasses = classNames({
      [`${prefix}--main-navigation__trigger`]: true,
      [`${prefix}--main-navigation__trigger--has-sub`]: subNavigation,
      [`${prefix}--main-navigation__trigger--open`]:
        menuItem === activeMenuItem,
    });

    const Icon = menuItem === activeMenuItem ? Close : CaretDown;

    const childrenWithProps = subNavigation
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
      : children;

    const subClasses = classNames({
      [`${prefix}--main-navigation__sub`]: true,
      [`${prefix}--main-navigation__sub--open`]: menuItem === activeMenuItem,
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

export default withUNCoreSettings(MainNavigationItem);
