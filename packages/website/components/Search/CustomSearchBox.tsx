import { Search } from '@un/react';
import styles from './search.module.scss';

import { useSearchBox } from 'react-instantsearch-hooks-web';

function SearchBox(props: any) {
  const { refine } = useSearchBox(props);

  return (
    <form action="" role="search">
      <Search
        id="algolia_search"
        className={props.kind === 'main' ? styles.mainSearch : styles.search}
        kind={props.kind}
        placeholder="Search topic..."
        /* onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}*/
        onChange={(i, e: any) => refine(e?.currentTarget?.value)}
      />
    </form>
  );
}

export default SearchBox;
