import React, { useContext, FunctionComponent } from 'react';
import { Subtitle as PureSubtitle } from '@storybook/components';
import { DocsContext } from '@storybook/addon-docs/dist/blocks/DocsContext';

interface SubtitleProps {
  children?: JSX.Element | string;
}

export const Subtitle: FunctionComponent<SubtitleProps> = ({ children }) => {
  const context = useContext(DocsContext);
  const { parameters } = context;
  let text: JSX.Element | string = children;
  if (!text) {
    text = parameters?.componentSubtitle;
  }
  return text ? (
    <PureSubtitle className="sbdocs-subtitle">{text}</PureSubtitle>
  ) : null;
};
