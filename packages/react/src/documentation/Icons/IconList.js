/* eslint-disable no-console */

import React from 'react';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';
import Icon from '../../components/Icon';
import { Module, ModuleFooter } from '../../components/Module';
import { DownloadGlyph } from '@unitednations/icons-react';

import Button from '../../components/Button';

import IconConverter from './IconConverter';

import Tippy from '@tippy.js/react';
import { tooltipStyle } from '../../components/Tooltip';

const IconPreview = ({ i, icon, iconsReact }) => {
  const iconName = icon.name;

  const name = icon.moduleInfo?.global
    ? `${icon.moduleInfo.global}`
    : icon.output[0].moduleName;
  const Icon = iconsReact[name];

  if (!Icon) return null;
  if (i !== 10) return null;
  return (
    <Tippy
      interactive
      content={
        <div
          style={{
            lineHeight: '1.2em',
            padding: '0.2em 0.5em',
            minHeight: '3rem',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <DownloadGlyph
            description="WFP"
            width="150"
            height="150"
            className="wfp--footer-cta-logo"
          />
          <div
            className="wfp--inline-highlight"
            style={{
              fontFamily: 'monospace',
              display: 'block',
              marginTop: '1rem',
              marginBottom: '1rem',
              fontWeight: 'bold',
            }}>
            {iconName}
          </div>

          <div
            className="wfp--inline-highlight"
            style={{
              fontFamily: 'monospace',
              display: 'block',
              whiteSpace: 'pre',
              marginTop: '0.2rem',
              marginBottom: '1rem',
            }}>
            {`import
  {${iconName}}
from '@unitednations/icons-react'`}
          </div>
          <Button
            icon={DownloadGlyph}
            href={`https://github.com/wfp/carbon-icons/blob/master/src/svg/${iconName}.svg`}
            small>
            View on GitHub
          </Button>
        </div>
      }
      trigger="click"
      {...tooltipStyle}>
      <div
        style={{
          width: '12.5%',
        }}>
        <Module light withHover>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '55px',
            }}>
            <Icon
              color="red"
              description="WFP"
              width="39"
              className="wfp--footer-cta-logo"
            />
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
            <span>{iconName}</span>
          </ModuleFooter>
        </Module>
      </div>
    </Tippy>
  );
};

const wrapperStyle = { display: 'flex', flexWrap: 'wrap', margin: '0 -0.7em' };

const IconList = ({ iconsReact, metadata }) => {
  console.log(iconsReact, metadata);
  console.log('metadata', iconsReact);
  return (
    <div style={wrapperStyle}>
      {metadata.icons.map((icon, i) => {
        return <IconPreview i={i} icon={icon} iconsReact={iconsReact} />;
      })}
    </div>
  );
};

export default IconList;
