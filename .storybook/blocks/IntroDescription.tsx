import React, { FunctionComponent, useContext } from 'react';
import {
  Description,
  DescriptionProps as PureDescriptionProps,
} from '@storybook/components';
import {
  DocsContext,
  DocsContextProps,
} from '@storybook/addon-docs/dist/blocks/DocsContext';
import { Component, CURRENT_SELECTION } from './types';
import { str } from '@storybook/addon-docs/dist/lib/docgen';
import ReactDOMServer from 'react-dom/server';
import { MDXProvider } from '@mdx-js/react';

import { CodeOrSourceMdx, AnchorMdx, HeadersMdx } from './mdx';

const defaultComponents = {
  code: CodeOrSourceMdx,
  a: AnchorMdx,
  ...HeadersMdx,
};

import Tag from '../../src/components/Tag';

export enum DescriptionType {
  INFO = 'info',
  NOTES = 'notes',
  DOCGEN = 'docgen',
  LEGACY_5_2 = 'legacy-5.2',
  AUTO = 'auto',
}

type Notes = string | any;
type Info = string | any;

interface DescriptionProps {
  of?: '.' | Component;
  type?: DescriptionType;
  markdown?: string;
  children?: string;
}

const getNotes = (notes?: Notes) =>
  notes &&
  (typeof notes === 'string' ? notes : str(notes.markdown) || str(notes.text));

const getInfo = (info?: Info) =>
  info && (typeof info === 'string' ? info : str(info.text));

const noDescription = (component?: Component): string | null => null;

export const getDescriptionProps = (
  { of, type, markdown, children }: DescriptionProps,
  { parameters }: DocsContextProps
): PureDescriptionProps => {
  if (children || markdown) {
    return { markdown: children || markdown };
  }
  const { component, notes, info, docs } = parameters;
  const { extractComponentDescription = noDescription } = docs || {};
  const target = of === CURRENT_SELECTION ? component : of;
  switch (type) {
    case DescriptionType.INFO:
      return { markdown: getInfo(info) };
    case DescriptionType.NOTES:
      return { markdown: getNotes(notes) };
    // FIXME: remove in 6.0
    case DescriptionType.LEGACY_5_2:
      return {
        markdown: `
${getNotes(notes) || getInfo(info) || ''}

${extractComponentDescription(target) || ''}
`.trim(),
      };
    case DescriptionType.DOCGEN:
    case DescriptionType.AUTO:
    default:
      return { markdown: extractComponentDescription(target, parameters) };
  }
};

const em = (props) => {
  return (
    <span {...props} kind="bullets">
      ddd
      {props.children}
    </span>
  );
};

const allComponents = {
  ...defaultComponents,
  em,
};

const DescriptionContainer: FunctionComponent<DescriptionProps> = (props) => {
  const context = useContext(DocsContext);
  const { markdown } = getDescriptionProps(props, context);

  const Docs = context.parameters.mdx;
  return markdown || context.parameters.mdx ? (
    <>
      {context.parameters.status && (
        <Tag className={`status__${context.parameters.status}`}>
          Ready for production
        </Tag>
      )}

      <Description markdown={markdown} />
    </>
  ) : null;
};

// since we are in the docs blocks, assume default description if for primary component story
DescriptionContainer.defaultProps = {
  of: '.',
};

export { DescriptionContainer as IntroDescription };
