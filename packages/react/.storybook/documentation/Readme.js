import React, { useContext } from 'react';
import { Description } from '@storybook/components';
import { MDXProvider } from '@mdx-js/react';
import { DocsContext, DocsContextProps } from '@storybook/blocks';

import mdxComponents from '../../src/components/MdxComponents';

import { getDocsStories } from '../blocks/utils';

export default function Readme() {
  const context = useContext(DocsContext);
  const Docs = context?.attachedCSFFile?.meta?.parameters?.mdx;
  console.log('context', context, Docs);

  const componentStories = getDocsStories(context);

  return (
    <div>
      <MDXProvider components={mdxComponents}>{Docs && <Docs />}</MDXProvider>
    </div>
  );
}
