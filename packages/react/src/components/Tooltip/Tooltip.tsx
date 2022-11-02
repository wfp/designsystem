import React, { PropsWithChildren, useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Placement } from '../../types/utils';

import useSettings from '../../hooks/useSettings';

interface TooltipProps {
  children?: React.ReactNode;
  content?:
    | React.ReactNode
    | ((options: {
        setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
        visibilityChange: (state: boolean) => void;
      }) => React.ReactNode);
  dark?: boolean;
  noPadding?: boolean;
  placement?: Placement;
  trigger?: 'hover' | 'click';
  modifiers?: [];
  usePortal?: boolean;
  createRefWrapper?: boolean;
  className: string;
  closeOnOutsideClick?: boolean;
  closeOnTriggerHidden?: boolean;
  defaultVisible?: boolean;
  delayHide?: number;
  delayShow?: number;
  followCursor?: boolean;
  interactive?: boolean;
  mutationObserverOptions?: MutationObserverInit | null;
  offset?: [number, number];
  onVisibleChange?: (state: boolean) => void;
}

export const tooltipStyle = {
  duration: 100,
  animation: 'fade',
  theme: 'light',
  arrow: true,
};

export const tooltipStyleDark = {
  duration: 100,
  animation: 'fade',
  theme: 'dark',
  arrow: true,
};

/** Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential. */
const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  className,
  dark,
  noPadding,
  children,
  content,
  trigger = 'hover',
  // modifiers = [],
  placement = 'top',
  createRefWrapper,
  closeOnOutsideClick,
  closeOnTriggerHidden,
  defaultVisible,
  delayHide,
  delayShow,
  followCursor,
  interactive,
  mutationObserverOptions,
  offset,
  onVisibleChange,
  usePortal,
  // ...others
}) => {
  const { prefix } = useSettings();
  const [visibility, setVisibility] = useState(false);
  const classNames = classnames(className, {
    [`${prefix}--tooltip`]: true,
    [`${prefix}--tooltip--disable-padding`]: noPadding,
    [`${prefix}--tooltip--visible`]: visibility,
    [`${prefix}--tooltip--${trigger}`]: trigger,
    [`${prefix}--tooltip--dark`]: dark,
  });

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    closeOnOutsideClick,
    closeOnTriggerHidden,
    defaultVisible,
    delayHide,
    delayShow,
    followCursor,
    interactive,
    mutationObserverOptions,
    offset,
    onVisibleChange,
    placement,
    trigger,
  });

  const elementClassNames = classnames(children?.props?.className, {
    [`${prefix}--tooltip--trigger`]: true,
  });

  const wrapperClassNames = classnames(className, {
    [`${prefix}--tooltip--trigger`]: true,
  });

  const triggerElement =
    !createRefWrapper && typeof children !== 'string' ? (
      React.cloneElement(children, {
        ref: setTriggerRef,
        className: elementClassNames,
      })
    ) : (
      <span ref={setTriggerRef} className={wrapperClassNames}>
        {children}
      </span>
    );

  const visibilityChange = (e) => {
    setVisibility(e);
    if (onVisibleChange) onVisibleChange(e);
  };

  const tooltip = (
    <div ref={setTooltipRef} {...getTooltipProps({ className: classNames })}>
      {typeof content === 'function'
        ? content({ setVisibility, visibilityChange })
        : content}
      <div {...getArrowProps({ className: `${prefix}--tooltip__arrow` })} />
    </div>
  );

  return (
    <>
      {triggerElement}
      {visible && usePortal && <TooltipPortal>{tooltip}</TooltipPortal>}
      {visible && !usePortal && tooltip}
    </>
  );
};

export default Tooltip;

function TooltipPortal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}
