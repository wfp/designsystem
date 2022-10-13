import React from 'react';

import { Sidebar, SidebarHeader, Item, Search, Button } from '@un/react';
import Accordion from '../Accordion';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

function TreeBranch({ split }) {
  return (
    <li>
      {split?.children && (
        <>
          {split.name}
          {split.children.map((c) => (
            <TreeBranch split={c} />
          ))}
        </>
      )}
    </li>
  );
}

export const createPathTree = (paths) => {
  const level = { ['<result>']: [] };

  paths.forEach((path) => {
    path.key.split('/').reduce((currentLevel, name, index, array) => {
      if (!currentLevel[name]) {
        currentLevel[name] = { ['<result>']: [] };
        currentLevel['<result>'].push({
          name,
          children: currentLevel[name]['<result>'],
          /* Attach the path object to the leaf node. */
          path: index === array.length - 1 ? path : null,
        });
      }

      return currentLevel[name];
    }, level);
  });

  const finalArray = level['<result>'];
  return finalArray.length > 0 ? finalArray[0] : null;
};

export default function SidebarWrapper({ content, posts }) {
  const coreCategory = posts.filter((item) => item.category === 'Core');
  const startedCategory = posts.filter(
    (item) => item.category === 'Getting Started'
  );

  console.log('posts', posts);

  const postSplit = posts.map((p) => {
    return {
      key: p.slug,
      directory: false,
    };
  });

  const split = createPathTree(postSplit);
  console.log('sdaasdadsds', createPathTree(postSplit));

  return (
    <Sidebar
      //active={active}
      sidebar={
        <>
          <SidebarHeader style={{ paddingTop: '45px' }}>
            <Search id="search22" />
          </SidebarHeader>

          <ul>
            <TreeBranch split={split} />
          </ul>
          {/*<Accordion title="Getting Started">
            {startedCategory.map((item) => {
              return (
                <Link href={`${item.slug}`}>
                  <Item
                    kind="horizontal"
                    title={item.title}
                    //  onClick={() => onItemClicked(item.mdxSource, item.content)}
                  />
                </Link>
              );
            })}
          </Accordion>

          <Accordion title="Core">
            {coreCategory.map((item) => {
              return (
                <Link href={`${item.slug}`}>
                  <Item
                    kind="horizontal"
                    title={item.title}
                    //  onClick={() => onItemClicked(item.mdxSource, item.content)}
                  />
                </Link>
              );
            })}
          </Accordion>*/}
        </>
      }>
      {content}
    </Sidebar>
  );
}
