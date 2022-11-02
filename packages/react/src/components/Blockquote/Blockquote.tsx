import React, { CSSProperties, useState } from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { IIcon, StatusKind } from '../../types/utils';

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

type BlockquoteProps = PropsWithChildren<{
  className?: Argument;
  contentClassName?: string;
  style?: CSSProperties;
  code?: boolean;
  light?: boolean;
  toggable?: boolean;
  title?: React.ReactNode;
  kind?: StatusKind;
  withIcon?: boolean;
  icon?: React.ReactNode | IIcon;
  actionButtons?: React.ReactNode;
  error?: boolean;
  toggleable?: boolean;
  warning?: boolean;
  info?: boolean;
  testid?: string;
}>;

const Blockquote: React.FC<BlockquoteProps> = ({
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
}) => {
  const [open, setOpen] = useState(false);
  const { prefix } = useSettings();

  const toggleBlockquote = () => {
    if (toggleable) {
      setOpen(!open);
    }
  };

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
    [`${prefix}--blockquote--toggle--open`]: open,
    [`${className}`]: className,
  });

  const blockquoteContentClass = classNames(`${prefix}--blockquote__content`, {
    [`${className}`]: contentClassName,
  });

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
            onClick={toggleBlockquote}
            onKeyDown={toggleBlockquote}
            className={`${prefix}--blockquote__title`}
            role="button"
            tabIndex={0}>
            {title ? title : open ? 'Hide content' : 'Show content'}
          </div>
        )}
        <div className={`${prefix}--blockquote__inside`}>{children}</div>
      </div>
      {actionButtons && (
        <div className="wfp--blockquote__action-buttons">{actionButtons}</div>
      )}
    </div>
  );
};

export default Blockquote;
