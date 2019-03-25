import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import Link from '../Link';
import { iconCaretUp, iconCaretDown } from '@wfp/icons';
import Icon from '../Icon';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const MoreLink = ({ handleToggleClick, link, text, showMore }) => {
  if (link) {
    var clonedLink = React.cloneElement(link, {
      onClick: handleToggleClick,
    });
    return clonedLink;
  } else {
    return (
      <Link
        className={`${prefix}--read-more__trigger`}
        small
        onClick={handleToggleClick}>
        {text}
        <Icon
          icon={showMore ? iconCaretUp : iconCaretDown}
          width="10"
          height="10"
          description={showMore ? 'icon up' : 'icon down'}
        />
      </Link>
    );
  }
};

export default class ReadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      innerHeight: 0,
    };
  }

  static propTypes = {
    /**
     * Specify an optional className to be applied to the wrapper node
     */
    className: PropTypes.string,
    /**
     * The content of the expanded element
     */
    children: PropTypes.node.isRequired,
    /**
     * The content of the collapsed content (optional)
     */
    collapsed: PropTypes.node,
    /**
     * A custom link for collapsing
     */
    collapseLink: PropTypes.node,
    /**
     * A custom link for expanding
     */
    expandLink: PropTypes.node,
    /**
     * Enables the fade effect when the content is collapsed (optional) when enabled collapsed will be ignored
     */
    fade: PropTypes.bool,
    /**
     * The maximum height when the content is collapsed (optional)
     */
    maxHeight: PropTypes.number,
  };

  static defaultProps = {
    expandText: 'Read more',
    collapseText: 'Read less',
  };

  handleToggleClick = e => {
    e.preventDefault();
    const innerHeight = this.divElement.clientHeight;
    this.setState(prevState => ({
      showMore: !prevState.showMore,
      innerHeight: innerHeight,
    }));
  };

  render() {
    const {
      collapseLink,
      collapseText,
      children,
      collapsed,
      className,
      expandLink,
      expandText,
      fade,
      maxHeight,
    } = this.props;
    const { innerHeight, showMore } = this.state;

    const classNames = classnames(className, {
      [`${prefix}--read-more`]: true,
      [`${prefix}--read-more--expanded`]: showMore,
      [`${prefix}--read-more--fade`]: fade,
      [`${prefix}--read-more--max-height`]: maxHeight,
    });

    const contentStyle = !maxHeight
      ? {
          undefined,
        }
      : maxHeight && !showMore
      ? {
          maxHeight: maxHeight,
        }
      : {
          maxHeight: innerHeight + 20,
        };

    const collapseStyle = showMore
      ? {
          display: 'none',
        }
      : {
          display: 'block',
        };

    return (
      <div className={classNames}>
        <div className={`${prefix}--read-more__content`} style={contentStyle}>
          <div ref={divElement => (this.divElement = divElement)}>
            {(showMore || !collapsed) && children}
            {collapsed && <div style={collapseStyle}>{collapsed}</div>}
          </div>
        </div>
        <MoreLink
          handleToggleClick={this.handleToggleClick}
          showMore={showMore}
          link={showMore ? collapseLink : expandLink}
          text={showMore ? collapseText : expandText}
        />
      </div>
    );
  }
}
