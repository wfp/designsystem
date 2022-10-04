import React from 'react';
import Link from 'next/link';
import styles from './card.module.scss';
import classnames from 'classnames';
import MultimediaElement from '../../Multimedia';
import { Card } from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';

const CardWrapper = ({ article, multimedia, detail = 'posts' }) => {
  const src = article?.ogImage?.url;
  if (!src) return null;

  const srcElement = require(`../../../_posts/${src}`);
  return (
    <Link href={`/${detail}/${article.slug}`}>
      <a className={styles.card}>
        {/*multimedia ? (
          multimedia
        ) : (
          <MultimediaElement src={src} className={styles.multimedia} />
        )*/}
        {src && (
          <div className={styles.multimedia}>
            <Image src={srcElement} sizes={'(max-width: 710px) 40vw, 300px'} />
          </div>
        )}

        <span className={styles.body}>
          <p className={styles.title}>{article.title}</p>
          {(article.excerpt || article.subtitle) && (
            <p className={styles.subTitle}>
              {article.excerpt ? article.excerpt : article.subtitle}
            </p>
          )}
          {/*<Link href={`/${detail}/${article.slug}`}>
            <a className={styles.moreLink}>
              Continue reading <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Link>*/}
        </span>
      </a>
    </Link>
  );
};

export default CardWrapper;
