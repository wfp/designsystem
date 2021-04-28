import React from 'react';
import markdown from './README.mdx';
import Text from '.';
import textTwig from './Text.twig';
import Link from '../Link';
import { List, ListItem } from '../List';

export default {
  title: 'Components/UI Elements/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: textTwig
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

const Normaltext = [
  { kind: 'p', text: 'Body copy, paragraph', styling: '16px, Regular' },
  { kind: 'p', text: 'Label (form)', styling: '16px, Regular' },
  { kind: 'code', text: 'Code', styling: 'Monospace, 13px, Regular' },
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

export const pagetitle = (args) => (
  <>
    <Text kind="title">Title</Text>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>59px, Light</div>
    <Text kind="subtitle">Overline</Text>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>14px, SemiBold</div>
  </>
);

export const links = (args) => (
  <>
    <Text kind="a">Link</Text>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>16px, Regular</div>
    <Link className="wfp--link--hover">Link</Link>
    <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>16px, Regular</div>
  </>
);

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
