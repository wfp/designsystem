import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
//import Container from '../../components/container';
//import PostBody from '../../components/post-body';
//import Header from '../../components/header';
//import PostHeader from '../../components/post-header';
import Layout from '../../components/Blog/Layout';
import { getPostByPath, getAllPosts, getPostSlugs } from '../../lib/getPost';
//import PostTitle from '../../components/post-title';
import styles from './article.module.scss';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeCode from './rehypeCode';
import { parse } from 'react-docgen-typescript';
import fs from 'fs';
import {
  Breadcrumb,
  BreadcrumbHome,
  BreadcrumbItem,
  Link,
  Wrapper,
} from '@un/react';
import Image from 'next/image';
import rehypeImgSize from 'rehype-img-size';
import rehypeFigmaImage from './rehypeFigmaImage';
import rehypeToC from './rehypeToC';
import LinkBack from '../../components/LinkBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import remarkGfm from 'remark-gfm';
import components from '../../components/Blog/Mdx';
import slugify from 'slugify';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import path from 'path';

export default function Post({ post, posts, propTypes, morePosts, preview }) {
  const router = useRouter();
  console.log('propTypes ', propTypes);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article>
            {/* {!router?.query?.app && (
              <LinkBack
                href={process.env.NEXT_PUBLIC_BLOG_FOLDER}
                //hasBack={hasBack}
              >
                <a className={styles.returnLinkTop}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to overview
                </a>
              </LinkBack>
            )} */}

            {/*<Head>
                <title>{post.title}</title> 
                <meta property="og:image" content={post.ogImage?.url} />
              </Head>*/}
            {/*<PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />*/}

            <Sidebar posts={posts} post={post} propTypes={propTypes} />
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts([
    'category',
    'title',
    'date',
    'slug',
    'intro',
    'subtitle',
    'excerpt',
    'author',
    'ogImage',
    'coverImage',
  ]);

  const slugs = await getPostSlugs();
  const foundSlug = slugs.find(
    (f) =>
      f.slug
        .split('/')
        .map((e) => slugify(e))
        .join('/') === params.slug.join('/')
  );

  const post = getPostByPath(foundSlug.path, [
    'title',
    'date',
    'slug',
    'intro',
    'subtitle',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'mainComponent',
    'defaultProps',
    'sampleCode',
    'excerpt',
    'figma',
    'github',
    'npm',
    'storybook',
  ]);
  const content = post.content;

  const mdxSource = await serialize(post.content, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta, remarkGfm],
      rehypePlugins: [
        rehypeCode,
        rehypeFigmaImage,
        [
          rehypeImgSize,
          {
            dir: '_posts/',
          },
        ],
      ],
    },
  });

  const mdxToC = await serialize(post.content, {
    components,
    mdxOptions: {
      rehypePlugins: [rehypeToC],
    },
  });

  const mdxExcerptSource = await serialize(post.excerpt, {
    components,
  });

  var propTypes = null;

  if (post.mainComponent) {
    var pathToModule = path.dirname(require.resolve('@un/react/README.md'));
    const componentPath = `${pathToModule}/src/components/${post.mainComponent}/${post.mainComponent}.tsx`;
    console.log('pathToModule', pathToModule, componentPath);
    const options = {
      savePropValueAsString: true,
      propFilter: (prop, component) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            (declaration) => {
              return !declaration.fileName.includes('node_modules');
            }
          );

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      },
    };

    propTypes = JSON.parse(JSON.stringify(parse(componentPath, options)));

    console.log('propTypes', propTypes[0].props.defaultValue);
  }

  return {
    props: {
      propTypes: propTypes,
      posts,
      post: {
        ...post,
        content,
        mdxSource,
        mdxToC,
        mdxExcerptSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      const slug = post.slug.split('/').map((e) => slugify(e));
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
