import React from 'react';
import styles from './styles.module.scss';
import { createPathTree } from '../../../Sidebar';
import slugifyWithSlashes from '../../../../lib/slugifyWithSlashes';
import Link from 'next/link';

import PropTypes from '../../../PropTypes';

function ComponentPreview({ component, componentsList }: any) {
  const componentData = componentsList.find(
    (e) => e.slug === component.path.slug
  );

  console.log('search', componentData, component.path);

  if (!componentData) return null;

  return (
    <PropTypes
      //propTypes={propTypes}
      smallPreview
      {...componentData}
    />
  );
}

export default function ComponentsList(props: any) {
  const componentsList = JSON.parse(props.components);

  const postSplit = componentsList.map((p) => {
    return {
      key: 'posts/' + p.slug,
      title: p.title,
      slug: p.slug,
      directory: false,
    };
  });

  const split = createPathTree(postSplit).children.find(
    (p) => p.name === 'Components'
  );

  console.log('split', split);
  return (
    <div className={styles.componentsList}>
      {split.children.map((p, a) => {
        if (p.name === 'Overview') return null;
        return (
          <div key={a}>
            <h4>{p.name}</h4>

            <div className={styles.componentsSubList}>
              {p.children.map((c, i) => {
                return (
                  <Link
                    className={styles.component}
                    key={i}
                    href={'/' + slugifyWithSlashes(c.path.key)}>
                    <div className={styles.name}>{c.name}</div>
                    <ComponentPreview
                      component={c}
                      componentsList={componentsList}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
