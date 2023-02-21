const docId = 'wFEEbUEWrlfMhs2a1S2RTp';
const nodeId = '101:134';

const options = {
  headers: {
    'X-Figma-Token': process.env.FIGMA_TOKEN,
  },
};

//www.figma.com/file/wFEEbUEWrlfMhs2a1S2RTp/UN-core-website?node-id=801%3A339&t=ffaLsECV8p10ZEa4-1

export default async function figmaImages(req, res) {
  try {
    //<FILE_KEY>?ids=<ELEMENT_NODE_ID>&format=png
    // ${docId}?ids=${nodeId}&format=png
    // a85671a32e6f9f53f1770fb3a22099509523c40b
    const response = await fetch(
      //  `https://api.github.com/repos/un-core/designsystem/packages/website/_posts/Figma/figma.mdx?ref=content/website-content`,
      `https://api.github.com/repos/un-core/designsystem/contents/packages/website/_posts/Figma/figma.mdx?ref=content/website-content`,
      {
        // method: "POST",
        headers: {
          accept: 'application/vnd.github.v3.raw',
          'Content-Type': 'application/json',
          //  'X-Figma-Token': process.env.FIGMA_TOKEN,
        },
      }
    );

    const content = await response.text();
    console.log('res', content);
    // const json = await res.json();
    //if (json.errors) {
    //console.error(json.errors[0].extensions.debug);
    // throw new Error('Failed to fetch API');
    // }
    res.status(200).json(content);
  } catch (error) {
    console.log('error', error);
    res.status(404).json({ name: 'John Doe' });
  }
}
