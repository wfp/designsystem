import React from 'react';
import markdown from './README.mdx';
import Text from '.';
import Link from '../Link';
import { List, ListItem } from '../List';

export default {
  title: 'Components/UI Elements/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Text {...args} />;

Regular.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        borderTop: '1px solid #EFEFEF',
        borderBottom: '2px solid #EFEFEF',
      }}>
      <Story />
    </div>
  ),
];

Regular.args = { children: 'Content', kind: 'h1' };

const regularsourcecode = `
import { Text } from "@wfp/react";

<div>
  <Text kind='h1'>Content</Text>
</div>
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: regularsourcecode,
      },
    },
  },
};

const headingText = [
  { kind: 'h1', text: 'Heading 1', styling: '29px, SemiBold' },
  { kind: 'h2', text: 'Heading 2', styling: '25px, SemiBold' },
  { kind: 'h3', text: 'Heading 3', styling: '22px, SemiBold' },
  { kind: 'h4', text: 'Heading 4', styling: '20px, SemiBold' },
  { kind: 'h5', text: 'Heading 5', styling: '18px, SemiBold' },
  { kind: 'h6', text: 'Heading 6', styling: '16px, SemiBold' },
];

export const Headings = (args) => (
  <>
    {headingText.map((e) => (
      <>
        <Text kind={e.kind}>{e.text}</Text>
        <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
          {e.styling}
        </div>
      </>
    ))}
  </>
);

const headingsourcecode = `
import { Text } from "@wfp/react";

<>
  <Text kind='h1'>Heading 1</Text>
  <Text kind='h2'>Heading 2</Text>
  <Text kind='h3'>Heading 3</Text>
  <Text kind='h4'>Heading 4</Text>
  <Text kind='h5'>Heading 5</Text>
  <Text kind='h6'>Heading 6</Text>
</>
`;
Headings.story = {
  parameters: {
    docs: {
      source: {
        code: headingsourcecode,
      },
    },
  },
};

const Normaltext = [
  { kind: 'p', text: 'Body copy, paragraph', styling: '16px, Regular' },
  { kind: 'p', text: 'Label (form)', styling: '14px, SemiBold' },
  { kind: 'code', text: 'Code', styling: 'Monospace, 16px, Regular' },
  { kind: 'sup', text: 'Sup', styling: '11px, Regular' },
  {
    kind: 'inline-highlight',
    text: 'Inline highlight',
    styling: '14px, SemiBold',
  },
];

export const text = (args) => (
  <>
    {Normaltext.map((e) => (
      <>
        <Text kind={e.kind}>{e.text}</Text>
        <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
          {e.styling}
        </div>
      </>
    ))}
  </>
);

const textsourcecode = `
import { Text } from "@wfp/react";

<>
  <Text kind='p'>Body copy, paragraph</Text>
  <Text kind='p'>Label (form)</Text>
  <Text kind='code'>Code</Text>
  <Text kind='sup'>Sup</Text>
  <Text kind='inline-highlight'>Inline highlight</Text>
</>
`;
text.story = {
  parameters: {
    docs: {
      source: {
        code: textsourcecode,
      },
    },
  },
};

export const Pagetitle = (args) => (
  <>
    <Text kind="title">Title</Text>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>58px, Light</div>
    <Text kind="subtitle">Overline</Text>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>14px, SemiBold</div>
  </>
);
const pagetitlesourcecode = `
import { Text, Link  } from "@wfp/react";

<>
  <Text kind="title">Title</Text>
  <Text kind="subtitle">Overline</Text>
</>
`;

Pagetitle.story = {
  parameters: {
    docs: {
      source: {
        code: pagetitlesourcecode,
      },
    },
  },
};

export const Links = (args) => (
  <>
    <Text kind="a">Link</Text>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>16px, Regular</div>
    <Link className="wfp--link--hover">Link</Link>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>16px, Regular</div>
  </>
);

const linksourcecode = `
import { Text, Link  } from "@wfp/react";

