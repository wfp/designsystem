import algoliasearch from 'algoliasearch/lite';
import { getAllPosts } from '../../lib/getPost';

async function getAllBlogPosts() {
  const data = await getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'author',
    'ogImage',
    'coverImage',
    'content',
  ]);
  return data;
}

function transformPostsToSearchObjects(posts: any) {
  return posts.map((post) => {
    return {
      objectID: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      date: post.date,
      content: post.content,
    };
  });
}

export default async function issues() {
  try {
    (async function () {
      try {
        const posts = await getAllBlogPosts();
        const transformed = transformPostsToSearchObjects(posts);

        // initialize the client with your environment variables
        const client = algoliasearch(
          process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
          process.env.ALGOLIA_SEARCH_ADMIN_KEY
        );

        // initialize the index with your index name
        const index: any = client.initIndex('ui-docs');

        // save the objects!
        const algoliaResponse = await index.saveObjects(transformed);

        // check the output of the response in the console
        console.log(
          `🎉 Sucessfully added ${
            algoliaResponse.objectIDs.length
          } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
            '\n'
          )}`
        );
        return posts;
      } catch (error) {
        console.log(error);
      }
    })();
  } catch (error) {
    console.log(error);
    return error.responseText;
    //res.status(200).json(error.responseText);
  }
}
