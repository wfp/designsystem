import Story from '../Story';
import React from 'react';
import { List, ListItem } from '../List';
import { BlockNotification } from '../Notification';
import Table from '../Table';
import useSettings from '../../hooks/useSettings';
import Link from '../Link';
import Button from '../Button';

/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

const wrapper = (props) => <Story {...props} />;

const li = (props) => {
  const kind =
    typeof props.children === 'string' ? props.children.substring(0, 1) : '';

  if (kind === '✓' || kind === '✗')
    return (
      <ListItem kind={kind === '✓' ? 'checkmark' : 'cross'} {...props}>
        {props.children.substring(1, props.children.length)}
      </ListItem>
    );

  return <li {...props}>{props.children}</li>;
};

const ul = ({ children, ...other }) => {
  return (
    <List {...other} kind="bullets">
      {children}
    </List>
  );
};

const ol = ({ children, ...other }) => {
  return (
    <List {...other} kind="ordered">
      {children}
    </List>
  );
};

const h1 = (props) => {
  return <h1 {...props}>{props.children}</h1>;
};

const h2 = (props) => {
  return <h2 {...props}>{props.children}</h2>;
};

const h3 = (props) => {
  return <h3 {...props}>{props.children}</h3>;
};

const h4 = (props) => {
  return <h4 {...props}>{props.children}</h4>;
};

const h5 = (props) => {
  return <h5 {...props}>{props.children}</h5>;
};

const p = (props) => {
  return <p {...props}>{props.children}</p>;
};

const table = (props) => {
  return <Table {...props}>{props.children}</Table>;
};

const a = (props) => {
  return <Link {...props}>{props.children}</Link>;
};

const code = (props) => {
  const settings = useSettings();
  return (
    <code className={`${settings.prefix}--story__code`} {...props}>
      {props.children}
    </code>
  );
};

const pre = (props) => {
  const settings = useSettings();
  return (
    <pre className={`${settings.prefix}--story__pre`} {...props}>
      {props.children}
    </pre>
  );
};

/*const inlineCode = (props) => {
  const settings = useSettings();
  return (
    <code className={`${settings.prefix}--story__inlinecode`} {...props}>
      {props.children}
    </code>
  );
};*/

const blockquote = ({ children, ...other }) => {
  if (Array.isArray(children) && children.length >= 2 && children[0].props)
    return (
      <BlockNotification
        kind="info"
        {...other}
        subtitle={children.map((e, i) => {
          if (i > 0) return e;
        })}
        title={children[0].props.children}
      />
    );
  return <BlockNotification kind="info" {...other} subtitle={children} />;
};

/*const code = ({ children, className, ...other }) => {
    const language = className && className.split('-');
    return (
      <PureSource
        format={false}
        dark
        language={(language && language[1]) || 'plaintext'}
        code={children as string}
        {...other}
      />
    );
  };
  */

export const MdxComponents = {
  wrapper,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  li,
  a,
  ul,
  ol,
  code,
  pre,
  // inlineCode,
  table,
  blockquote,
  Button,
};

export default MdxComponents;
