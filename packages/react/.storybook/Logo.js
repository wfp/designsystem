import React from 'react';
//TODO: avoid importing the Kit here
//import '!style-loader!css-loader!../assets/css/styles.css';
import { Button, Link, List, ListItem, Tooltip } from '../src';
import { version } from '../package.json';

const legacyPreviousversions = [
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.18.2/index.html',
    title: 'v1.18.2',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.17.1/index.html?',
    title: 'v1.17.1',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.16.0/index.html?',
    title: 'v1.16.0',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.15.1/index.html?',
    title: 'v1.15.1',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.14.0/index.html?',
    title: 'v1.14.0',
  },
];
export function StorybookLogo() {
  return (
    <div className="wfp-logo">
      WFP{' '}
      <span style={{ fontWeight: '400', textTransform: 'uppercase' }}>
        Digital Design System
      </span>
      <Tooltip
        content={
          <List kind="tooltip">
            {legacyPreviousversions.map((e, i) => (
              <ListItem key={i}>
                <Link href={e.link} target="_blank">
                  {e.title}
                </Link>
              </ListItem>
            ))}
          </List>
        }
        noPadding
        trigger="click">
        <span
          style={{
            fontWeight: '400',
            fontSize: '0.85em',
            color: 'grey',
            marginLeft: '0.5em',
          }}>
          {version}
        </span>
      </Tooltip>
    </div>
  );
}
