import React from 'react';
import { List, ListItem } from '../../components/List';

import { Module, ModuleBody } from '../../components/Module';
import colors from '../../globals/data/colors';
import { hex, score } from 'wcag-contrast';

import Tippy from '@tippy.js/react';
import { tooltipStyle } from '../../components/Tooltip';

/*
const tooltips = {
    'ui-01': (
    <img
        alt="Brand colour"
        style={{
        width: '100%',
        height: 'auto',
        marginTop: '3em',
        marginLeft: '0em',
        }}
        src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/background-contrast.png`}
    />
    ),
    'ui-02': (
    <img
        alt="Brand colour"
        style={{
        width: '100%',
        height: 'auto',
        marginTop: '3em',
        marginLeft: '0em',
        }}
        src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/background-contrast.png`}
    />
    ),
};

const colorBlend = [
  { name: '20', blend: 'ffffff', percentage: '75' },
  { name: '30', blend: 'ffffff', percentage: '50' },
  { name: '40', blend: 'ffffff', percentage: '25' },
  { name: '60', blend: '000000', percentage: '25' },
  { name: '70', blend: '000000', percentage: '50' },
  { name: '80', blend: '000000', percentage: '75' },
];

var mix = function(color_1, color_2, weight) {
  function d2h(d) {
    return d.toString(16);
  } // convert a decimal value to hex
  function h2d(h) {
    return parseInt(h, 16);
  } // convert a hex value to decimal

  weight = typeof weight !== 'undefined' ? weight : 50; // set the weight to 50%, if that argument is omitted

  var color = '#';

  for (var i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairs—red, green, and blue
    var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
      v2 = h2d(color_2.substr(i, 2)),
      // combine the current pairs from each source color, according to the specified weight
      val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) {
      val = '0' + val;
    } // prepend a '0' if val results in a single digit

    color += val; // concatenate val to our new colour string
  }

  return color; // PROFIT!
};
*/

const colorList = ({ filter }) => {
  const filteredColors = Object.values(colors).filter(
    ui_colors => ui_colors.type === filter
  );

  const list = filteredColors.map(color => (
    <Tippy
      // options
      content={
        <div>
          {color.description && <p>{color.description}</p>}
          {color.name}
        </div>
      }
      {...tooltipStyle}>
      <li>
        <Module fullHeight noMargin light className="colour__item">
          <div className="colour__field" style={{ backgroundColor: color.hex }}>
            <div className="colour__contrast">
              <span>A</span>
              <div>>{score(hex(color.hex, '#000000'))}</div>
            </div>
            <div className="colour__contrast colour__contrast--light">
              <span>A</span>
              <div>{score(hex(color.hex, '#FFFFFF'))}</div>
            </div>
          </div>
          <div
            style={{
              flexGrow: '1',
              fontSize: '0.7em',
              lineHeight: '2em',
            }}>
            <ModuleBody>
              <h4>{color.name}</h4>
              <List colon kind="simple">
                {/*<ListItem>{color.name}</ListItem>
                    <ListItem>{color.scss}</ListItem>*/}
                {color.shortDescription && (
                  <h4 className="wfp--story__sub-heading">
                    {color.shortDescription}
                  </h4>
                )}
                <ListItem>
                  <strong>Hex:</strong> {color.hex}
                </ListItem>

                {color.css && (
                  <ListItem>
                    <strong>CSS:</strong> .{color.css}
                    {/*<div
                      className={color.css}
                      style={{
                        display: 'inline-block',
                        marginLeft: '0.5em',
                        borderRadius: '3px',
                        width: '1em',
                        height: '1em',
                      }}
                    />*/}
                  </ListItem>
                )}
              </List>
            </ModuleBody>
          </div>
          {/*
              {color.type !== 'symbolic' &&
                color.type !== 'ui' &&
                color.type !== 'sdg' &&
                color.type !== 'support' && (
                  <div
                    style={{
                      width: '50%',
                    }}>
                    {colorBlend.map(blend => (
                      <div
                        style={{
                          display: 'flex',
                          fontSize: '0.7em',
                          width: '100%',
                        }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            marginTop: '1px',
                            marginRight: '1em',
                            marginBottom: '1px',
                            borderRadius: '3px',
                            background: mix(
                              blend.blend,
                              color.hex.replace('#', ''),
                              blend.percentage
                            ),
                          }}
                          className={`color__${color.name}-{blend}`}
                        />
                        <div
                          style={{
                            marginTop: '2px',
                            lineHeight: '20px',
                          }}>
                          <span
                            style={{
                              display: 'inline-block',
                              marginRight: '1em',
                            }}>
                            <List colon kind="simple-inline" inline>
                              <ListItem title="hex">
                                {mix(
                                  blend.blend,
                                  color.hex.replace('#', ''),
                                  blend.percentage
                                )}
                              </ListItem>
                              <ListItem title="scss">
                                {color.scss}-{blend.name}
                              </ListItem>
                            </List>
                          </span>
                        </div>
                      </div>
                                ))}
                  </div>
                )}*/}
        </Module>
      </li>
    </Tippy>
  ));

  return <ul className="color--list">{list}</ul>;
};

export default colorList;
