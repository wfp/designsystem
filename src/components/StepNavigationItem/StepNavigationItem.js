import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
//import colors from '../../globals/data/colors.js';

export default class Tab extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    handleTabClick: PropTypes.func,
    handleTabAnchorFocus: PropTypes.func,
    handleTabKeyDown: PropTypes.func,
    href: PropTypes.string.isRequired,
    index: PropTypes.number,
    label: PropTypes.string,
    role: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    tabIndex: PropTypes.number.isRequired,
    /*
     * An optional parameter to allow overriding the anchor rendering.
     * Useful for using Tab along with react-router or other client
     * side router libraries.
     **/
    renderAnchor: PropTypes.func,
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
      handleTabClick,
      handleTabAnchorFocus, // eslint-disable-line
      handleTabKeyDown,
      href,
      index,
      label,
      locked,
      status,
      selected,
      selectedPage,
      tabIndex,
      onClick,
      onKeyDown,
      page,
      renderAnchor,
      ...other
    } = this.props;

    const classes = classNames(
      'wfp--step-navigation__nav-item',
      { 'wfp--step-navigation__nav-item--before': page < selectedPage },
      { 'wfp--step-navigation__nav-item--selected': page === selectedPage },
      { 'wfp--step-navigation__nav-item--locked': locked },
      { 'wfp--step-navigation__nav-item--not-started': status === 'not-started' },
      { 'wfp--step-navigation__nav-item--warning': status === 'warning' },
      { 'wfp--step-navigation__nav-item--complete': status === 'complete' },
      className
    );

    const anchorProps = {
      className: 'wfp--step-navigation__nav-link',
      href,
      label,
      role: 'tab',
      tabIndex,
      ['aria-selected']: selected,
      ref: e => {
        this.tabAnchor = e;
      },
    };

    const icon = {
      'not-started': {name: 'menu', fill: '#0b77c2' },
      warning: {name: 'warning--solid', fill: '#0b77c2' },
      locked: {name: 'unlock', fill: '#0b77c2' },
      complete: {name: 'checkmark', fill: '#0b77c2' },
    }

    return (
      <li
        {...other}
        tabIndex={-1}
        className={classes}
        onClick={evt => {
          if (!locked) {
            handleTabClick(index, label, evt);
            onClick(evt);
          }
        }}
        role="presentation"
        selected={selected}>
        {renderAnchor ? (
          renderAnchor(anchorProps)
        ) : (
          <React.Fragment>
            <span className="wfp--step-navigation__nav-item__indicator">
              {locked || status ? (
                <Icon
                  name={icon[locked ? 'locked' : status].name}
                  fill={icon[locked ? 'locked' : status].fill}
                  width="14"
                  height="14"
                  description="sss"
                />
              ) : (
                <React.Fragment>{page+1}</React.Fragment>
              )}
            </span>
            <span className="wfp--step-navigation__nav-item__text">{label}</span>
          </React.Fragment>
        )}
      </li>
    );
  }
}
