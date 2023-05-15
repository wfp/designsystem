import React, { ReactNode, ForwardedRef, memo } from 'react';
import { TransitionState } from 'react-transition-state';
import {
  ACCORDION_BLOCK,
  ElementProps,
  ItemState,
  ItemStateOptions,
} from '../utils/constants';
import { bem } from '../utils/bem';
import { mergeProps } from '../utils/mergeProps';
import useSettings from '../../../hooks/useSettings';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useHeightTransition } from '../hooks/useHeightTransition';
import { useMergeRef } from '../hooks/useMergeRef';
import { ChevronDown } from '@un/icons-react';
import { withAccordionItem, ItemStateProps } from './withAccordionItem';
import classNames from 'classnames';

interface ItemElementProps<E extends HTMLElement>
  extends ElementProps<E, TransitionState> {
  ref?: ForwardedRef<E>;
}

type NodeOrFunc = ReactNode | ((props: ItemState) => ReactNode);

interface AccordionItemProps
  extends ItemStateOptions,
    ElementProps<HTMLDivElement, TransitionState> {
  header?: NodeOrFunc;
  children?: NodeOrFunc;
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingProps?: ItemElementProps<HTMLHeadingElement>;
  buttonProps?: ItemElementProps<HTMLButtonElement>;
  contentProps?: ItemElementProps<HTMLDivElement>;
  panelProps?: ItemElementProps<HTMLDivElement>;
}

interface WrappedItemProps<E extends Element>
  extends ItemStateProps<E>,
    Omit<AccordionItemProps, 'itemRef' | 'itemKey' | 'initialEntered'> {}

const getRenderNode: <P>(
  nodeOrFunc: ReactNode | ((props: P) => ReactNode),
  props: P
) => ReactNode = (nodeOrFunc, props) =>
  typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;

const WrappedItem = memo(
  ({
    forwardedRef,
    itemRef,
    state,
    toggle,
    className,
    disabled,
    header,
    headingTag: Heading = 'h3',
    headingProps,
    buttonProps,
    contentProps,
    panelProps,
    children,
    ...rest
  }: WrappedItemProps<HTMLDivElement>) => {
    const itemState: ItemState = { state, toggle, disabled };
    const { buttonProps: _buttonProps, panelProps: _panelProps } =
      useAccordionItem(itemState);
    const [transitionStyle, _panelRef] =
      useHeightTransition<HTMLDivElement>(state);
    const panelRef = useMergeRef(panelProps && panelProps.ref, _panelRef);
    const { status, isMounted, isEnter } = state;

    const { prefix } = useSettings();

    const buttonClasses = classNames(`${prefix}--accordion--button`, {
      [`${prefix}--accordion--button__expanded`]: isEnter,
      //  [`${className}`]: className,
    });

    return (
      <div
        {...rest}
        ref={useMergeRef(forwardedRef, itemRef)}
        className={bem(ACCORDION_BLOCK, 'item', { status, expanded: isEnter })(
          className,
          state
        )}>
        <Heading
          {...headingProps}
          style={{ margin: 0, ...(headingProps && headingProps.style) }}
          className={bem(ACCORDION_BLOCK, 'item-heading')(
            headingProps && headingProps.className,
            state
          )}>
          <button
            {...mergeProps(_buttonProps, buttonProps)}
            type="button"
            className={bem(ACCORDION_BLOCK, 'item-btn')(
              buttonProps && buttonProps.className,
              state
            )}>
            <ChevronDown description="open" className={buttonClasses} />
            {getRenderNode(header, itemState)}
          </button>
        </Heading>

        {isMounted && (
          <div
            {...contentProps}
            style={{
              display: status === 'exited' ? 'none' : undefined,
              ...transitionStyle,
              ...(contentProps && contentProps.style),
            }}
            className={bem(ACCORDION_BLOCK, 'item-content')(
              contentProps && contentProps.className,
              state
            )}>
            <div
              {...mergeProps(_panelProps, panelProps)}
              ref={panelRef}
              className={bem(ACCORDION_BLOCK, 'item-panel')(
                panelProps && panelProps.className,
                state
              )}>
              {getRenderNode(children, itemState)}
            </div>
          </div>
        )}
      </div>
    );
  }
);

WrappedItem.displayName = 'AccordionItem';
const AccordionItem = withAccordionItem<AccordionItemProps, HTMLDivElement>(
  WrappedItem
);

export { AccordionItem, AccordionItemProps };
