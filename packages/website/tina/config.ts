import { defineConfig } from 'tinacms';
import slugifyWithSlashes from '../lib/slugifyWithSlashes';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

const LOCAL_KEY = 'tina-local-token';

export default defineConfig({
  contentApiUrlOverride: '/api/gql',
  admin: {
    auth: {
      useLocalAuth: process.env.TINA_PUBLIC_IS_LOCAL === 'true',

      // Uncomment this to use custom auth
      customAuth: true,
      authenticate: async () => {
        // Add your authentication logic here
        localStorage.setItem(LOCAL_KEY, 'some-token');
      },
      getToken: async () => {
        // Add your own getting token
        const token = localStorage.getItem(LOCAL_KEY);
        if (!token) {
          return { id_token: '' };
        }
        return { id_token: token };
      },
      getUser: async () => {
        // Add your own getting user
        // if this function returns a truthy value, the user is logged in and if it rutnrs
        if (localStorage.getItem(LOCAL_KEY)) {
          return true;
        }
        return false;
      },
      logout: async () => {
        // add your own logout logic
        localStorage.removeItem(LOCAL_KEY);
      },
    },
  },
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: '_posts',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) =>
            `/posts/${slugifyWithSlashes(document._sys.title)}`,
        },
      },
    ],
  },
});
