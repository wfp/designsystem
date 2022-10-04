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
    console.error(json.errors[0].extensions.debug);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getArticles() {
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
      image {
        title
        image { publicUrl }
      }
    }
  }`);
  return data.posts;
}

export async function getArticle(slug) {
  const data = await fetchAPI(
    `query post($slug: String!) {
    post(where: {slug: $slug}) {
      id
      title
      slug
      subtitle
      content
      excerpt
      image {
        title
        image { publicUrl }
      }
      detailImage {
        title
        image { publicUrl }
      }
      publishDate
    }
  }`,
    { variables: { slug } }
  );
  return data.post;
}

export async function getArticleTranslation(id) {
  const data = await fetchAPI(
    `query translation($key: String!) {
      translation(where: {key:  $key}) {
        key
        translationEntry {
          language {
              name
          }
          text
        }
      }
    }`,
    { variables: { key: `post-${id}` } }
  );
  return data.translation;
}

export async function getImage(id) {
  const data = await fetchAPI(
    `query image($id: ID!) {
      image(where: {id:  $id}) {
        id
        title
        image {
           filename
           publicUrl
           mimetype
        }
      }
    }`,
    { variables: { id } }
  );
  return data.image;
}

export async function getCategories() {
  const data = await fetchAPI(`query tags {
    tags {
      id
      name
    }
  }`);
  return data.tags;
}

export async function getCategory(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        id
        title
        content
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
      }
    }
  }
`,
    { variables: { id } }
  );
  return data.category;
}
