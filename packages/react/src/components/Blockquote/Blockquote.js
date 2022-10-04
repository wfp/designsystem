import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withUNCoreSettings } from '../UNCoreSettings';

import {
  Checkmark,
  WarningAlt,
  WarningSolid,
  InfoSolid,
} from '@un/icons-react';

const iconLookup = {
  warning: {
    icon: WarningAlt,
  },
  error: {
    icon: WarningSolid,
  },
  info: {
    icon: InfoSolid,
  },
  success: {
    icon: Checkmark,
  },
};

/**
 *  The Blockquote element indicates that the enclosed text is an extended quotation or information. It is rendered visually by a surrounding box. */

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleBlockquote = () => {
    if (this.props.toggleable) this.setState({ open: !this.state.open });
  };

  /*showInnerHtml = content => {
    return { __html: content };
  };*/

  render() {
    const { prefix } = this.props;
    const {
      actionButtons,
      className,
      contentClassName,
      children,
      error,
      style,
      title,
      toggleable,
      icon,
      //innerHtml,
      light,
      code,
      warning,
      withIcon,
      info,
      kind,
      testid,
    } = this.props;
    const blockquoteClass = classNames({
      [`${prefix}--blockquote`]: true,
      [`${prefix}--blockquote--toggleable`]: toggleable,
      [`${prefix}--blockquote--light`]: light,
      [`${prefix}--blockquote--code`]: code,
      [`${prefix}--blockquote--no-content`]: !children,
      [`${prefix}--blockquote--error`]: kind === 'error' || error,
      [`${prefix}--blockquote--warning`]: kind === 'warning' || warning,
      [`${prefix}--blockquote--success`]: kind === 'success',
      [`${prefix}--blockquote--info`]: kind === 'info' || info,
      [`${prefix}--blockquote--with-icon`]: withIcon || icon,
      [`${prefix}--blockquote--toggle--open`]: this.state.open,
      [`${className}`]: className,
    });

    const blockquoteContentClass = classNames(
      `${prefix}--blockquote__content`,
      {
        [`${className}`]: contentClassName,
      }
    );

    // @deprecated Only kind is allowed
    const lookup =
      warning || kind === 'warning'
        ? iconLookup['warning']
        : error || kind === 'error'
        ? iconLookup['error']
        : kind === 'success'
        ? iconLookup['success']
        : iconLookup['info'];

    const Icon = lookup.icon;

    const iconElement = React.isValidElement(icon) ? (
      <div
        className={`${prefix}--blockquote__icon ${prefix}--blockquote__icon--custom`}>
        {icon}
      </div>
    ) : withIcon || icon ? (
      <Icon
        width={48}
        height={48}
        description="Blockquote Icon"
        className={`${prefix}--blockquote__icon`}
      />
    ) : null;

    return (
      <div data-testid={testid} className={blockquoteClass}>
        {iconElement && (
          <div className={`${prefix}--blockquote__icon-wrapper`}>
            {iconElement}
          </div>
        )}
        <div className={blockquoteContentClass} style={style}>
          {(title || toggleable) && (
            <div
              onClick={this.toggleBlockquote}
              onKeyDown={this.toggleBlockquote}
              className={`${prefix}--blockquote__title`}
              role="button"
              tabIndex={0}>
              {title
                ? title
                : this.state.open
                ? 'Hide content'
                : 'Show content'}
            </div>
          )}
          <div className={`${prefix}--blockquote__inside`}>{children}</div>
        </div>
        {actionButtons && (
          <div className="wfp--blockquote__action-buttons">{actionButtons}</div>
        )}
      </div>
    );
  }
}

Blockquote.propTypes = {
  /**
   * Specify a className of your `Blockquote`
   */
  className: PropTypes.string,

  /**
   * Specify the content of your `Blockquote`
   */
  children: PropTypes.node,
  /**
   * Show content formated as code
   */
  code: PropTypes.bool,
  /**
   * Display light version of Blockquote
   */
  light: PropTypes.bool,
  /**
   * Show options to show and hide the Blockquote when title is clicked
   */
  toggleable: PropTypes.bool,
  /**
   * Show title for Blockquote
   */
  title: PropTypes.node,
  /**
   * Specify the type of your Blockquote Options are `info` `error` `warning` `info`
   */
  kind: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  /**
   * Specify if an Icon should be displayed
   */
  withIcon: PropTypes.bool,
  /**
   * Specify a custom icon. Can be either a `Icon` object or React component
   */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
};

export default withUNCoreSettings(Blockquote);
