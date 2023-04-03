// .components/Search/index.js

import algoliasearch from 'algoliasearch/lite';
//import { InstantSearch } from 'react-instantsearch-dom';

import CustomSearchBox from './CustomSearchBox';
import CustomHits from './CustomHits';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

import { InstantSearch } from 'react-instantsearch-hooks-web';
import { Search } from '@un/react';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export const useOutsideAlerter = ({ ref, setOpen }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export const Portal = (props: any) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current = document.body; //document.querySelector('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`${styles.overlay} ${
            props.open ? styles.open : styles.closed
          }`}>
          <div className={styles.overlayBackground} />
          <div className={styles.overlayContent}>{props.children}</div>
        </div>,
        ref.current
      )
    : null;
};

export default function SearchWrapper() {
  const [focus] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOutsideAlerter({ ref, setOpen });

  return (
    <>
      <Search
        onClick={() => setOpen(true)}
        className={styles.search}
        placeholder="Search topic..."
      />
      <Portal open={open}>
        <div ref={ref}>
          <InstantSearch indexName="ui-docs" searchClient={searchClient}>
            <CustomSearchBox /*setFocus={setFocus} */ open={open} />
            <CustomHits focus={focus} setOpen={setOpen} />
          </InstantSearch>
        </div>
      </Portal>
    </>
  );
}
