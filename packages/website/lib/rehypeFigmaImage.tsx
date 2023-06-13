async function getImage({ document, node }) {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/images/${document}?ids=${node}&format=png&scale=4`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Figma-Token': process.env.FIGMA_TOKEN || '',
        },
      }
    );

    const responseDimensions = await fetch(
      `https://api.figma.com/v1/files/${document}/nodes?ids=${node}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Figma-Token': process.env.FIGMA_TOKEN || '',
        },
      }
    );

    const content = await response.json();
    const contentDimensions = await responseDimensions.json();

    return { ...content, ...contentDimensions };
  } catch (error) {
    console.log('error', error);
  }
}

function searchTreeWrapper(element:any, matchingTitle:any) {
  const result :any= [];

  const searchTree = (element:any, matchingTitle:any) => {
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

async function probeImage(props) {
  const res = await getImage(props);
  return res;
}

const rehypeImage = () => async (tree) => {
  const imageNodes = searchTreeWrapper(tree, 'FigmaImage');

  await Promise.all(
    imageNodes.map(async (node) => {
      const urlEl = node.attributes.find((a) => a.name === 'url');

      const document = node.attributes.find((a) => a.name === 'document');
      const nodeEl = node.attributes.find((a) => a.name === 'node');

      const documentValue = urlEl?.value
        ? urlEl.value.split('figma.com/file')[1].split('/')[1]
        : document.value;

      const nodeValue = urlEl?.value
        ? urlEl.value.split('?node-id=')[1].replace('%3A', ':')
        : nodeEl.value;

      //www.figma.com/file/wFEEbUEWrlfMhs2a1S2RTp/UN-core-website?node-id=1035%3A357

      const dimensions = await probeImage({
        document: documentValue,
        node: nodeValue,
      });

      const attributes = {
        //...dimensions,
        img: dimensions.images[nodeValue],
        ...dimensions.nodes[nodeValue].document.absoluteBoundingBox,
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

export default rehypeImage;
