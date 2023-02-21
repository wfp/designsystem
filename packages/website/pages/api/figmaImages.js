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
    const response = await fetch(
      `https://api.figma.com/v1/images/wFEEbUEWrlfMhs2a1S2RTp?ids=101:134&format=png`,
      {
        // method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'X-Figma-Token': 'figd_EM_fkHTp5SY2RRSb_Exy3pp4KmrY9QjSgNJP3wZE', //process.env.FIGMA_TOKEN,
        },
      }
    );

    const content = await response.json();
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
