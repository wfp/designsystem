import React, { useContext } from 'react';
import { Description } from '@storybook/components';
import { MDXProvider } from '@mdx-js/react';
import {
  DocsContext,
  DocsContextProps,
} from '@storybook/addon-docs/dist/esm/blocks/DocsContext';

import mdxComponents from '../../src/components/MdxComponents';

import { getDocsStories } from '../blocks/utils';

export default function Readme() {
  const context = useContext(DocsContext);
  const Docs = context.parameters.mdx;

  const componentStories = getDocsStories(context);

  return (
    <div>
      <MDXProvider components={mdxComponents}>{Docs && <Docs />}</MDXProvider>
    </div>
  );
}
