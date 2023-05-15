import { visit } from 'unist-util-visit';

// A regex that looks for a simplified attribute name, optionally followed
// by a double, single, or unquoted attribute value
// Taken from: https://mdxjs.com/guides/syntax-highlighting/
const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

function rehypeMetaAsAttributes() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'pre') {
        return;
      }

      const child = node.children[0];
      if (!child) {
        return;
      }

      if (child.tagName !== 'code' || !child.data || !child.data.meta) {
        return;
      }

      node.properties.meta = child.data.meta;

      const language =
        child.properties?.className?.[0]?.replace(/language-/, '') || '';
      node.properties.language = language;

      re.lastIndex = 0; // Reset regex
      let match;

      while ((match = re.exec(child.data.meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || '';
      }
    });
  };
}

export default rehypeMetaAsAttributes;
