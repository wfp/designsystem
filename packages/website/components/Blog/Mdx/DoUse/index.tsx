import { List, ListItem } from '@wfp/react';
import React from 'react';
import styles from './styles.module.scss';

interface DoUseType {
  children: React.ReactNode;
  title?: string;
  kind?: 'checkmark' | 'cross';
}

export function DoUse({
  children,
  title = 'When to use',
  kind = 'checkmark',
}: DoUseType) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childrenListItemWithProps = React.Children.map(
        child.props.children,
        (childListItem: { props: object }) => {
          if (React.isValidElement(childListItem)) {
            return React.createElement(ListItem, {
              ...childListItem.props,
              kind,
            });
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
    <div className={styles.doUse}>
      <h3>{title}</h3>
      <List kind="bullets">{childrenWithProps}</List>
    </div>
  );
}

export function DoNotUse({ title = 'When not to use', ...props }: any) {
  return <DoUse {...props} kind="cross" title={title} />;
}
