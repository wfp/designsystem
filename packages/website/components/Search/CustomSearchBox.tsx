import { connectSearchBox } from 'react-instantsearch-dom';
import { Search } from '@un/react';
import styles from './search.module.scss';
import { useTranslation } from 'next-i18next';

function SearchBox({ setFocus, kind, refine }) {
  const { t } = useTranslation('website');

  return (
    <form action="" role="search">
      <Search
        id="algolia_search"
        className={kind === 'main' ? styles.mainSearch : styles.search}
        kind={kind}
        type="search"
        placeholder="Search topic..."
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(i, e) => refine(e?.currentTarget?.value)}
      />
    </form>
  );
}

export default connectSearchBox(SearchBox);
