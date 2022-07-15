import React from 'react';
//import '!style-loader!css-loader!sass-loader!./storybook.scss';
import '!style-loader!css-loader!../assets/css/styles.css';
import { Button, Link, List, ListItem, Tooltip } from '../src';

const legacyPreviousversions = [
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.20.14/index.html',
    title: 'v1.20.14',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.20.11/index.html',
    title: 'v1.20.11',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.20.10/index.html',
    title: 'v1.20.10',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.20.3/index.html',
    title: 'v1.20.3',
  },
  {
    link: 'https://uikit.wfp.org/legacy-docs/1.19.1/index.html',
    title: 'v1.19.1',
  },
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
        UI-Kit
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
          v{process.env.STORYBOOK_NPM_VERSION}
        </span>
      </Tooltip>
    </div>
  );
}
