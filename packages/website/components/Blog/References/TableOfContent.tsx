import { Link, List, ListItem } from '@un/react';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import { createSlug } from '../Mdx/Headings';
import styles from './tableOfContent.module.scss';

const Heading2 = ({ children }) => {
  const idText = createSlug(children);
  return (
    <ListItem className={styles.heading2}>
      <Link href={`#${idText}`}>{children}</Link>
    </ListItem>
  );
};

const MDXComponents = {
  // ...
  h2: Heading2,
  h3: Heading2,
  /*wrapper: ({ components, ...props }) => (
    <MarkdownWrapper components={components} {...props} />
  ),*/
  // ...
};

export default function TableOfContent({ content }) {
  console.log('content', content);
  if (content.length === 0) return null;
  return (
    <div className={styles.tableOfContent}>
      <h3>On this page</h3>
      <List className={styles.tableOfContentList} kind="simple">
        <MDXRemote {...content} components={MDXComponents} />
      </List>
    </div>
  );
}
