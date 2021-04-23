import React, {useState} from 'react';
import markdown from './README.mdx';
import Loading from '.';
import Button from '../Button';
import loadingTwig from './Loading.twig';

export default {
  title: 'Components/UI Elements/Loading',
  component: Loading,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: loadingTwig
  },
};

export const Regular = (args) => <Loading {...args}>Text</Loading>;
Regular.args = {
  withOverlay: false,
};


export const overlay = (args) => {
  const [loading, setLoading] = useState(false);
  
  return(
    <>
      <Button onClick={()=>setLoading(true)}>Load with overlay     </Button>
      {
        loading && ( <Loading withOverlay={true} >Text</Loading> )
      }
    </>
  )

}

const description = `
When loader is applied with an overlay. Do this by specifying \`true\` to \`withOverlay\` prop.
`;

overlay.args = {
  withOverlay: false,
};

overlay.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const small = (args) => <Loading {...args}>Text</Loading>;

const desc = `
When loader has a \`small\` variant.
`;

small.args = {
  withOverlay: false,
  small: true,
};

small.story = {
  parameters: {
    docs: {
      storyDescription: desc,
    },
  },
};
