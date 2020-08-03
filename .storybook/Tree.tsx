import React, { ComponentType, FunctionComponent } from 'react';

//import { Dataset, ExpandedSet, SelectedSet } from './utils';

import { Dataset, ExpandedSet, SelectedSet } from '@storybook/ui/dist/index.js';

import {
  DefaultList,
  DefaultLeaf,
  DefaultHead,
} from '@storybook/ui/dist/index.js';

const branchOrLeaf = (
  {
    Branch,
    Leaf,
    Head,
    List,
  }: {
    Branch: ComponentType<any>;
    Leaf: ComponentType<any>;
    Head: ComponentType<any>;
    List: ComponentType<any>;
  },
  {
    root,
    dataset,
    expanded,
    selected,
    depth,
  }: {
    root: string;
    dataset: Dataset;
    expanded: ExpandedSet;
    selected: SelectedSet;
    depth: number;
  }
) => {
  const node = dataset[root];

  if (!node) {
    return null;
  }

  return node.children ? (
    <Branch
      key={node.id}
      {...{
        Branch,
        Leaf,
        Head,
        List,
        dataset,
        root,
        depth,
        expanded,
        selected,
      }}
    />
  ) : (
    <Leaf
      key={node.id}
      {...node}
      depth={depth}
      isSelected={selected[node.id]}
    />
  );
};

const Tree: FunctionComponent<{
  root: string;
  depth: number;
  dataset: Dataset;
  expanded: ExpandedSet;
  selected: SelectedSet;
  Branch: ComponentType<any>;
  List?: ComponentType<any>;
  Leaf?: ComponentType<any>;
  Head?: ComponentType<any>;
}> = (props) => {
  const {
    root,
    depth,
    dataset,
    expanded,
    selected,
    Branch = Tree,
    List = DefaultList,
    Leaf = DefaultLeaf,
    Head = DefaultHead,
  } = props;

  const item = dataset[root];

  if (!item) {
    return null;
  }

  const { children, ...node } = item;

  const mapNode = (i: string) =>
    branchOrLeaf(
      { Branch, Leaf, Head, List },
      { dataset, selected, expanded, root: i, depth: depth + 1 }
    );

  switch (true) {
    case !!(children && children.length && node.name): {
      return (
        <>
          <Head
            {...node}
            depth={depth}
            isExpanded={expanded[node.id]}
            isSelected={selected[node.id]}
            childIds={children}
          />
          {children && expanded[node.id] ? (
            <List>{children.map(mapNode)}</List>
          ) : null}
        </>
      );
    }
    case !!(children && children.length): {
      return <List>{children.map(mapNode)}</List>;
    }
    case node.isLeaf: {
      return (
        <Leaf
          key={node.id}
          {...node}
          depth={depth}
          isSelected={selected[node.id]}
        />
      );
    }
    default: {
      return null;
    }
  }
};

export { Tree };
