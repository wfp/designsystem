import React from 'react';
import { faLink } from '@fortawesome/pro-regular-svg-icons';
import styles from './headings.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var convertToSlug = function (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
  var to = 'aaaaaeeeeeiiiiooooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export function createSlug(children) {
  return children && typeof children === 'string'
    ? convertToSlug(children.substring(0, 24))
    : 'none';
}

export default function Heading({ level, ...other }) {
  const CustomTag = level;
  const anchorLink = createSlug(other.children);

  return (
    <CustomTag {...other} id={anchorLink} className={styles.link}>
      <a className={styles.linkHandler} href={`#${anchorLink}`}>
        <FontAwesomeIcon icon={faLink} />
      </a>
      <span>{other.children}</span>
    </CustomTag>
  );
}

export function H1(props) {
  return <Heading level="h1" {...props} />;
}

export function H2(props) {
  return <Heading level="h2" {...props} />;
}

export function H3(props) {
  return <Heading level="h3" {...props} />;
}

export function H4(props) {
  return <Heading level="h4" {...props} />;
}

export function H5(props) {
  return <Heading level="h5" {...props} />;
}
