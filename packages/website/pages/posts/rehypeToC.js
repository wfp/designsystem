function searchTreeWrapper(element, matchingTitle) {
  var result = [];

  const searchTree = (element, matchingTitle) => {
    if (element.name == matchingTitle) {
      result.push(element);
    } else if (element.children != null) {
      var i;
      for (i = 0; i < element.children.length; i++) {
        searchTree(element.children[i], matchingTitle);
      }
    }
  };

  searchTree(element, matchingTitle);
  return result;
}

const rehypeToC = (options) => async (tree) => {
  const options_ = options || {};
  const baseUrl = options_.baseUrl;

  const imageNodes = searchTreeWrapper(tree, 'h3');

  tree.children = tree.children.filter(
    (t) => t.type === 'element' && t.tagName === 'h3'
  );
};

export default rehypeToC;
