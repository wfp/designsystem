import { Search } from '@wfp/react';
import styles from './search.module.scss';

import { useSearchBox } from 'react-instantsearch-hooks-web';
import { useEffect, useRef } from 'react';

function SearchBox(props: any) {
  const { refine } = useSearchBox(props);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const setFocus = () => {
    console.log('focus', searchRef.current);
    searchRef.current && searchRef.current.focus();
  };

  useEffect(() => {
    if (open) {
      setFocus();
    }
  }, [props.open]);

  return (
    //<form action="" role="search">
    <Search
      id="algolia_search"
      className={props.kind === 'main' ? styles.mainSearch : styles.search}
      kind={props.kind}
      placeholder="Search topic..."
      /* onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}*/
      ref={searchRef}
      onChange={(e: any) => refine(e?.currentTarget?.value)}
    />
    // </form>
  );
}

export default SearchBox;
