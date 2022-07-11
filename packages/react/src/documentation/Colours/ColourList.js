import React from 'react';
import { List, ListItem } from '../../components/List';
import Tooltip from '../../components/Tooltip';

import { Module, ModuleBody } from '../../components/Module';
import Item from '../../components/Item';
import Table from '../../components/Table';
import Text from '../../components/Text';
import Tag from '../../components/Tag';
import Story from '../../components/Story';
import { hex, score } from 'wcag-contrast';
import './colours.scss';

export const ColourList = ({ tokens }) => {
  console.log('tokens', tokens);
  /*
  const colors = tokens.color[filter];*/
  if (!tokens) return <>No tokens found</>;

  const list = Object.entries(tokens).map(([key, color]) => {
    return (
      <tr className="color__item" kind="horizontal">
        <td>
          <h5>
            <Tag>{color.name}</Tag>
          </h5>
        </td>
        <td>
          <Story>
            <p>
              <pre>{color.description}</pre>
            </p>
            <ul>
              <li>
                <Text kind="code">scss: ${color.cssName}</Text>
              </li>
              <li>
                <Text kind="code">css: var(--{color.cssName})</Text>
              </li>
            </ul>
          </Story>
        </td>
        <td>
          <Text kind="code">
            <p>
              #
              {color.attributes &&
                typeof color.attributes.hex === 'string' &&
                color.attributes.hex}
            </p>
            <p>
              {color.attributes?.rgb && (
                <>
                  r: {color.attributes.rgb.r}, g:{color.attributes.rgb.g}, b:{' '}
                  {color.attributes.rgb.b}
                </>
              )}
            </p>
          </Text>
          <br />
        </td>
        {color.attributes?.rgb && (
          <td>
            <div
              className={`color__field ${
                color.attributes.rgb.r +
                  color.attributes.rgb.g +
                  color.attributes.rgb.b >
                2.5
                  ? 'color__field__light'
                  : ''
              }`}
              style={{ backgroundColor: `#${color.attributes?.hex}` }}>
              <div className="color__contrast">
                <span>A</span>
                <div>{score(hex(color.value, '#000000'))}</div>
              </div>
              <div className="color__contrast color__contrast--light">
                <span>A</span>
                <div>{score(hex(color.value, '#FFFFFF'))}</div>
              </div>
            </div>

            {color.attributes.rgb && (
              <div className="color__field__description">
                <div>{score(hex(color.value, '#000000'))}</div>
                <div>{score(hex(color.value, '#FFFFFF'))}</div>
              </div>
            )}
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
    <Table className="color--list">
      <thead>
        <tr>
          <th>Token</th>
          <th>Role</th>
          <th colspan={2}>Value</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </Table>
  );
};

export function ColourLists({ tokens }) {
  return (
    <div>
      {Object.values(tokens).map((t) => {
        return <ColourList tokens={t} />;
      })}
    </div>
  );
}

export default ColourList;
