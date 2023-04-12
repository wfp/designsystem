import { Heading as AstHeading } from 'mdast';

import { Node, visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import { VFileWithOutput } from 'unified';

export interface Heading {
  depth: number;
  value: string;
  data?: any;
}

export const hasHeadingsData = (data: any): data is { headings: Heading[] } =>
  data instanceof Object &&
  // eslint-disable-next-line no-prototype-builtins
  data.hasOwnProperty('headings') &&
  data.headings instanceof Array;

export const headings = (root: Node) => {
  const headingList: Heading[] = [];

  visit(root, 'heading', (node: AstHeading) => {
    const heading: Heading = {
      depth: node.depth,
      value: toString(node, { includeImageAlt: false }),
    };

    // Other remark plugins can store arbitrary data
    // inside a node's `data` property, such as a
    // custom heading id.
    const data = node?.data;
    if (data) {
      heading.data = data;
    }

    headingList.push(heading);
  });

  return headingList;
};

export default function remarkHeadings() {
  return (node: Node, file: VFileWithOutput<any>) => {
    file.data.headings = headings(node);
  };
}
