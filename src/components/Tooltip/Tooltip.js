import React, { useState } from 'react';
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

const Tooltip = ({ dark, children, content }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [isShown, setIsShown] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',

    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
      { name: 'arrow', options: { element: arrowElement } },
    ],
  });

  const classNames = classnames({
    [`${prefix}--tooltip`]: true,
    [`${prefix}--tooltip--visible`]: isShown,
    [`${prefix}--tooltip--dark`]: dark,
  });

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
   * Provide the `href` attribute for the <a> node
   */
  dark: PropTypes.bool,
};

export default Tooltip;
