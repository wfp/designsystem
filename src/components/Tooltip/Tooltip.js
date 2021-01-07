import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { usePopper } from "react-popper";
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
  disablePadding,
  children,
  content,
  trigger = 'hover',
  modifiers,
  placement = 'top',
  createRefWrapper,
  onVisibilityChange,
  ...others
}) => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [isShown, setIsShown] = useState(null);

  const handleInsideClick = () => {
    setIsShown(true);
    document.addEventListener('mousedown', handleClickOutside);
  };

  const handleClickOutside = (event) => {
    if (popperElement && !popperElement.current.contains(event.target)) {
      setIsShown(false);
      document.removeEventListener('mousedown', handleClickOutside, false);
    }
  };

  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
          ...modifiers,
        },
        { name: 'arrow', options: { element: arrowElement, padding: 8 } },
      ],
      ...utlis,
    }
  );

  const classNames = classnames(className, {
    [`${prefix}--tooltip`]: true,
    [`${prefix}--tooltip--visible`]: isShown,
    [`${prefix}--tooltip--disable-padding`]: disablePadding,
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
    <div
      {...getTooltipProps({
        ref: tooltipRef,
        className: classNames,
        'data-placement': placement,
      })}>
      <div
        {...getArrowProps({
          ref: arrowRef,
          className: `${prefix}--tooltip__arrow`,
          'data-placement': placement,
        })}
      />
      {content}
    </div>
  );

  const Trigger = ({ getTriggerProps, triggerRef }) => {
  // console.log("children type",typeof children === string)
    if (!createRefWrapper && typeof children !== 'string') {
      const elementClassNames = classnames(children?.props?.className, {
        [`${prefix}--tooltip--trigger`]: true,
      });

      return React.cloneElement(children, {
        ...getTriggerProps({
          ...children.props,
          ref: triggerRef,
          className: elementClassNames,
        }),
      });
    }

    const wrapperClassNames = classnames(className, {
      [`${prefix}--tooltip--trigger`]: true,
    });

    return (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: wrapperClassNames,
        })}>
        {children}
      </span>
    );
  };

  const visibilityChange = (e) => {
    setVisibility(e);
    if (onVisibilityChange) onVisibilityChange(e);
  };

  return (
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
      {Trigger}
    </TooltipTrigger>
  );
};

Tooltip.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  content: PropTypes.node,

  /**
   * Provide a dark styled tooltip
   */
  dark: PropTypes.bool,
  /**
   * Disable the default inner padding of the tooltip
   */
  disablePadding: PropTypes.bool,
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
  modifiers: PropTypes.object,

  /**
   * Provide additional utils as an object https://popper.js.org/docs/v2/utils/
   */
  utils: PropTypes.object,

  /**
   * Use a wrapper html element aroud the trigger. Useful for components without `forwardRef` support.
   */
  createRefWrapper: PropTypes.bool,
};

export default Tooltip;
