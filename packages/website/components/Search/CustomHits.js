import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
  Highlight,
  Snippet,
  connectStateResults,
} from 'react-instantsearch-dom';
import styles from './customHits.module.scss';

function Hit({ hit }) {
  return (
    <Link href={`/${process.env.NEXT_PUBLIC_BLOG_FOLDER}/${hit.slug}`}>
      <a className={styles.hit}>
        <h4>
          <Highlight attribute="title" hit={hit} />
        </h4>
        <p>
          <Snippet attribute="content" hit={hit} />
        </p>
      </a>
    </Link>
  );
}

function Hits({ searchState, searchResults, focus }) {
  const { t } = useTranslation('website');

  const validQuery = searchState.query?.length >= 3; // 3 is the minimum query length

  return (
    <div className={styles.hits}>
      <div className={styles.results}>
        {searchResults?.hits.length === 0 && validQuery && focus && (
          <p className={styles.noResults}>{t('Keine Ergebnisse gefunden')}</p>
        )}

        {!validQuery && focus && (
          <p className={styles.noResults}>
            {t('Tippe um Ergebnisse anzuzeigen...')}
          </p>
        )}

        {searchResults?.hits.length > 0 && validQuery && (
          <>
            {searchResults.hits.map((hit, index) => (
              <Hit key={index} hit={hit} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default connectStateResults(Hits);
