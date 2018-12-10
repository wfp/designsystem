import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';
import Icon from '../Icon';

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
      this.props.onChangeSub(e, undefined, 'close');
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
    } = this.props;

    const wrapperClasses = classNames(className, {
      'wfp--main-navigation__item': true,
      'wfp--main-navigation__item--open': menuItem === activeMenuItem,
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
              name={menuItem === activeMenuItem ? 'close' : 'caret--down'}
              fill="#FFFFFF"
              description="expand icon"
            />
          </React.Fragment>) ,
          onClick: e => onChangeSub(e, menuItem, 'toggle'),
        })
      : children;

    console.log('childrenWithProps', childrenWithProps);

    const subClasses = classNames({
      'wfp--main-navigation__sub': true,
      'wfp--main-navigation__sub--open': menuItem === activeMenuItem,
    });
    return (
      <li className={wrapperClasses} ref={this.setWrapperRef}>
        <div className={triggerClasses}>
        {childrenWithProps}
        </div>
        {subNavigation &&
          <div
            className={subClasses}
            open={menuItem === activeMenuItem ? true : false}>
            {subNavigation}
          </div>
        }
      </li>
    );
  }
}

MainNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMobile: false,
      activeMenuItem: undefined,
    };
  }

  onChangeSub = (e, i, action) => {
    e.preventDefault();
    /*if (action === 'in') {
      this.setState({
        activeMenuItem: i
      });
    }
    else */

    if (action === 'close') {
      this.setState({
        activeMenuItem: undefined,
      });
    } else if (action === 'toggle') {
      const newI =
        this.state.activeMenuItem === undefined ||
        this.state.activeMenuItem !== i
          ? i
          : undefined;
      this.setState({
        activeMenuItem: newI,
      });
    }
  };

  toggleMenu = () => {
    this.setState({ openMobile: !this.state.openMobile });
  };

  triggerSubNavigation = () => {
    this.setState({
      activeMenuItem: undefined,
    });
  };

  handleClickOutside = () => {
    this.setState({
      activeMenuItem: undefined,
    });
  };

  render() {
    const {
      children,
      className,
      id,
      logo,
      mobilePageWidth,
      pageWidth,
    } = this.props;

    const wrapperClasses = classNames('wfp--main-navigation', className);

    const listClasses = classNames('wfp--main-navigation__list', {
      'wfp--main-navigation__list--open': this.state.openMobile,
    });

    return (
      <div id={id} className={wrapperClasses}>
        <Wrapper
          pageWidth={pageWidth}
          mobilePageWidth={mobilePageWidth}
          className="wfp--main-navigation__wrapper">
          <div className="wfp--main-navigation__logo-wrapper">
            <Button
              className="wfp--main-navigation__button"
              onClick={this.toggleMenu}>
              Menu
            </Button>
            <div className="wfp--main-navigation__logo">{logo}</div>
          </div>
          <ul className={listClasses}>
            {React.Children.map(children, (child, i) => {
              if (child) {
                return React.cloneElement(child, {
                  activeMenuItem: this.state.activeMenuItem,
                  menuItem: i,
                  onChangeSub: this.onChangeSub,
                });
              } else return null;
            })}
          </ul>
        </Wrapper>
      </div>
    );
  }
}

MainNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  id: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

MainNavigation.defaultProps = {
  pageWidth: 'narrow',
  mobilePageWidth: 'full',
};

export { MainNavigation, MainNavigationItem };
