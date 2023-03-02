import { faFigma, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Link, List, ListItem } from '@un/react';
import React from 'react';
import styles from './tableOfContent.module.scss';

export default function References({ post }) {
  return (
    <div className={styles.tableOfContent}>
      <h3>References</h3>
      <List kind="simple" className={styles.tableOfContentList}>
        {post.figma && (
          <ListItem>
            <Link href={post.figma} target="_blank">
              Figma <FontAwesomeIcon icon={faFigma} className={styles.figma} />
            </Link>
          </ListItem>
        )}
        {post.figma && (
          <ListItem>
            <Link href={post.figma} target="_blank">
              GitHub{' '}
              <FontAwesomeIcon icon={faGithub} className={styles.github} />
            </Link>
          </ListItem>
        )}
        {post.figma && (
          <ListItem>
            <Link href={post.storybook} target="_blank">
              Storybook{' '}
              <FontAwesomeIcon icon={faCode} className={styles.storybook} />
            </Link>
          </ListItem>
        )}
      </List>
    </div>
  );
}
