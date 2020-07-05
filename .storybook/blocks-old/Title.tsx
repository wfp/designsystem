import React, { useContext, FunctionComponent } from 'react';
import { parseKind } from '@storybook/csf';
import { Title as PureTitle } from '@storybook/components';
import {
  DocsContext,
  DocsContextProps,
} from '@storybook/addon-docs/dist/blocks/DocsContext';

interface TitleProps {
  children?: JSX.Element | string;
}
export const extractTitle = ({ kind, parameters }: DocsContextProps) => {
  const {
    showRoots,
    hierarchyRootSeparator: rootSeparator = '|',
    hierarchySeparator: groupSeparator = /\/|\./,
  } = (parameters && parameters.options) || {};

  let groups;
  if (typeof showRoots !== 'undefined') {
    groups = kind.split('/');
  } else {
    // This covers off all the remaining cases:
    //   - If the separators were set above, we should use them
    //   - If they weren't set, we should only should use the old defaults if the kind contains '.' or '|',
    //     which for this particular splitting is the only case in which it actually matters.
    ({ groups } = parseKind(kind, { rootSeparator, groupSeparator }));
  }

  return (groups && groups[groups.length - 1]) || kind;
};

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
  const context = useContext(DocsContext);
  let text: JSX.Element | string = children;
  if (!text) {
    text = extractTitle(context);
  }
  return text ? <PureTitle className="sbdocs-title">{text}</PureTitle> : null;
};
