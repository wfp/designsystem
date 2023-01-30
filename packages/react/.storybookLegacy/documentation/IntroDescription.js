import React, { useContext } from 'react';
import { Description } from '@storybook/components';
import { MDXProvider } from '@mdx-js/react';
import {
  DocsContext,
  DocsContextProps,
} from '@storybook/addon-docs/dist/esm/blocks/DocsContext';

import { getDocsStories } from '../blocks/utils';

import statusLookup from './statusLookup';
import { Tag, List, ListItem } from '../../src';

export default function IntroDescription() {
  const context = useContext(DocsContext);
  const Docs = context.parameters.mdx;

  console.log('Docs', Docs);
  console.log('context', context);
  console.log('componentStories', componentStories);
  const componentStories = getDocsStories(context);

  const componentsTableOfContent = {
    wrapper: ({ children, ...props }) => {
      const output = Array.isArray(children)
        ? children.map((child, i) => {
            if (['h1', 'h2', 'h3'].includes(child.props.mdxType)) {
              return (
                <ListItem key={i}>
                  <a
                    href={`#${child.props.children
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                    target="_self">
                    {child.props.children}
                  </a>
                </ListItem>
              );
            }
            return null;
          })
        : '';

      const reversedChildren = React.Children.toArray(children).reverse();
      const componentStories = getDocsStories(context);

      const examplesList = componentStories.map((e) => (
        <ListItem>
          <a
            href={`#${e.id.replace('components-module--', '')}`}
            target="_self">
            {e.name}
          </a>
        </ListItem>
      ));
      return (
        <List className="table-of-content">
          <ListItem>
            <a href={`#anchor--${context.parameters.id}`} target="_self">
              Demo
            </a>
          </ListItem>
          {/*{examplesList}*/}
          {output}
        </List>
      );
    },
  };

  //const { markdown } = getDescriptionProps(props, context);
  return (
    <div>
      {context.parameters.status && (
        <div className="docs-status">
          <Tag
            className={`status__${context.parameters.status}`}
            type={statusLookup[context.parameters.status].type}>
            {statusLookup[context.parameters.status].name}
          </Tag>
        </div>
      )}

      <MDXProvider components={componentsTableOfContent}>
        {Docs && <Docs />}
      </MDXProvider>
    </div>
  );
}
