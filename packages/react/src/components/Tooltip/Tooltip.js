import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { usePopperTooltip } from 'react-popper-tooltip';

import useSettings from '../../hooks/useSettings';

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
const Tooltip = ({
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

Tooltip.propTypes = {
  /**
   * Provide the children on which the tooltip will show on
   */
  children: PropTypes.node,

  /**
   * Provide the content for the tooltip
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Provide a dark styled tooltip
   */
  dark: PropTypes.bool,
  /**
   * Disable the default inner padding of the tooltip
   */
  noPadding: PropTypes.bool,
  /**
   * Provide the placement of the tooltip
   */
  placement: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ]),
  /**
   * Provide the placement of the tooltip
   */
  trigger: PropTypes.oneOf(['hover', 'click']),

  /**
   * Provide additional modifiers as an object https://popper.js.org/docs/v2/modifiers/
   */
  modifiers: PropTypes.array,

  /**
   * Whether to use React.createPortal for creating tooltip.
   */
  usePortal: PropTypes.bool,
  /**
   * Use a wrapper html element around the trigger. Useful for components without `forwardRef` support.
   */
  createRefWrapper: PropTypes.bool,
};

export default Tooltip;

function TooltipPortal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}
