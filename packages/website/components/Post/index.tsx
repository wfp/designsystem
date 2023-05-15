import React from 'react';
import { getAllPosts, getPostByPath, getPostSlugs } from '../../lib/getPost';
import { dbConnection } from '../../lib/databaseConnection';

export default async function Post() {
  return <div>Post Content</div>;
}
