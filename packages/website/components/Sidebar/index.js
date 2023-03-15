import React, { useState } from 'react';

import {
  Button,
  Link,
  Sidebar,
  SidebarHeader,
  Item,
  Search,
  Wrapper,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHome,
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

import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

import components from '../Blog/Mdx';
import References from '../Blog/References';
import TableOfContent from '../Blog/References/TableOfContent';

function TreeBranch({ slug, split, level }) {
  const splitSlug = slug.split('/');
  const found = split.children.find(
    (e) => e.name === splitSlug[splitSlug.length - 1]
  );

  const [open, setOpen] = useState(level === 0 || found);
  return (
    <li
      className={`${styles[`level-${level}`]} ${
        open ? styles[`level-open`] : styles[`level-closed`]
      }`}>
      {split?.children && (
        <>
          {level > 1 ? (
            <NextLink href={`/${split.path?.key}`} legacyBehavior>
              <Link className={styles.item} href={`/${split.path?.key}`}>
                <FontAwesomeIcon icon={faMinus} className={styles.icon} />

                {split.path?.title ? split.path?.title : split.name}
              </Link>
            </NextLink>
          ) : level === 1 ? (
            <span
              className={styles.sidebarTitle}
              onClick={() => setOpen(!open)}>
              <span className={styles.sidebarTitleText}>
                {split.path?.title ? split.path?.title : split.name}
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.iconOpen}
              />
            </span>
          ) : null}
          {split.children.map((c, i) => (
            <ul key={i}>
              <TreeBranch split={c} level={level + 1} slug={slug} />
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
  const postSplit = posts.map((p) => {
    return {
      key: 'posts/' + p.slug,
      title: p.title,
      directory: false,
    };
  });

  const split = createPathTree(postSplit);

  return (
    <Wrapper className={styles.sidebarWrapper} pageWidth="xl">
      <div className={styles.sidebar}>
        <ul className={styles.sidebarList}>
          <TreeBranch split={split} level={0} slug={post.slug} />
        </ul>
      </div>

      <div className={styles.content}>
        <Breadcrumb className={styles.breadcrumb}>
          <BreadcrumbItem>
            <Link href="/#">
              <BreadcrumbHome />
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
          <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
        </Breadcrumb>

        {post.subtitle && (
          <Text kind="subtitle" /*className={styles.subTitle}*/>
            {post.subtitle}
          </Text>
        )}
        <Text kind="title" /*className={styles.title}*/>{post.title}</Text>

        <div className={styles.excerpt}>
          <MDXRemote {...post.mdxExcerptSource} components={components} />
        </div>

        <MDXRemote {...post.mdxSource} components={components} />

        <Link
          href={`https://github.com/un-core/designsystem/tree/content/website-content/packages/website/${
            post.path.split('packages/website/')[1]
          }`}
          target="_blank"
          className={styles.editOnGitHub}>
          Edit this page on GitHub <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className={styles.sidebarAddition}>
        <TableOfContent content={post.mdxToC} />
        <References post={post} />
      </div>
    </Wrapper>
  );
}
