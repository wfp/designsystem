import { Link, List, ListItem } from '@un/react';
import React from 'react';
import { createSlug } from '../Mdx/Headings';
import styles from './tableOfContent.module.scss';

const Heading2 = ({ value }: any) => {
  const idText = createSlug(value);
  return (
    <ListItem className={styles.heading2}>
      <Link href={`#${idText}`}>{value}</Link>
    </ListItem>
  );
};

export default function TableOfContent({ headings = [] }: any) {
  if (headings.length === 0) return null;
  return (
    <div className={styles.tableOfContent}>
      <h3>On this page</h3>
      <List className={styles.tableOfContentList} kind="simple">
        {headings.map((e, i) => (
          <Heading2 key={i} {...e} />
        ))}
      </List>
    </div>
  );
}
