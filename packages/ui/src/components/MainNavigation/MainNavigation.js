import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** The Main Navigation is a Horizontal Menu which consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page. The currently selected item is usually highlighted. */

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMobile: false,
      activeMenuItem: undefined,
    };
  }

  onChangeSub = (action, i, e) => {
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

    const wrapperClasses = classNames(`${prefix}--main-navigation`, className);

    const listClasses = classNames(`${prefix}--main-navigation__list`, {
      [`${prefix}--main-navigation__list--open`]: this.state.openMobile,
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
          className={`${prefix}--main-navigation__wrapper`}>
          <div className={`${prefix}--main-navigation__logo-wrapper`}>
            <Button
              className={`${prefix}--main-navigation__button`}
              onClick={this.toggleMenu}>
              Menu
            </Button>
            <div className={`${prefix}--main-navigation__logo`}>{logo}</div>
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
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  /**
   * Specify the max-width on mobile devices (same as \`Wrapper\` component)
   */
  mobilePageWidth: PropTypes.string,
  /**
   * Additional className for the `Wrapper`
   */
  wrapperClassName: PropTypes.string,
};

MainNavigation.defaultProps = {
  pageWidth: 'lg',
  mobilePageWidth: 'full',
  logo: 'WFP',
};

export default MainNavigation;
