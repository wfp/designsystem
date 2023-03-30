import Link from 'next/link';

import { Highlight, Snippet, useHits } from 'react-instantsearch-hooks-web';
import slugifyWithSlashes from '../../lib/slugifyWithSlashes';
import styles from './customHits.module.scss';

function Hit({ hit, setOpen }: any) {
  console.log('hit', hit);
  return (
    <Link
      onClick={() => setOpen(false)}
      href={`/${process.env.NEXT_PUBLIC_BLOG_FOLDER}/${slugifyWithSlashes(
        hit.slug
      )}`}
      className={styles.hit}>
      <h4>
        <Highlight attribute="title" hit={hit} />
      </h4>
      <p>
        <Snippet attribute="content" hit={hit} />
      </p>
    </Link>
  );
}

function Hits(props: any) {
  const { results } = useHits();

  const validQuery = results.query?.length >= 3; // 3 is the minimum query length

  return (
    <div className={styles.hits}>
      <div className={styles.results}>
        {results?.hits.length === 0 && validQuery /*  && focus */ && (
          <p className={styles.noResults}>No results found</p>
        )}

        {!validQuery /*&& focus*/ && (
          <p className={styles.noResults}>Type to show results...</p>
        )}

        {results?.hits.length > 0 && validQuery && (
          <>
            {results.hits.map((hit, index) => (
              <Hit key={index} hit={hit} setOpen={props.setOpen} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Hits;
