import React from 'react';

import content from '../../../CHANGELOG.mdx';
import mdxComponents from '../../components/mdxComponents';
import { MDXProvider } from '@mdx-js/react';

export default function Changelog() {
  console.log('changelog');

  return <MDXProvider components={mdxComponents}>{content()}</MDXProvider>;

  return <div>Changelod dddd</div>;
}
