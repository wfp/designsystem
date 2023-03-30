const rehypeToC = () => async (tree) => {
  tree.children = tree.children.filter(
    (t) => (t.type === 'element' && t.tagName === 'h2') || t.tagName === 'h3'
  );
};

export default rehypeToC;
