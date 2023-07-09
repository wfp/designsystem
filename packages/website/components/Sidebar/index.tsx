import React, { useState } from 'react';

import {
  Link,
  Wrapper,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHome,
  Tabs,
  Tab,
  // Story,
} from '@un/react';
import { MDXRemote } from 'next-mdx-remote';
import NextLink from 'next/link';
import styles from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import slugify from 'slugify';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

import components from '../Blog/Mdx';
import References from '../Blog/References';
import TableOfContent from '../Blog/References/TableOfContent';
import slugifyWithSlashes from '../../lib/slugifyWithSlashes';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { NextSeo } from 'next-seo';
import PropTypes from '../PropTypes';

interface SidebarProps {
  slug: string;
  level: number;
  split: any;
}

function TreeBranch({ slug, split, level }: SidebarProps) {
  const splitSlug = slugifyWithSlashes(slug).split('/');
  const found =
    slugify(split.name, { lower: true }) ===
    splitSlug[level - 1]; /* split.children.find(
    (e) => e.name === splitSlug[splitSlug.length - 1]
  )*/

  const [open, setOpen] = useState(level === 0 || found);

  return (
    <li
      className={`${styles[`level-${level}`]}  ${
        found ? styles.active : styles.inActive
      }  ${
        split.children.length === 0 ? styles.lastLevel : styles.hasSubLevels
      } ${
        open || split.children.length === 0
          ? styles[`level-open`]
          : styles[`level-closed`]
      }`}>
      {split?.children && (
        <>
          {split.name === 'code' ? null : (split.children.length === 0 && // Code Preview
              level > 0) ||
            split.children[0].name === 'code' ? (
            // Child level
            <NextLink
              href={`/${slugifyWithSlashes(split.path?.key)}`}
              passHref
              legacyBehavior>
              <Link
                className={styles.item}
                onMouseUp={(e: any) => e.target.blur()}>
                <div className={styles.icon} />
                {split.name}
              </Link>
            </NextLink>
          ) : split.children.length > 0 && level > 0 ? (
            // Main Level
            <span
              className={styles.sidebarTitle}
              onClick={() => setOpen(!open)}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.iconOpen}
              />
              <span className={styles.sidebarTitleText}>{split.name}</span>
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

export const createPathTree = (paths: any) => {
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

interface SidebarWrapperProps {
  content?: any;
  post: any;
  posts: any;
  propTypes: any;
  // data?: any;
}

export const CustomTab = ({ children, ...props }: any) => {
  return (
    <Tab {...props}>
      <div className={styles.tab}>{children}</div>
    </Tab>
  );
};

export default function SidebarWrapper({
  // data,
  post,
  posts,
  propTypes,
}: SidebarWrapperProps) {
  const postSplit = posts.map((p) => {
    return {
      key: 'posts/' + p.slug,
      title: p.title,
      directory: false,
    };
  });

  const split: any = createPathTree(postSplit) || [];

  const splitSidebar = split.children.find(
    (e) => e.name === post.slug.split('/')[0]
  );

  return (
    <>
      <NextSeo
        title={post.title}
        description="Digital Design System"
        openGraph={{
          url: process.env.NEXT_PUBLIC_DOMAIN,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_DOMAIN}api/og?title=${post.title}`,
              alt: 'Foto',
            },
          ],
          type: 'website',
          site_name: process.env.NEXT_PUBLIC_DOMAIN,
        }}
      />
      <Wrapper className={styles.sidebarWrapper} pageWidth="lg">
        <div className={styles.sidebar}>
          <ul className={styles.sidebarList}>
            <TreeBranch split={splitSidebar} level={0} slug={post.slug} />
          </ul>
        </div>

        <div className={styles.content}>
          <Breadcrumb className={styles.breadcrumb}>
            <BreadcrumbItem>
              <Link href="/#">
                <BreadcrumbHome />
              </Link>
            </BreadcrumbItem>
            {post.slug
              .split('/')
              .slice(0, -1)
              .map((s, i) => {
                const overviewLink = `${s}/Overview`;
                if (posts.find((p) => p.slug.includes(overviewLink))) {
                  return (
                    <BreadcrumbItem key={i} href="#">
                      <NextLink href={`${slugifyWithSlashes(overviewLink)}`}>
                        {s}
                      </NextLink>
                    </BreadcrumbItem>
                  );
                }
                return (
                  <BreadcrumbItem key={i} href="#" disableLink>
                    {s}
                  </BreadcrumbItem>
                );
              })}
          </Breadcrumb>

          {post.subtitle && (
            <Text kind="story-subtitle" /*className={styles.subTitle}*/>
              {post.subtitle}
            </Text>
          )}
          <Text kind="story-title" /*className={styles.title}*/>
            {post?.title}
          </Text>

          <Tabs>
            <NextLink
              href={`${slugifyWithSlashes(post.slug).replace('/code', '')}`}>
              <Tab label={`Usage`} components={{ Tab }}></Tab>
            </NextLink>
            <NextLink href={`${slugifyWithSlashes(post.slug)}/code`}>
              <Tab label={`Code`} components={{ Tab }}></Tab>
            </NextLink>
          </Tabs>

          <div className={styles.excerpt}>
            <MDXRemote {...post.mdxExcerptSource} components={components} />
          </div>

          {post.mainComponent && <PropTypes propTypes={propTypes} {...post} />}

          {/* <Story>
            <TinaMarkdown components={components} content={data?.post?.body} />
          </Story> */}
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
          <TableOfContent headings={post.headings} />
          <References post={post} />
        </div>
      </Wrapper>
    </>
  );
}
