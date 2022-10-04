import React from 'react';
import Articles from '../components/Blog/Articles';
import Layout from '../components/Blog/Layout';
import { Wrapper } from '@un/react';
import { getAllPosts } from '../lib/getPost';
import styles from './index.module.scss';

const Posts = ({ articles }) => {
  return (
    <Layout>
      <Wrapper pageWidth="md">
        <Articles articles={articles} />
      </Wrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const articles =
    (await getAllPosts([
      'title',
      'date',
      'slug',
      'excerpt',
      'author',
      'ogImage',
      'coverImage',
      'content',
    ])) || [];

  return {
    props: { articles },
  };
}

export default Posts;
