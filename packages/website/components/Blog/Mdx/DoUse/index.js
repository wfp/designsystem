import { List, ListItem } from '@un/react';
import React from 'react';
import styles from './styles.module.scss';

export function DoUse({ children, title = 'Do use', kind = 'checkmark' }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      console.log('child', child);

      const childrenListItemWithProps = React.Children.map(
        child.props.children,
        (childListItem) => {
          if (React.isValidElement(childListItem)) {
            console.log('child', childListItem);
            return React.createElement(
              ListItem,
              { className: 'greeting', ...childListItem.props, kind }
              //...childListItem.props
            );
            /*return React.cloneElement(childListItem, {
              className: styles.list,
              kind,
            });*/
          }
          return childListItem;
        }
      );
      return childrenListItemWithProps;
      /*console.log('childrenListItemWithProps', childrenListItemWithProps);
      return React.cloneElement(childrenListItemWithProps, {
        className: styles.list,
      });*/
    }
    return child;
  });

  return (
    <>
      <h3>{title}</h3>
      <List kind="bullets">{childrenWithProps}</List>
    </>
  );
}

export function DoNotUse(props) {
  return <DoUse {...props} kind="cross" title="Do not use" />;
}
