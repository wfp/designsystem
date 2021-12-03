import React from 'react';
import { List, ListItem } from '../../components/List';
import Tooltip from '../../components/Tooltip';

import { Module, ModuleBody } from '../../components/Module';
import Item from '../../components/Item';
import { wfpColorsMeta } from '@unitednations/themes';
import { hex, score } from 'wcag-contrast';
import './colours.scss';

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
      <Item
        className="color__item"
        kind="horizontal"
        additional={color.hex}
        title={color.variable}
        subContent={color.description}
        image={
          <div className="color__field" style={{ backgroundColor: color.hex }}>
            {/*<div className="color__contrast">
              <span>A</span>
              <div>>{score(hex(color.hex, '#000000'))}</div>
            </div>
            <div className="color__contrast color__contrast--light">
              <span>A</span>
              <div>{score(hex(color.hex, '#FFFFFF'))}</div>
        </div>*/}
          </div>
        }>
        <div>Former name: {color.former}</div>

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
      </Item>
    );
  });

  return <ul className="color--list">{list}</ul>;
};

export default ColourList;
