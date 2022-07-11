// .components/Search/index.js

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import styles from "./styles.module.scss";

import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";
import { useState } from "react";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function Search() {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName="anabox-smart-website"
      >
        <CustomSearchBox setFocus={setFocus} />
        <CustomHits focus={focus} />
      </InstantSearch>
    </>
  );
}
