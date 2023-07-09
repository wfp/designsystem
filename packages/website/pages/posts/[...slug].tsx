import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/Blog/Layout';
import { getAllPosts } from '../../lib/getPost';
import Sidebar from '../../components/Sidebar';
import slugify from 'slugify';
import getPostContent from '../../components/Post/getPostContent';

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
  const postContent = await getPostContent(params);
  return postContent;
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
