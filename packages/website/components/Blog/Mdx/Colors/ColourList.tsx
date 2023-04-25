import React from 'react';

import { List, ListItem, Table, Text, Story } from '@wfp/react';

import tokens from '@un/themes-core/dist/json/variables-full.json';

import { hex, score } from 'wcag-contrast';
import styles from './colours.module.scss';

export const ColourList = ({ tokens }: any) => {
  /*
  const colors = tokens.color[filter];*/
  if (!tokens) return <>No tokens found</>;

  const list = Object.entries(tokens).map(([key, color]: any) => {
    return (
      <tr key={key} className={styles.item}>
        <td>
          <h5>{color.name}</h5>
        </td>
        <td className={styles.content}>
          <Story>
            <p>
              <pre>{color.description}</pre>
            </p>
            <List kind="simple" colon>
              <ListItem title="scss">
                <Text kind="code">${color.name}</Text>
              </ListItem>
              <ListItem title="css">
                <Text kind="code">var(--{color.cssName})</Text>
              </ListItem>
            </List>
          </Story>
        </td>
        <td className={styles.content} style={{ width: '20%' }}>
          <List kind="simple" colon>
            {color.attributes?.hex && (
              <ListItem title="hex">
                <Text kind="code">#{color.attributes?.hex}</Text>
              </ListItem>
            )}
            {color.attributes?.rgb && (
              <ListItem title="rgb">
                <Text kind="code">
                  {color.attributes.rgb.r},{color.attributes.rgb.g},
                  {color.attributes.rgb.b}
                </Text>
              </ListItem>
            )}
          </List>
        </td>
        {color.attributes?.rgb && (
          <td style={{ width: '10px' }}>
            <div
              className={`${styles.field} ${
                color.attributes.rgb.r +
                  color.attributes.rgb.g +
                  color.attributes.rgb.b >
                2.5
                  ? 'color__field__light'
                  : ''
              }`}
              style={{ backgroundColor: `${color.value}` }}>
              <div className={styles.contrast}>
                <span>A</span>
                <div>{score(hex(color.value, '#000000'))}</div>
              </div>
              <div className={`${styles.contrast} ${styles.contrastLight}`}>
                <span>A</span>
                <div>{score(hex(color.value, '#FFFFFF'))}</div>
              </div>
            </div>

            {/*color.attributes.rgb && (
              <div className={styles.fieldDescription}>
                <div>{score(hex(color.value, '#000000'))}</div>
                <div>{score(hex(color.value, '#FFFFFF'))}</div>
              </div>
            )*/}
          </td>
        )}

        {/*<div
          style={{
            flexGrow: '1',
            fontSize: '0.7em',
            lineHeight: '2em',
          }}>
          <h4>{color.name}</h4>
          <List colon kind="simple">
            {color.shortDescription && (
              <h4 className="wfp--story__sub-heading">
                {color.shortDescription}
              </h4>
            )}
            <ListItem>
              <strong>Hex:</strong>
              {color.hex ? color.hex : computedColor}
            </ListItem>
            {color.css && (
              <ListItem>
                <strong>CSS:</strong>
                {computedColor ? `--${color.name}` : color.css}
              </ListItem>
            )}
          </List>
            </div>*/}
      </tr>
    );
  });

  return (
    <Table className={styles.list}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Role</th>
          <th colSpan={2}>Value</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </Table>
  );
};

export function ColourLists() {
  return (
    <div>
      {Object.values(tokens).map((t, key) => {
        return <ColourList key={key} tokens={t} />;
      })}
    </div>
  );
}

export default ColourList;
