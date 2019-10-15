import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMobile: false,
      activeMenuItem: undefined,
    };
  }

  onChangeSub = (action, e, i) => {
    if (e) {
      e.preventDefault();
    }

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

    const parentProps = {
      onChangeSub: this.onChangeSub,
      toggleMenu: this.toggleMenu,
    };

    const childrenSelect =
      typeof children === 'function'
        ? children(parentProps).props.children
        : children;

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
            {React.Children.map(childrenSelect, (child, i) => {
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
  /**
   * Usually multiple `MainNavigationItem` elements
   */
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Defines an ID for the component.
   */
  id: PropTypes.string,
  /**
   * The Logo can be either a string or a component
   */
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * See `Wrapper` component for more information
   */
  pageWidth: PropTypes.string,
  /**
   * See `Wrapper` component for more information
   */
  mobilePageWidth: PropTypes.string,
  /**
   * Additional className for the `Wrapper`
   */
  wrapperClassName: PropTypes.string,
};

MainNavigation.defaultProps = {
  pageWidth: 'md',
  mobilePageWidth: 'full',
  logo: 'WFP',
};

export default MainNavigation;