<>
  <Text kind="a">Link</Text>
  <Link className="wfp--link--hover">Link</Link>
</>
`;

Links.story = {
  parameters: {
    docs: {
      source: {
        code: linksourcecode,
      },
    },
  },
};

const emphasisText = [
  { kind: 'strong', text: 'Bold', styling: '16px, Bold' },
  { kind: 'bold', text: 'SemiBold', styling: '16px, SemiBold' },
  { kind: 'i', text: 'Italic', styling: '16px, Italic' },
];

export const Emphasis = (args) => (
  <>
    {emphasisText.map((e) => (
      <>
        <Text kind={e.kind}>{e.text}</Text>
        <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
          {e.styling}
        </div>
      </>
    ))}
  </>
);

const emphasissourcecode = `
import { Text } from "@wfp/react";

<>
  <Text kind="strong">Bold</Text>
  <Text kind="bold">SemiBold</Text>
  <Text kind="i">Italic</Text>
</>
`;
Emphasis.story = {
  parameters: {
    docs: {
      source: {
        code: emphasissourcecode,
      },
    },
  },
};

const list = [
  { kind: 'simple', heading: 'Ordered lists' },
  { kind: 'bullets', heading: 'Bullet lists' },
  { kind: 'ordered', heading: 'Unordered lists' },
];

export const Lists = (args) => (
  <>
    {list.map((e) => (
      <>
        <Text kind="h4">{e.heading}</Text>
        <List kind={e.kind}>
          <ListItem>Numbered List 1</ListItem>
          <ListItem>Numbered List 2</ListItem>
          <ListItem>Numbered List 3</ListItem>
        </List>
        <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
          16px, Regular
        </div>
      </>
    ))}
  </>
);

const listsourcecode = `
import { Text, List, ListItem  } from "@wfp/react";

const list = [
    { kind: 'simple', heading: 'Ordered lists' },
    { kind: 'bullets', heading: 'Bullet lists' },
    { kind: 'ordered', heading: 'Unordered lists' },
  ];

const Lists = () => {
    return(
        
    <>
      {list.map((e) => (
        <>
          <Text kind="h4">{e.heading}</Text>
          <List kind={e.kind}>
            <ListItem>Numbered List 1</ListItem>
            <ListItem>Numbered List 2</ListItem>
            <ListItem>Numbered List 3</ListItem>
          </List>
        </>
      ))}
    </>
  );

}

export default Lists;
`;

Lists.story = {
  parameters: {
    docs: {
      source: {
        code: listsourcecode,
      },
    },
  },
};

const colors = [
  { color: '#031C2D', text: '#text-01' },
  { color: '#5A6872', text: '#text-02' },
  { color: '#DFE6EB', text: '#text-03' },
];

export const textColors = (args) => (
  <>
    {colors.map((e) => (
      <div style={{ display: 'flex' }}>
        <div>
          <Text>{e.text}</Text>
          <div style={{ color: '#A9A9A9', marginBottom: '3rem' }}>
            16px, {e.color}
          </div>
        </div>
        <div
          style={{
            backgroundColor: e.color,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginLeft: '1.5rem',
          }}></div>
      </div>
    ))}
  </>
);

const textcolorsourcecode = `
import { Text } from '@wfp/react'

<>
  <div style={{ display: 'flex' }}>
    <Text>#text-01</Text>
    <div
      style={{
        backgroundColor: '#031C2D',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '1.5rem',
      }}>
    </div>
  </div>
  <div style={{ display: 'flex' }}>
    <Text>#text-02</Text>
    <div
      style={{
        backgroundColor: '#5A6872',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '1.5rem',
      }}>
    </div>
  </div>
  <div style={{ display: 'flex' }}>
    <Text>#text-03</Text>
    <div
      style={{
        backgroundColor: '#DFE6EB',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '1.5rem',
      }}>
    </div>
  </div>  
</>
`;

textColors.story = {
  parameters: {
    docs: {
      source: {
        code: textcolorsourcecode,
      },
    },
  },
};
