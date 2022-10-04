// next-i18next.config.js
const LocizeBackend = require("i18next-locize-backend/cjs");
const httpBackend = require("i18next-http-backend");
const axios = require("axios");

const isBrowser = typeof window !== "undefined";

const locales = ["en", "fr", "de" /*"it"*/];
/*const locizeOptions = {
  projectId: "63b1dcf8-5fc4-40d5-a80a-22844c993ae7",
  apiKey: "0a48781f-1d27-4c66-a50a-11dff66062e4",
  version: "latest",
};
*/

const loadResources = async (language, namespace, url, options, payload) => {
  const response = await axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      query: `query translations($namespace: String!) {
        translations(where: {namespace: {equals: $namespace}}) {
          key
          translationEntry {
            language {
                name
            }
            text
          }
        }
      }`,
      variables: { namespace: namespace },
    },
  });

  const results = {};
  if (response.data.data.translations) {
    response.data.data.translations.forEach((element) => {
      if (element.translationEntry) {
        const languageTrans = element.translationEntry.find(
          (e) => e.language?.name === language
        );
        results[element.key] = languageTrans?.text;
      }
    });
  }
  return results; // { [language]: { posts: { results } } };
};

const updateResources = async (language, namespace, url, options, payload) => {
  console.log("updateRsss", language, namespace, url, options, payload);

  // Find Translation
  const existingTranslation = await axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      query: `query translation($key: String!) {
        translation(where: {key:$key}) {
          key
          id
          translationEntry {
            language {
                name
            }
            text
          }
        }
      }`,
      variables: { key: Object.values(payload)[0] },
    },
  });

  const content = existingTranslation.data.data.translation;

  var today = new Date();

  if (content === null) {
    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/graphql`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `mutation createTranslation($key: String! $changeDate: DateTime!) {
        createTranslation(data: {
          key: $key,
          namespace: "website",
          changeDate: $changeDate
        }) {
          key
        }
      }`,
        variables: {
          key: Object.values(payload)[0],
          changeDate: today.toISOString(),
        },
      },
    });

    return response.data;
  }
  if (content.translationEntry.length === 1) {
    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/graphql`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `mutation ($data: TranslationUpdateInput!, $id: ID!) {
          item: updateTranslation(where: {id: $id}, data: $data) {
            id
            key
            namespace
          }
        }
        `,
        variables: {
          data: {
            changeDate: today.toISOString(),
          },
          id: content.id,
        },
      },
    });

    console.log(
      "updateexistingTranslationexistingTranslationexistingTranslation",
      response
    );
    return response.data;
  }
};

const backendOptions = {
  addPath: "{{lng}}|{{ns}}|add",
  loadPath: "{{lng}}|{{ns}}",
  request: (options, url, payload, callback) => {
    try {
      const [lng, ns, add] = url.split("|");
      console.log("uppdddate", lng, ns, url);
      if (add === "add") {
        updateResources(lng, ns, url, options, payload).then((response) => {
          callback(null, {
            data: JSON.stringify(response),
            status: 200,
          });
        });
      } else {
        loadResources(lng, ns, url, options, payload).then((response) => {
          callback(null, {
            data: JSON.stringify(response),
            status: 200,
          });
        });
      }
    } catch (e) {
      console.error(e);
      callback(null, {
        status: 500,
      });
    }
  },
};

module.exports = {
  // debug: true,
  i18n: {
    defaultLocale: "de",
    locales,
  },
  debug: true,
  backend: backendOptions, //backendOptions,
  //locizeLastUsed: locizeOptions,
  serializeConfig: false,

  //reloadOnPrerender: true,
  ns: ["common", "posts", "website"],
  //use: [Backend],
  serializeConfig: false,

  use: isBrowser
    ? [
        httpBackend,
        /*LocizeBackend,
        require("locize").locizePlugin,
        require("locize-lastused/cjs"),*/
      ]
    : [httpBackend], // do not use locize-lastused on production
  saveMissing: process.env.NODE_ENV === "production" ? false : true, // do not set saveMissing to true for production and also not when using the chained backend
  //appendNamespaceToMissingKey: true,
};
