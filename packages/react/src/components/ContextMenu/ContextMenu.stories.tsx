import React from 'react';
import markdown from './README.mdx';
import { ContextMenu, ContextMenuGroup, ContextMenuItem } from './ContextMenu';
import Link from '../Link';

export default {
  title: 'Components/UI Elements/ContextMenu',
  component: Link,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <ContextMenu
    {...args}
    content={
      <>
        <ContextMenuGroup>
          <ContextMenuItem>Itemgroup 1</ContextMenuItem>
          <ContextMenuItem>Itemgroup 2</ContextMenuItem>
          <ContextMenuItem>Itemgroup 3</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </>
    }>
    <span>Open context menu</span>
  </ContextMenu>
);

Regular.args = { children: 'WFP Homepage', href: 'https://www.wfp.org' };

const sourcecode = `
import { ContextMenu, ContextMenuGroup, ContextMenuItem } from "@wfp/react";

<ContextMenu
  content={
    <>
    <ContextMenuGroup>
      <ContextMenuItem>Itemgroup 1</ContextMenuItem>
      <ContextMenuItem>Itemgroup 2</ContextMenuItem>
      <ContextMenuItem>Itemgroup 3</ContextMenuItem>
    </ContextMenuGroup>
    <ContextMenuItem>Item 1</ContextMenuItem>
    <ContextMenuItem>Item 2</ContextMenuItem>
    <ContextMenuItem>Item 3</ContextMenuItem>
    </>
    }
  href="https://www.wfp.org"
>
  <span>
    Open context menu
  </span>
</ContextMenu>
`;
Regular.story = {
  parameters: {
    docs: {
      source: {
        code: sourcecode,
      },
    },
  },
};

export const States = (args) => (
  <ContextMenu
    {...args}
    content={({ setVisibility, visibilityChange }) => (
      <>
        <ContextMenuGroup>
          <ContextMenuItem>Itemgroup 1</ContextMenuItem>
          <ContextMenuItem>Itemgroup 2</ContextMenuItem>
          <ContextMenuItem>Itemgroup 3</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuItem
          onClick={() => {
            console.log('hide', setVisibility);
            setVisibility(true);
            visibilityChange(true);
          }}>
          Hide ContextMenu
        </ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </>
    )}>
    <span>Open context menu</span>
  </ContextMenu>
);

States.args = { ...Regular.args, style: { marginRight: '1rem' } };

const statesourcecode = `
import { ContextMenu, ContextMenuGroup, ContextMenuItem } from "@wfp/react";

<ContextMenu
    content={({ setVisibility, visibilityChange }) => (
      <>
        <ContextMenuGroup>
          <ContextMenuItem>Itemgroup 1</ContextMenuItem>
          <ContextMenuItem>Itemgroup 2</ContextMenuItem>
          <ContextMenuItem>Itemgroup 3</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuItem
          onClick={() => {
            console.log('hide', setVisibility);
            setVisibility(true);
            visibilityChange(true);
          }}>
          Hide ContextMenu
        </ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </>
    )}>
    <span>Open context menu</span>
  </ContextMenu>
`;

States.story = {
  parameters: {
    docs: {
      storyDescription: `Content as function`,
      source: {
        code: statesourcecode,
      },
    },
  },
};
