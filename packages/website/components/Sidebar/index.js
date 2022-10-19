import React from 'react';

import {
  Button,
  Link,
  Sidebar,
  SidebarHeader,
  Item,
  Search,
  Wrapper,
} from '@un/react';
import Accordion from '../Accordion';
import { MDXRemote } from 'next-mdx-remote';
import NextLink from 'next/link';
import styles from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faDash,
  faMinus,
} from '@fortawesome/pro-regular-svg-icons';

function TreeBranch({ split, level }) {
  return (
    <li className={styles[`level-${level}`]}>
      {split?.children && (
        <>
          {level > 1 ? (
            <NextLink href={`/${split.path?.key}`}>
              <Link className={styles.item}>
                <FontAwesomeIcon icon={faMinus} className={styles.icon} />

                {split.path?.title ? split.path?.title : split.name}
              </Link>
            </NextLink>
          ) : level === 1 ? (
            <span className={styles.sidebarTitle}>
              {split.path?.title ? split.path?.title : split.name}
            </span>
          ) : null}
          {split.children.map((c) => (
            <ul>
              <TreeBranch split={c} level={level + 1} />
            </ul>
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
          path: index === array.length - 1 ? path : null,
        });
      }

      return currentLevel[name];
    }, level);
  });

  const finalArray = level['<result>'];
  return finalArray.length > 0 ? finalArray[0] : null;
};

export default function SidebarWrapper({ content, post, posts }) {
  console.log('posts', posts);

  const postSplit = posts.map((p) => {
    return {
      key: 'posts/' + p.slug,
      title: p.title,
      directory: false,
    };
  });

  const split = createPathTree(postSplit);

  console.log('postssplit', posts, split);

  return (
    <Wrapper className={styles.sidebarWrapper} pageWidth="lg">
      <div className={styles.sidebar}>
        <Search id="search22" />

        <ul className={styles.sidebarList}>
          <TreeBranch split={split} level={0} />
        </ul>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{post.title}</h1>
        {post.subtitle && <h2 className={styles.subTitle}>{post.subtitle}</h2>}

        {content}
      </div>
    </Wrapper>
  );
}
