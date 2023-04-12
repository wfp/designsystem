function searchTreeWrapper(element, matchingTitle) {
  const result = [];

  const searchTree = (element, matchingTitle) => {
    if (element.name == matchingTitle) {
      result.push(element);
    } else if (element.children != null) {
      let i;
      for (i = 0; i < element.children.length; i++) {
        searchTree(element.children[i], matchingTitle);
      }
    }
  };

  searchTree(element, matchingTitle);
  return result;
}

const rehypeComponentsList = (posts) => async (tree) => {
  const imageNodes = searchTreeWrapper(tree, 'ComponentsList');

  console.log('posts', posts);

  await Promise.all(
    imageNodes.map(async (node) => {
      const attributes = {
        //...dimensions,
        components: JSON.stringify(posts),
      };

      const newAttributes = Object.entries(attributes).map(([i, a]) => {
        return {
          type: 'mdxJsxAttribute',
          name: i,
          value: a,
        };
      });

      node.attributes = [...node.attributes, ...newAttributes];
    })
  );
};

export default rehypeComponentsList;
