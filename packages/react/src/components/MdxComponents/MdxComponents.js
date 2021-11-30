import Story from '../Story';
import React from 'react';
import { List, ListItem } from '../List';
import Blockquote from '../Blockquote';

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

const ul = (props) => {
  return (
    <List {...props} kind="bullets">
      {props.children}
    </List>
  );
};

const ol = (props) => {
  return (
    <List {...props} kind="ordered">
      {props.children}
    </List>
  );
};

const blockquote = (props) => {
  if (
    Array.isArray(props.children) &&
    props.children.length >= 2 &&
    props.children[0].props
  )
    return (
      <Blockquote {...props} title={props.children[0].props.children}>
        {props.children.map((e, i) => {
          if (i > 0) return e;
        })}
      </Blockquote>
    );
  return <Blockquote {...props}>{props.children}</Blockquote>;
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
  li,
  ul,
  ol,
  blockquote,
};

export default MdxComponents;
