import React from 'react';

import Button from '../Button';
import Wrapper from '../Wrapper';

import { settings } from '../../globals/js';
const { prefix } = settings;

const HeroExternal = (props) => {
  return (
    // TODO: Provide a prop to set the backgrond image (linear-gradient should be not editable)
    // TODO: Provide a prop [string] to set the backgrond position (optional).
    <div
      className={`${prefix}--hero-ext`}
      // TODO: do we need a token for the linear gradient?
      style={{
        backgroundImage: `linear-gradient(rgba(26, 66, 98, 0.8), rgba(26, 66, 98, 0.8)), url(http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg)`,
        backgroundPosition: 'center right',
      }}>
      <Wrapper pageWidth="md">
        <div className={`${prefix}--hero-ext__content`}>
          <h1 className={`${prefix}--hero-ext__heading`}>{props.heading}</h1>
          <p className={`${prefix}--hero-ext__body-copy`}>{props.body}</p>
        </div>
        <div className={`${prefix}--hero-ext__actions`}>
          <Button allCaps large kind="accent">
            Accent action
          </Button>
          <Button allCaps large kind="inverse">
            Secondary action
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroExternal;
