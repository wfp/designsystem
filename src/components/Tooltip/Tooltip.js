import React, { useEffect, useRef, useState } from 'react';
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

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

/** Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential. */
const Tooltip = ({
  dark,
  children,
  content,
  trigger = 'hover',
  modifiers,
  placement = 'right',
  utlis,
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [isShown, setIsShown] = useState(null);

  useEffect(() => {
    // Run! Like go get some data from an API.
    //referenceElement.addEventListener('click', handleInsideClick);
    //document.body.removeEventListener('touchend', handleOutsideClick!);
  }, []);

  /*

  document.body.addEventListener('click', this.handleOutsideClick!);

  document.body.removeEventListener('touchend', this.handleOutsideClick!);
  document.body.removeEventListener('click', this.handleOutsideClick!);
  */

  const handleInsideClick = () => {
    setIsShown(false);
    //document.body.addEventListener('click', handleOutsideClick!);
  };

  const handleOutsideClick = () => {
    setIsShown(false);
  };

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
        ...modifiers,
      },
      { name: 'arrow', options: { element: arrowElement } },
    ],
    ...utlis,
  });

  const classNames = classnames({
    [`${prefix}--tooltip`]: true,
    [`${prefix}--tooltip--visible`]: isShown,
    [`${prefix}--tooltip--dark`]: dark,
  });
  /*onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}*/

  return (
    <>
      <span
        type="button"
        ref={setReferenceElement}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        {children}
      </span>

      <div
        ref={setPopperElement}
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
   * Provide the placement of the tooltip
   */
  placement: PropTypes.string,
  /**
   * Provide the placement of the tooltip
   */
  trigger: PropTypes.string,
};

export default Tooltip;
