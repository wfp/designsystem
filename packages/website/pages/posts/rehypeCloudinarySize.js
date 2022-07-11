import { Cloudinary } from "cloudinary-core";
import { selectAll } from "hast-util-select";
import urlGenerator from "../../lib/cloudinaryHelper";
//import probe from "probe-image-size";

async function probe(src) {
  const { cloudName, name, isVideo } = urlGenerator(src);
  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  const url = cl.url(name, {
    protocol: "https:",
    width: 300,
    flags: ["getinfo"],
  });

  const res = await fetch(url, {
    method: "GET",
  });

  const result = await res.json();

  console.log("dimensions", result);

  return { width: result.input.width, height: result.input.height };
}

function isImageNode(node) {
  return (
    node.type === "element" &&
    node.tagName === "img" &&
    node.properties &&
    typeof node.properties.src === "string"
  );
}

function setAbsolutePath(node, baseUrl) {
  if (node.properties.src.startsWith("/")) {
    if (!baseUrl) {
      throw new Error(
        `Error: [rehype-external-img-size] You must configure the baseUrl option to process relative img paths like: ${node.properties.src}`
      );
    }

    node.properties.src = baseUrl + node.properties.src;
  }
}

const rehypeExternalImageSize = (options) => async (tree) => {
  const options_ = options || {};
  const baseUrl = options_.baseUrl;

  const imageNodes = selectAll("img", tree);

  const validImageNodes = imageNodes.filter((node) => isImageNode(node));

  for (const node of validImageNodes) {
    setAbsolutePath(node, baseUrl);
  }

  await Promise.all(
    validImageNodes.map(async (node) => {
      try {
        const dimensions = (await probe(node.properties.src, baseUrl)) || {};
        node.properties.width = dimensions.width;
        node.properties.height = dimensions.height;
      } catch (error) {
        console.log(
          `Error: [rehype-external-img-size] error getting the dimensions of: ${node.properties.src}`,
          error
        );
        throw new Error(
          `Error: [rehype-external-img-size] error getting the dimensions of: ${node.properties.src}`
        );
      }
    })
  );
};

export default rehypeExternalImageSize;
