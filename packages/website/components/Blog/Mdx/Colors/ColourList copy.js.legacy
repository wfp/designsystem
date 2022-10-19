import React from 'react';
import { List, ListItem } from '../../components/List';
import Tooltip from '../../components/Tooltip';

import { Module, ModuleBody } from '../../components/Module';
import Item from '../../components/Item';
import Table from '../../components/Table';
import Text from '../../components/Text';
import Tag from '../../components/Tag';
import Story from '../../components/Story';
import { wfpColorsMeta } from '@un/themes';
import { hex, score } from 'wcag-contrast';
import './colours.scss';

import tokens from '@un/themes-core/tokens/design-tokens.tokens.json';

export const ColourList = ({ filter }) => {
  console.log(wfpColorsMeta);

  const filteredColors = Object.values(wfpColorsMeta).filter(
    (ui_colors) => ui_colors.category === filter
  );

  const list = filteredColors.map((color) => {
    const computedColor = getComputedStyle(document.body).getPropertyValue(
      `--${color.name}`
    );

    return (
      <tr className="color__item" kind="horizontal">
        <td>
          <h5>
            <Tag>${color.variable}</Tag>
          </h5>
        </td>
        <td>
          <Story>
            <p>
              <pre>{color.description}</pre>
            </p>
            <p>
              <Text kind="code">Former name: {color.former}</Text>
            </p>
          </Story>
        </td>
        <td>
          <Text kind="code">{color.hex}</Text>
          <br />
        </td>

        <td>
          <div
            className={`color__field ${
              color.rgba.r + color.rgba.g + color.rgba.b > 2.5
                ? 'color__field__light'
                : ''
            }`}
            style={{ backgroundColor: color.hex }}>
            <div className="color__contrast">
              <span>A</span>
              {/*<div>{score(hex(color.hex, '#000000'))}</div>*/}
            </div>
            <div className="color__contrast color__contrast--light">
              <span>A</span>
              {/*<div>{score(hex(color.hex, '#FFFFFF'))}</div> */}
            </div>
          </div>

          <div className="color__field__description">
            <div>>{score(hex(color.hex, '#000000'))}</div>
            <div>{score(hex(color.hex, '#FFFFFF'))}</div>
          </div>
        </td>

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

export default ColourList;
