import { Cloudinary } from 'cloudinary-core';
import { selectAll } from 'hast-util-select';
import { getImage } from '../../lib/api';
import urlGenerator from '../../lib/cloudinaryHelper';
//import probe from "probe-image-size";

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

async function probeImage(id) {
  const res = await getImage(id);
  return res;
}

async function probe(src) {
  const { cloudName, name, isVideo } = urlGenerator(src);
  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  const url = cl.url(name, {
    protocol: 'https:',
    width: 300,
    flags: ['getinfo'],
  });

  const res = await fetch(url, {
    method: 'GET',
  });

  const result = await res.json();

  return { width: result.input.width, height: result.input.height };
}

const rehypeImage = (options) => async (tree) => {
  const options_ = options || {};
  const baseUrl = options_.baseUrl;

  const imageNodes = searchTreeWrapper(tree, 'CloudinaryImage');

  console.log('imagenodes', imageNodes);
  const validImageNodes = imageNodes; /*.filter((node) => isImageNode(node));*/

  /*for (const node of validImageNodes) {
    setAbsolutePath(node, baseUrl);
  }*/

  await Promise.all(
    validImageNodes.map(async (node) => {
      const id = node.attributes.find((a) => a.name === 'id');

      const info = await probeImage(id.value);

      const dimensions = (await probe(info.image.publicUrl, baseUrl)) || {};

      const attributes = {
        ...dimensions,
        ...info.image,
        src: info.image.publicUrl,
      };

      const newAttributes = Object.entries(attributes).map(([i, a]) => {
        return {
          type: 'mdxJsxAttribute',
          name: i,
          value: a,
        };
      });

      node.attributes = [...node.attributes, ...newAttributes];

      /* } catch (error) {
        console.log(
          `Error: [rehype-external-img-size] error getting the dimensions of`,
          error
        );
        throw new Error(
          `Error: [rehype-external-img-size] error getting the dimensions of`
        );
      }*/
    })
  );
};

export default rehypeImage;
