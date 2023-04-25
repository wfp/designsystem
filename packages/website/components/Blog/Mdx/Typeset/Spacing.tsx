import React from 'react';
import { List, ListItem, Text } from '@wfp/react';

import tokens from '@un/themes-core/dist/json/variables-full.json';

import styles from './spacing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-regular-svg-icons';

// extended logo versions are removed from documentation based on recommendations from CAM, but they still exist in assets for developers already using them in their code.
export default function Typeset() {
  const typesetList = Object.entries(tokens.spacing).map(([i, entry]) => (
    <div key={i} className={styles.typesetListItem}>
      <div className={styles.description}>
        <Text kind="h5" spacingTop="none">
          spacing-{i}
        </Text>
        <List small colon kind="simple">
          <ListItem title="relative">{entry.value}</ListItem>
          <ListItem title="px">{entry.original?.value}</ListItem>
          <ListItem title="scss">$spacing-{i}</ListItem>
        </List>
      </div>
      <div
        className={styles.spacingPreview}
        style={{ width: entry.value, height: entry.value }}>
        {parseInt(entry.value.replace('em', '')) > 1 && (
          <div className={styles.spacingPreviewValue}>
            <FontAwesomeIcon icon={faArrowLeft} /> {entry.value}{' '}
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        )}
      </div>
    </div>
  ));
  return <div>{typesetList}</div>;
}
