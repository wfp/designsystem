import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import {
  Ellipsis16,
  WarningGlyph16,
  Locked16,
  ErrorGlyph16,
  Checkmark16,
  Menu16,
  OverflowMenu16,
} from '@wfp/icons-react';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export default class StepNavigationItem extends React.Component {
  static propTypes = {
    /**
     * Provide a className that is applied to the StepNavigation component
     *
     */
    className: PropTypes.string,
    /**
     * Provide text that is used alongside the control label for additional help
     *
     */
    helperText: PropTypes.node,
    /**
     * Provide the index of the each item
     *
     */
    index: PropTypes.number,
    /**
     * Provide the text that will be read by a screen reader when visiting this control
     *
     */
    label: PropTypes.string,
    /**
     * By default, this value is "presentation". You can also provide an alternate
     * role if it makes sense from the accessibility-side
     */
    role: PropTypes.string.isRequired,
    /**
     * On click handler to change the currently active item.
     **/
    onClick: PropTypes.func.isRequired,
    /**
     * Optionally provide an index for the currently selected <Tab>
     */
    selectedPage: PropTypes.number.isRequired,
    /**
     * An optional parameter to allow overriding the anchor rendering.
     * Useful for using Tab along with react-router or other client
     * side router libraries.
     */
    renderAnchor: PropTypes.func,
  };

  static defaultProps = {
    role: 'presentation',
    label: 'provide a label',
    tabIndex: 0,
    selectedPage: 0,
    onClick: () => {},
  };

  render() {
    const {
      className,
      handleTabClick,
      index,
      label,
      status,
      helperText,
      selectedPage,
      onClick,
      page,
      renderAnchor,
    } = this.props;

    const classes = classNames(
      `${prefix}--step-navigation__nav-item`,
      { [`${prefix}--step-navigation__nav-item--before`]: page < selectedPage },
      {
        [`${prefix}--step-navigation__nav-item--selected`]:
          page === selectedPage,
      },
      { [`${prefix}--step-navigation__nav-item--${status}`]: status },
      className
    );

    const anchorProps = {
      className: `${prefix}--step-navigation__nav-link`,
      ref: (e) => {
        this.tabAnchor = e;
      },
    };

    const icon = {
      'not-started': { icon: Ellipsis16 },
      warning: { icon: WarningGlyph16 },
      locked: { icon: Locked16 },
      skip: { icon: OverflowMenu16 },
      disabled: { icon: ErrorGlyph16 },
      complete: { icon: Checkmark16 },
      summary: { icon: Menu16 },
    };

    const Icon = icon[status]?.icon;
    return (
      <li
        tabIndex={-1}
        className={classes}
        onClick={(evt) => {
          if (status !== 'locked') {
            handleTabClick(index, label, evt);
            onClick(evt);
          }
        }}
        role="presentation">
        {renderAnchor ? (
          renderAnchor(anchorProps)
        ) : (
          <React.Fragment>
            <div className={`${prefix}--step-navigation__nav-item__indicator`}>
              {status && page !== selectedPage ? (
                <Icon width="14" height="14" description="Step Item" />
              ) : (
                <span>{page + 1}</span>
              )}
            </div>
            <div>
              <span className={`${prefix}--step-navigation__nav-item__text`}>
                {label}
              </span>
              {helperText && (
                <span
                  className={`${prefix}--step-navigation__nav-item__helper-text`}>
                  {helperText}
                </span>
              )}
            </div>
          </React.Fragment>
        )}
      </li>
    );
  }
}
