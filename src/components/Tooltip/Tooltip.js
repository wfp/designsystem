import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { usePopperTooltip } from 'react-popper-tooltip';

import settings from '../../globals/js/settings';
const { prefix } = settings;

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
  modifiers = [],
  placement = 'top',
  createRefWrapper,
  onVisibilityChange,
  ...others
}) => {
  const [visibility, setVisibility] = useState(false);
  const classNames = classnames(className, {
    [`${prefix}--tooltip`]: true,
    [`${prefix}--tooltip--disable-padding`]: noPadding,
    [`${prefix}--tooltip--visible`]: visibility,
    [`${prefix}--tooltip--${trigger}`]: trigger,
    [`${prefix}--tooltip--dark`]: dark,
  });

  const Tooltip = ({
    arrowRef,
    tooltipRef,
    getArrowProps,
    getTooltipProps,
    placement,
  }) => (
    <div ref={tooltipRef} className={classNames} dataPlacement={placement}>
      <div
        {...getArrowProps({
          ref: arrowRef,
          className: `${prefix}--tooltip__arrow`,
          'data-placement': placement,
        })}
      />
      <span onClick={setVisibility(false)}>CLOSE</span>
      {typeof content === 'function'
        ? content({ setVisibility, visibilityChange })
        : content}
    </div>
  );

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({ trigger: 'click', delayHide: 1000 });

  const Trigger = ({ getTriggerProps, setTriggerRef }) => {
    if (!createRefWrapper && typeof children !== 'string') {
      const elementClassNames = classnames(children?.props?.className, {
        [`${prefix}--tooltip--trigger`]: true,
      });

      return React.cloneElement(children, {
        ...children.props,
        ref: setTriggerRef,
        className: elementClassNames,
      });
    }

    const wrapperClassNames = classnames(className, {
      [`${prefix}--tooltip--trigger`]: true,
    });

    return (
      <span ref={setTriggerRef} className={wrapperClassNames}>
        {children}
      </span>
    );
  };

  const visibilityChange = (e) => {
    setVisibility(e);
    if (onVisibilityChange) onVisibilityChange(e);
  };

  /*
  <TooltipTrigger
      placement={placement}
      trigger={trigger}
      tooltip={Tooltip}
      {...others}
      onVisibilityChange={visibilityChange}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 5],
          },
        },
        ...modifiers,
      ]}>
      */

  return (
    <>
      {/*trigger*/}

      <button type="button" ref={setTriggerRef}>
        Trigger element
      </button>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: classNames })}>
          {typeof content === 'function'
            ? content({ setVisibility, visibilityChange })
            : content}
          <div {...getArrowProps({ className: `${prefix}--tooltip__arrow` })} />
        </div>
      )}
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
  content: PropTypes.node,

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
  trigger: PropTypes.oneOf(['click', 'hover']),

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
