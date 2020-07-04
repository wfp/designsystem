import React, { useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Source, SourceProps as PureSourceProps } from '@storybook/components';
import {
  //enhanceSource,
  DocsContext,
} from '@storybook/addon-docs/blocks';

/**
 * Story source doc block renders source code if provided,
 * or the source for a story if `storyId` is provided, or
 * the source for the current story if nothing is provided.
 */
const SourceContainer = (props) => {
  //const sourceContext = useContext(SourceContext);
  const docsContext = useContext(DocsContext);
  console.log('docs', /*sourceContext*/ docsContext);
  const Component = docsContext.parameters.component;

  const html = ReactDOMServer.renderToString(
    <Component {...docsContext.parameters.props} />
  );
  return (
    <>
      <h3>html</h3>
      <Source
        code={html.replace(' data-reactroot=""', '')}
        language="jsx"
        dark
      />
    </>
  );
};

export default SourceContainer;
