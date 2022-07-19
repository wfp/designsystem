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


 //files = files.map(f => relative(postsDirectory, f));

  const filesFiltered = files.filter(el => extname(el) === '.mdx');

 const results = filesFiltered.map(f => {
  const name = parse(f).base;
  const realSlug = name.replace(/\.mdx$/, '');

  const folders = f.split('/');
  const folder  = folders[folders.length-2];

   return relative(postsDirectory, f); //{ url: f, realSlug, slug: name, folder }
 });
 return results;

}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug.replace("-", "/")}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents);

  console.log("ddsddsad", data, content);

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
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
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}