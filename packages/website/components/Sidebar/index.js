import React from 'react';

import { Sidebar, SidebarHeader, Item, Search, Button } from '@un/react';
import Accordion from '../Accordion';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

export default function SidebarWrapper({ content, posts }) {
  const coreCategory = posts.filter((item) => item.category === 'Core');
  const startedCategory = posts.filter(
    (item) => item.category === 'Getting Started'
  );

  console.log('posts', posts);

  return (
    <Sidebar
      //active={active}
      sidebar={
        <>
          <SidebarHeader style={{ paddingTop: '45px' }}>
            <Search id="search22" />
          </SidebarHeader>
          <Accordion title="Getting Started">
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
          </Accordion>
        </>
      }>
      {content}
    </Sidebar>
  );
}
