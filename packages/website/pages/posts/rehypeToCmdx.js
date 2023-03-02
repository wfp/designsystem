import { name as isIdentifierName } from 'estree-util-is-identifier-name';
import { valueToEstree } from 'estree-util-value-to-estree';

export default function mdx({ name = 'tableOfContents' } = {}) {
  if (!isIdentifierName(name)) {
    throw new Error(
      `The name should be a valid identifier name, got: ${JSON.stringify(name)}`
    );
  }

  return function transformer(tree, vfile) {
    if (vfile.data.toc == null) return;

    tree.children.unshift({
      type: 'mdxjsEsm',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExportNamedDeclaration',
              source: null,
              specifiers: [],
              declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name },
                    init: valueToEstree(vfile.data.toc),
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };
}
