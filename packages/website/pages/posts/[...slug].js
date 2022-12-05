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
import components from '../../components/Blog/Mdx';
import Sidebar from '../../components/Sidebar';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Wrapper } from '@un/react';
import Image from 'next/image';
import rehypeImgSize from 'rehype-img-size';
import LinkBack from '../../components/LinkBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';

export default function Post({ post, posts, morePosts, preview }) {
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

            <Sidebar
              posts={posts}
              post={post}
              content={
                <>
                  <MDXRemote {...post.mdxSource} components={components} />
                </>
              }
            />
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
  const foundSlug = slugs.find((f) => f.slug === params.slug.join('/'));

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
  ]);
  const content = post.content;

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
      posts,
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

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split('/'),
        },
      };
    }),
    fallback: false,
  };
}
