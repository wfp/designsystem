import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
//import Container from '../../components/container';
//import PostBody from '../../components/post-body';
//import Header from '../../components/header';
//import PostHeader from '../../components/post-header';
import Layout from '../../components/Blog/Layout';
import { getPostBySlug, getAllPosts } from '../../lib/getPost';
//import PostTitle from '../../components/post-title';
import styles from './article.module.scss';
import Head from 'next/head';
import components from '../../components/Blog/Mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Wrapper } from '@un/react';
import Image from 'next/image';
import rehypeImgSize from 'rehype-img-size';
//import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Wrapper pageWidth="md" className={styles.content}>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
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
              <h1 className={styles.title}>{post.title}</h1>
              {post.subtitle && (
                <h2 className={styles.subTitle}>{post.subtitle}</h2>
              )}
              <MDXRemote {...post.mdxSource} components={components} />
            </article>
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = post.content; //await markdownToHtml(post.content || '');

  const mdxSource = await serialize(post.content, {
    components,

    mdxOptions: {
      rehypePlugins: [
        [
          rehypeImgSize,
          {
            dir: '_posts/',
          },
        ],
      ],
    },
  });

  return {
    props: {
      post: {
        ...post,
        content,
        mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);

  console.log('posts', posts);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.replace('/', '-'),
        },
      };
    }),
    fallback: false,
  };
}
