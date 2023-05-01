import React from 'react';
import markdown from './README.mdx';
import MarkdownContent from './markdown.mdx';

import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './MdxComponentsNew';

export default {
  title: 'Components/Content Related/Mdx components',
  component: mdxComponents,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
    introText: `MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents.`,

    docs: {
      source: {
        code: `
import { mdxComponents } from '@wfp/react';
import { MDXProvider } from '@mdx-js/react';

<MDXProvider components={mdxComponents}>{children}</MDXProvider>`,
      },
    },
  },
};

export const Regular = (args) => (
  <MDXProvider components={mdxComponents}>
    <MarkdownContent />
  </MDXProvider>
);
