import React from 'react';
import markdown from './README.mdx';
import MarkdownContent from './markdown.mdx';

import { MDXProvider } from '@mdx-js/react';
import MdxComponents from './MdxComponents';

export default {
  title: 'Components/Content Related/Mdx components',
  component: MdxComponents,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
    introText: `MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents.`,

    docs: {
      source: {
        code: `
import { MdxComponents } from '@un/react';
import { MDXProvider } from '@mdx-js/react';

<MDXProvider components={MdxComponents}>{children}</MDXProvider>`,
      },
    },
  },
};

export const Regular = (args) => (
  <MDXProvider components={MdxComponents}>
    <MarkdownContent />
  </MDXProvider>
);
