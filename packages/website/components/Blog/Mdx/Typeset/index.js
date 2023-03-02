import React from 'react';
import { Link, List, ListItem, Text } from '@un/react';

import tokens from '@un/themes-core/dist/json/variables-full';

import styles from './typeset.module.scss';

// extended logo versions are removed from documentation based on recommendations from CAM, but they still exist in assets for developers already using them in their code.
export default function Typeset() {
  console.log('tokens', tokens);

  const typesetList = Object.entries(tokens.typography).map(([i, entry]) => (
    <div key={i} className={styles.typesetListItem}>
      <div className={styles.description}>
        <Text kind="h5" spacingTop="none">
          {i}
        </Text>
        <List small colon kind="simple">
          <ListItem title="font-size"> {entry.fontSize?.value}</ListItem>
          <ListItem title="font-weight"> {entry.fontWeight?.value}</ListItem>
          <ListItem title="line-height"> {entry.lineHeight?.value}</ListItem>
        </List>
      </div>
      <div>
        <Text kind={i}>Example text</Text>
      </div>
    </div>
  ));
  return <div>{typesetList}</div>;
}
