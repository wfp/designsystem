/* eslint-disable no-console */

import React from 'react';
import { Button, Module, ModuleFooter, Tooltip, tooltipStyle } from '@un/react';
import { Download } from '@un/icons-react';

import styles from './icon-list.module.scss';

import * as icons from '@un/icons-react';
import * as pictograms from '@un/pictograms-react';

import * as humanitarianIcons from '@un/humanitarian-icons-react';
import { CodeBlock } from '../CodeBlockLive';

const iconList = {
  icons,
  pictograms,
  humanitarianIcons,
};

const IconPreview = ({ icon, name }: any) => {
  const [key, Icon] = icon;
  return (
    <Tooltip
      interactive
      content={
        <div className={styles.tooltip}>
          <Icon
            description="WFP"
            width="80"
            height="80"
            className={styles.icon}
          />
          <div className={styles.name}>{key}</div>

          <div className={styles.codeBlock}>
            <CodeBlock language="jsx">
              {`import { ${key} } from '@un/${name}-react'`}
            </CodeBlock>
          </div>
          <Button
            icon={Download}
            href={`https://github.com/un-core/designsystem/tree/develop/packages/${name}/src/svg`}
            //target="_blank"
            small>
            View on GitHub
          </Button>
        </div>
      }
      trigger="click"
      {...tooltipStyle}>
      <div
        style={{
          width: '20%',
        }}>
        <Module light withHover className={styles.module}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',

              height: '95px',
              margin: '0.5em',
            }}>
            {Icon && <Icon style={{ fontSize: '2em' }} />}
          </div>
          <ModuleFooter
            style={{
              padding: '0.2em',
              fontSize: '0.45em',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '2rem',
            }}>
            <span>{key}</span>
          </ModuleFooter>
        </Module>
      </div>
    </Tooltip>
  );
};

const IconList = ({ id, name }: any) => {
  if (!iconList[id]) return null;
  const iconsReact = iconList[id];
  return (
    <div className={styles.wrapper}>
      {Object.entries(iconsReact).map((icon, i) => {
        return <IconPreview key={i} icon={icon} name={name} />;
      })}
    </div>
  );
};

export default IconList;
