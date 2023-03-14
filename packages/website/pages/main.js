import React, { useState } from 'react';
import Layout from '../components/Blog/Layout';
import { Sidebar, SidebarHeader, Item, Search, Button } from '@un/react';
import Accordion from '../components/Accordion';
import { getAllPosts } from '../lib/getPost';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import components from '../components/Blog/Mdx';
import { contentWindow } from 'iframe-resizer';

const Main = ({ newItems }) => {
  const [active, setActive] = useState(false);
  const [content, setContent] = useState('');
  const [content2, setContent2] = useState('');
  const coreCategory = newItems.filter((item) => item.category === 'Core');
  const startedCategory = newItems.filter(
    (item) => item.category === 'Getting Started'
  );

  function onItemClicked(content, newContent) {
    setActive(true);
    setContent(content);
    setContent2(newContent);
  }

  return (
    <Layout>
      <Sidebar
        active={active}
        sidebar={
          <>
            <SidebarHeader style={{ paddingTop: '45px' }}>
              <Search id="search22" />
            </SidebarHeader>
            <Accordion title="Getting Started">
              {startedCategory.map((item) => {
                return (
                  <Item
                    kind="horizontal"
                    title={item.title}
                    onClick={() => onItemClicked(item.mdxSource, item.content)}
                  />
                );
              })}
              {/* <Item kind="horizontal" title="Using the Kit" />
              <Item kind="horizontal" title="Recommended libraries" />
              <Item kind="horizontal" title="Supported Browsers" /> */}
            </Accordion>
            <Accordion title="Guidelines"></Accordion>
            <Accordion title="Core">
              {coreCategory.map((item) => {
                return (
                  <Item
                    kind="horizontal"
                    title={item.title}
                    onClick={() => onItemClicked(item.mdxSource)}
                  />
                );
              })}
            </Accordion>

            {/* <Accordion title="Tools & Helpers">
              <Item kind="horizontal" title="Themes" />
              <Item kind="horizontal" title="React" />
              <Item kind="horizontal" title="Figma library" />
              <Item kind="horizontal" title="Styles" />
              <Item kind="horizontal" title="Icons" />
              <Item kind="horizontal" title="Pictograms" />
              <Item kind="horizontal" title="Humanitarian Icons" />
            </Accordion>
            <Accordion title="Components"></Accordion> */}
          </>
        }>
        {content && (
          <>
            Hello
            <MDXRemote {...content} components={components} />
          </>
        )}
      </Sidebar>
    </Layout>
  );
};

export async function getStaticProps() {
  const items =
    (await getAllPosts([
      'category',
      'title',
      'date',
      'slug',
      'excerpt',
      'author',
      'ogImage',
      'coverImage',
      'content',
    ])) || [];

  const mdxSource = await serialize(items.content);

  const newItems = items.map((item) => {
    return { ...item, mdxSource };
  });

  return {
    props: { newItems },
  };
}

export default Main;
