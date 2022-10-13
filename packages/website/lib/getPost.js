import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter';

import { extname,relative, resolve, parse }  from 'path';
const fsPromises = fs.promises;

const postsDirectory = join(process.cwd(), '_posts');

async function getFiles(dir) {
  let dirents = await fsPromises.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

export async function getPostSlugs() {

  let files = await getFiles(postsDirectory);

  const filesFiltered = files.filter(el => extname(el) === '.mdx');

 const results = filesFiltered.map(f => {

  const fileContents = fs.readFileSync(f, 'utf8');
  const { data, content } = matter(fileContents);

  return {slug: data.slug, path: f};
 });
 return results;
}


export function getPostByPath(path, fields = []) {

  //const realSlug = slug.replace(/\.mdx$/, '')
 // const fullPath = foundSlug.path // join(postsDirectory, `${slug.joi}.mdx`);
  const fileContents = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(fileContents);

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    /*if (field === 'slug') {
      items[field] = realSlug
    }*/
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export async function getAllPosts(fields = []) {

  const slugs = await getPostSlugs();
  console.log("ssdslluugggs", slugs);
  const posts = slugs
    .map((slug) => getPostByPath(slug.path, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}