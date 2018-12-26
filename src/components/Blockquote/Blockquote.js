import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const iconLookup = {
  warning: {
    icon: 'warning',
  },
  error: {
    icon: 'warning--solid',
  },
  info: {
    icon: 'info--solid',
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
      : error ? iconLookup['error'] : iconLookup['info'];

    const icon = withIcon ? (
      <Icon
        name={lookup.icon}
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
            className="wfp--blockquote__title">
            {title}
          </div>
        )}

        {icon}
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
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Blockquote;
