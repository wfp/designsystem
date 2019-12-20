import React from 'react';
import { List, ListItem } from '../../components/List';

import { Module, ModuleBody } from '../../components/Module';
import colors from '../../globals/data/colors';
import { hex, score } from 'wcag-contrast';

import Tippy from '@tippy.js/react';
import { tooltipStyle } from '../../components/Tooltip';

const colorList = ({ filter }) => {
  const filteredColors = Object.values(colors).filter(
    ui_colors => ui_colors.type === filter
  );

  return filteredColors.map(color => (
    <Tippy
      // options
      content={
        <div>
          {color.description && <p>{color.description}</p>}
          {/* tooltips[color.name] */}
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
                <ListItem>{color.hex}</ListItem>

                {color.css && (
                  <ListItem>
                    .{color.css}
                    <div
                      className={color.css}
                      style={{
                        display: 'inline-block',
                        marginLeft: '0.5em',
                        borderRadius: '3px',
                        width: '1em',
                        height: '1em',
                      }}
                    />
                  </ListItem>
                )}
              </List>
              {color.shortDescription && (
                <h4 className="wfp--story__sub-heading">
                  {color.shortDescription}
                </h4>
              )}
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
};

export default colorList;
