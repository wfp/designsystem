import React from 'react';
import Card from '../Card';
import styles from './article.module.scss';
//import { Search } from "@un/react";
import Link from 'next/link';

import { Card as CardWfp, Hero } from '@un/react';

import Search from '../../Search';
import { useTranslation } from 'next-i18next';
import { getCategories } from '../../../lib/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrochip,
  faPaperPlane,
  faScaleBalanced,
} from '@fortawesome/pro-regular-svg-icons';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const links = [
  { href: '#', label: 'Einrichten' },
  { href: '#', label: 'App Download' },
  { href: '#', label: 'Zurücksetzen' },
];

const Articles = ({ articles }) => {
  // if (!categories) return null;
  const categories = [{ name: 'common' }];

  // const designers = articles.find((a) => a.slug === 'core/designers');

  //  const src = designers?.ogImage?.url;
  //if (!src) return null;

  /*const srcElement = dynamic(() => import(pathInclude), {
    suspense: false,
  });*/

  const ImageOverride = ({ className }) => (
    <div className={className}>
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
              <FontAwesomeIcon icon={faScaleBalanced} /> {category.name}
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
