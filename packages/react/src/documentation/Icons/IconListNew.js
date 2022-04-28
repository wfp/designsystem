/* eslint-disable no-console */

import React from 'react';
import { Module, ModuleFooter } from '../../components/Module';
import { Download } from '@un/icons-react';

import Button from '../../components/Button';

import Tippy from '@tippy.js/react';
import { tooltipStyle } from '../../components/Tooltip';

const IconPreview = ({ icon, name }) => {
  const [key, Icon] = icon;
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
          <Download
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
            {key}
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
  {${key}}
from '@un/${name}-react'`}
          </div>
          <Button
            icon={Download}
            href={`https://github.com/un-core/designsystem/tree/develop/packages/${name}/src/svg`}
            target="_blank"
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
        <Module light withHover>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',

              height: '95px',
              margin: '0.5em',
            }}>
            {Icon && (
              <Icon
                style={{ fontSize: '2em' }}

                /* color="black"
                description="WFP"
                width="39"
                className="wfp--footer-cta-logo"*/
              />
            )}
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
    </Tippy>
  );
};

const wrapperStyle = { display: 'flex', flexWrap: 'wrap', margin: '0 -0.7em' };

const IconList = ({ iconsReact, name }) => {
  console.log('metadata', Object.entries(iconsReact));
  return (
    <div style={wrapperStyle}>
      {Object.entries(iconsReact).map((icon) => {
        return <IconPreview icon={icon} name={name} />;
      })}
    </div>
  );
};

export default IconList;
