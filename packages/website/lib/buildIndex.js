const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");
const fetch = require("node-fetch");

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

async function getAllBlogPosts() {
  const data = await fetchAPI(`query {
        posts(orderBy: {publishDate: desc}) {
          id
          title
          slug
          subtitle
          excerpt
          publishDate
          tags {
            id
            name
          }
          content
          image {
            title
            image { publicUrl }
          }
        }
      }`);
  return data.posts;
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
