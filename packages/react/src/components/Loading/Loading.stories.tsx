import React, { useState } from 'react';
import markdown from './README.mdx';
import Loading from '.';
import Button from '../Button';

export default {
  title: 'Components/UI Elements/Loading',
  component: Loading,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Loading {...args}>Text</Loading>;
Regular.args = {
  active: true,
  withOverlay: false,
};

export const overlay = (args) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button kind="primary" onClick={() => setLoading(true)}>
        Load with overlay{' '}
      </Button>
      {loading && (
        <Loading withOverlay={loading} {...args}>
          Text
        </Loading>
      )}
    </>
  );
};

overlay.args = {
  active: true,
};

const overlaysourcecode = `
import { Loading, Button  } from "@wfp/react";

export const overlay = () => {
  const [loading, setLoading] = useState(false);
  
  return(
    <>
      <Button onClick={()=>setLoading(true)}>Load with overlay </Button>
      {
        loading && ( <Loading withOverlay={loading} active={true}>Text</Loading> )
      }
    </>
  )

}
`;

const description = `
When loader is applied with an overlay. Do this by specifying \`true\` to \`withOverlay\` prop.
`;

overlay.story = {
  parameters: {
    docs: {
      storyDescription: description,
      source: {
        code: overlaysourcecode,
      },
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
  active: true,
};

small.story = {
  parameters: {
    docs: {
      storyDescription: desc,
    },
  },
};
