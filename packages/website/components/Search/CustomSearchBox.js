import { connectSearchBox } from 'react-instantsearch-dom';
import { Search } from '@un/react';
import styles from './search.module.scss';
import { useTranslation } from 'next-i18next';

function SearchBox({ setFocus, refine }) {
  const { t } = useTranslation('website');

  return (
    <form action="" role="search">
      <Search
        id="algolia_search"
        className={styles.search}
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
