import { faFigma, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, List, ListItem } from '@wfp/react';
import React from 'react';
import styles from './tableOfContent.module.scss';

export default function References({ post }: any) {
  if (!post.figma && !post.storybook && !post.github) return null;
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
        {post.github && (
          <ListItem>
            <Link href={post.github} target="_blank">
              GitHub{' '}
              <FontAwesomeIcon icon={faGithub} className={styles.github} />
            </Link>
          </ListItem>
        )}
        {post.storybook && (
          <ListItem>
            <Link
              href={`http://localhost:9001/?path=/story/${
                post.storybook == true
                  ? post.slug.replace(/[/]/g, '-')
                  : post.storybook
              }`}
              target="_blank">
              Storybook{' '}
              <FontAwesomeIcon icon={faCode} className={styles.storybook} />
            </Link>
          </ListItem>
        )}

        {post.npm && (
          <ListItem>
            <Link
              href={`https://www.npmjs.com/package/${post.npm}`}
              target="_blank">
              npm <FontAwesomeIcon icon={faNpm} className={styles.npm} />
            </Link>
          </ListItem>
        )}
      </List>
    </div>
  );
}
