import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import { iconWarning, iconWarningSolid, iconInfoSolid } from '@wfp/icons';

const iconLookup = {
  warning: {
    icon: iconWarning,
  },
  error: {
    icon: iconWarningSolid,
  },
  info: {
    icon: iconInfoSolid,
  },
};

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleBlockquote = () => {
    this.setState({ open: !this.state.open });
  };

  showInnerHtml = content => {
    return { __html: content };
  };

  render() {
    const {
      className,
      children,
      error,
      style,
      title,
      toggleable,
      icon,
      innerHtml,
      light,
      code,
      warning,
      withIcon,
      info,
      type,
    } = this.props;
    const blockquoteClass = classNames({
      'wfp--blockquote': true,
      'wfp--blockquote--toggleable': toggleable === true,
      'wfp--blockquote--light': type === 'light' || light,
      'wfp--blockquote--code': type === 'code' || code,
      'wfp--blockquote--error': type === 'error' || error,
      'wfp--blockquote--warning': type === 'warning' || warning,
      'wfp--blockquote--info': type === 'info' || info,
      'wfp--blockquote--with-icon': withIcon,
      'wfp--blockquote--open': this.state.open,
    });

    const blockquoteContentClass = classNames({
      'wfp--blockquote__content': true,
      [`${className}`]: className,
    });

    const lookup = warning
      ? iconLookup['warning']
      : error
      ? iconLookup['error']
      : iconLookup['info'];

    const iconElement = withIcon ? (
      <Icon
        icon={icon ? icon : lookup.icon}
        description="Blockquote Icon"
        className="wfp--blockquote__icon"
        height="30"
        width="30"
      />
    ) : null;

    return (
      <div className={blockquoteClass}>
        {title && (
          <div
            onClick={this.toggleBlockquote}
            onKeyDown={this.toggleBlockquote}
            className="wfp--blockquote__title"
            role="button"
            tabIndex={0}>
            {title}
          </div>
        )}

        {iconElement}
        <div className={blockquoteContentClass} style={style}>
          {children}
          {innerHtml && (
            <div
              role="complementary"
              dangerouslySetInnerHTML={this.showInnerHtml(innerHtml)}
            />
          )}
        </div>
      </div>
    );
  }
}

Blockquote.propTypes = {
  /**
   * Specify the content of your `Blockquote`
   */
  children: PropTypes.node,
  /**
   * Show content formated as code
   */
  code: PropTypes.bool,
  /**
   * Display content as `dangerouslySetInnerHTML` content
   */
  innerHtml: PropTypes.string,
  /**
   * Display light version of Blockquote
   */
  light: PropTypes.bool,
  /**
   * Show options to show and hide the Blockquote
   */
  toogleable: PropTypes.bool,
  /**
   * Specify the type of your Blockquote Options are `light` `code` `error` `warning` `info`
   */
  type: PropTypes.string,
  /**
   * Specify if an Icon should be displayed
   */
  withIcon: PropTypes.bool,
  /**
   * Specify a custom icon
   */
  icon: PropTypes.bool,
};

export default Blockquote;
