import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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
  modifiers,
  placement = 'top',
  utlis,
  useWrapper,
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
    [`${prefix}--tooltip--disable-padding`]: noPadding,
    [`${prefix}--tooltip--${trigger}`]: trigger,
    [`${prefix}--tooltip--dark`]: dark,
  });

  const actions =
    trigger === 'hover'
      ? {
          onMouseEnter: () => setIsShown(true),
          onMouseLeave: () => setIsShown(false),
        }
      : { onClick: () => handleInsideClick(true) };
  return (
    <>
      {useWrapper === true ? (
        <span type="button" ref={referenceElement} {...actions}>
          {children}
        </span>
      ) : (
        <>
          {React.cloneElement(children, { ref: referenceElement, ...actions })}
        </>
      )}

      <div
        ref={popperElement}
        style={styles.popper}
        {...attributes.popper}
        className={classNames}>
        {content}
        <div
          ref={setArrowElement}
          style={styles.arrow}
          className={`${prefix}--tooltip__arrow`}
        />
      </div>
    </>
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
  modifiers: PropTypes.object,

  /**
   * Provide additional utils as an object https://popper.js.org/docs/v2/utils/
   */
  utils: PropTypes.object,

  /**
   * Use a wrapper html element aroud the trigger. Useful for components without `forwardRef` support.
   */
  useWrapper: PropTypes.bool,
};

export default Tooltip;
