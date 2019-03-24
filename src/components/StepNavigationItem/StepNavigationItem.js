import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import {
  iconEllipsis,
  iconWarningGlyph,
  iconLocked,
  iconErrorGlyph,
  iconCheckmark,
} from '@wfp/icons';

export default class StepNavigationItem extends React.Component {
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
  };

  render() {
    const {
      className,
      handleTabClick,
      index,
      label,
      status,
      selected,
      selectedPage,
      onClick,
      page,
      renderAnchor,
    } = this.props;

    const classes = classNames(
      'wfp--step-navigation__nav-item',
      { 'wfp--step-navigation__nav-item--before': page < selectedPage },
      { 'wfp--step-navigation__nav-item--selected': page === selectedPage },
      { 'wfp--step-navigation__nav-item--locked': status === 'locked' },
      {
        'wfp--step-navigation__nav-item--not-started': status === 'not-started',
      },
      { 'wfp--step-navigation__nav-item--skip': status === 'skip' },
      { 'wfp--step-navigation__nav-item--warning': status === 'warning' },
      { 'wfp--step-navigation__nav-item--complete': status === 'complete' },
      className
    );

    const anchorProps = {
      className: 'wfp--step-navigation__nav-link',
      ref: e => {
        this.tabAnchor = e;
      },
    };

    const icon = {
      'not-started': { icon: iconEllipsis },
      warning: { icon: iconWarningGlyph },
      locked: { icon: iconLocked },
      skip: { icon: iconErrorGlyph },
      complete: { icon: iconCheckmark },
    };

    return (
      <li
        tabIndex={-1}
        className={classes}
        onClick={evt => {
          if (status !== 'locked') {
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
              {status ? (
                <Icon
                  icon={icon[status].icon}
                  width="14"
                  height="14"
                  description="Step Item"
                />
              ) : (
                <span>{page + 1}</span>
              )}
            </span>
            <span className="wfp--step-navigation__nav-item__text">
              {label}
            </span>
          </React.Fragment>
        )}
      </li>
    );
  }
}
