import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/Blog/Layout';
import { getPostByPath, getAllPosts, getPostSlugs } from '../../lib/getPost';
import Sidebar from '../../components/Sidebar';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeCode from './rehypeCode';
import rehypeImgSize from 'rehype-img-size';
import rehypeFigmaImage from './rehypeFigmaImage';
import rehypeToC from './rehypeToC';
import remarkGfm from 'remark-gfm';
import slugify from 'slugify';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

interface Props {
  post?: {
    excerpt?: string;
    content?: object;
    mainComponent?: string;
    slug?: string;
  };
  posts?: any;
  morePosts: any;
  preview: any;
  propTypes: any;
}

export default function Post({ post, posts, preview, propTypes }: Props) {
  const router = useRouter();

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

  console.log('params.slug', params.slug);
  const slugs = await getPostSlugs();
  const foundSlug = params.slug
    ? slugs.find(
        (f) =>
          f.slug
            .split('/')
            .map((e) => slugify(e, { lower: true }))
            .join('/') === params.slug.join('/')
      )
    : null;

  const post: any = foundSlug?.path
    ? getPostByPath(foundSlug.path, [
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
      ])
    : {};
  const content = post?.content || '';

  const mdxSource = await serialize(post.content, {
    //components,
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
    //components,
    mdxOptions: {
      rehypePlugins: [rehypeToC],
    },
  });

  const mdxExcerptSource = await serialize(post.excerpt, {
    // components,
  });

  let propTypes = null;

  if (post.mainComponent) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const file = require(`../../types/src/components/${post.mainComponent}/${post.mainComponent}.json`);

    propTypes = file;

    console.log('propTypes', file);
  }

  console.log('post', post);

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
      const slug = post.slug.split('/').map((e) => slugify(e, { lower: true }));
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
