import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SubNavigation } from '../SubNavigation';
import classNames from 'classnames';
import Button from '../Button';
import Wrapper from '../Wrapper';







class MainNavigationItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.menuItem === nextProps.activeMenuItem) {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
    else {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  setWrapperRef = (node) =>{
    this.wrapperRef = node;
  }

  handleClickOutside = (e) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      console.log('You clicked outside of me!', this.props);
      this.props.onChangeSub(e, undefined, 'close');
    }
  }

  render () {
    const { activeMenuItem, className, children, menuItem, onChangeSub, subNavigation} = this.props;

    const wrapperClasses = classNames(className, {
      'wfp--main-navigation__item' : true,
      'wfp--main-navigation__item--open' : menuItem === activeMenuItem
    });

    const triggerClasses = classNames({
      'wfp--main-navigation__trigger' : true,
      'wfp--main-navigation__trigger--has-sub' : subNavigation,
      'wfp--main-navigation__trigger--open' : menuItem === activeMenuItem
    });

    const childrenWithProps = subNavigation ? React.cloneElement(children, {
      onClick: (e) => onChangeSub(e, menuItem, 'toggle')
    }) : children;
   
    /*
      onMouseEnter={(e) => onChangeSub(e, menuItem, 'in')}
      onMouseLeave={(e) => onChangeSub(e, undefined, 'out')}
      onMouseEnter={(e) => onChangeSub(e, menuItem, 'toggle')}
    */
  	return (
  		<li
        className={wrapperClasses}
        ref={this.setWrapperRef}>
  			<div
          className={triggerClasses}
        >
          {childrenWithProps}
        </div>
        {subNavigation &&
        <SubNavigation
          onChangeSub={onChangeSub}
          open={menuItem === activeMenuItem ? true : false}>
          {subNavigation}
        </SubNavigation>
      }
  		</li>
  	)
  }
};

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
      activeMenuItem: undefined
    }
  }


  onChangeSub = (e, i, action) => {
    e.preventDefault();
    console.log("I've been clicked", e.target, e.target.id, i, action);
    /*if (action === 'in') {
      this.setState({
        activeMenuItem: i
      });
    }
    else */ 

    if (action === 'close') {
      this.setState({
        activeMenuItem: undefined
      });
    }
    else if (action === 'toggle') {
      console.log(this.state);
      const newI = (this.state.activeMenuItem === undefined|| this.state.activeMenuItem !== i) ? i : undefined;
      this.setState({
        activeMenuItem: newI
      });
    }
  }

  toggleMenu = () => {
    this.setState(
      {openMobile: !this.state.openMobile}
    )
  }


  triggerSubNavigation = (trigger) => {
    this.setState({
      activeMenuItem: undefined
    });
  }

  handleClickOutside = evt => {
    console.log("clicked outside", evt);

    this.setState({
        activeMenuItem: undefined
    });
  };

  render () {

    const {children, className, id, logo, pageWidth} = this.props;

    const wrapperClasses = classNames(
      'wfp--main-navigation',
      className
    );

    const listClasses = classNames(
      'wfp--main-navigation__list',
      {
        'wfp--main-navigation__list--open' : this.state.openMobile,
      }
    );


    return (
      <div id={id} className={wrapperClasses}>
        <Wrapper pageWidth={pageWidth} className="wfp--main-navigation__wrapper">
          <div className="wfp--main-navigation__logo-wrapper">
            <Button
              className="wfp--main-navigation__button"
              onClick={this.toggleMenu}
            >
              Menu
            </Button>
            <div className="wfp--main-navigation__logo">
              {logo}
            </div>
          </div>
          <ul className={listClasses}>
             {React.Children.map(children, (child, i) => {
              return React.cloneElement(child, {
                activeMenuItem: this.state.activeMenuItem,
                menuItem: i,
                onChangeSub: this.onChangeSub
              })
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
	pageWidth: 'narrow-full'
};

//const MainNavigation = onClickOutside(MainNavigationEl);

export { MainNavigation, MainNavigationItem };
