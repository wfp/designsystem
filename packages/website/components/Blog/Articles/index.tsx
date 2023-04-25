import React from 'react';
import Card from '../Card';
import styles from './article.module.scss';
//import { Search } from "@wfp/react";

import Search from '../../Search';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faScaleBalanced } from '@fortawesome/pro-regular-svg-icons';

interface articlesProps {
  articles: any;
}
const Articles = ({ articles }: articlesProps) => {
  // if (!categories) return null;
  const categories = [{ name: 'common' }];

  // const designers = articles.find((a) => a.slug === 'core/designers');

  //  const src = designers?.ogImage?.url;
  //if (!src) return null;

  /*const srcElement = dynamic(() => import(pathInclude), {
    suspense: false,
  });*/

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ImageOverride = () => (
    <div>
      {/*<Image src={srcElement} sizes={'(max-width: 710px) 40vw, 300px'} />*/}
    </div>
  );

  return (
    <div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>

      {/*
      <CardWfp
        article={designers}
        key={`article__${designers.id}`}
        kind="split"
        components={{ Image: ImageOverride }}
        metadata="Climate Change, Publication"
        subTitle="How to get started as a designer"
        title="For designers"
      />

      <CardWfp
        article={designers}
        key={`article__${designers.id}`}
        kind="split"
        components={{ Image: ImageOverride }}
        metadata="Climate Change, Publication"
        subTitle="How to get started as a developer"
        title="For developers"
  />    /*.filter((article) =>
                article.tags.find((tag) => tag.id === category.id)
              )*/}
      <div className={styles.articles}>
        {categories.map((category) => (
          <>
            <h3 className={styles.subHeading}>
              {/* <FontAwesomeIcon icon={faScaleBalanced} />*/} {category.name}
            </h3>
            {articles.map((article) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </>
        ))}
      </div>
    </div>
  );
};

export default Articles;
