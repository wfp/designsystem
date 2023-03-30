/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

const { getAllPosts } = require("./getPost");


async function getAllBlogPosts() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
}

function transformPostsToSearchObjects(posts) {
  return posts.map((post) => {
    return {
      objectID: post.id,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      //topicsCollection: { items: post.topicsCollection.items },
      date: post.date,
      content: post.content,
      // readingTime: post.readingTime,
    };
  });
}

(async function () {
  dotenv.config();

  try {
    const posts = await getAllBlogPosts();

    const transformed = transformPostsToSearchObjects(posts);

    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    // initialize the index with your index name
    const index = client.initIndex("anabox-smart-website");


    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed);



    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n"
      )}`
    );
  } catch (error) {
    console.log(error);
  }
})();
