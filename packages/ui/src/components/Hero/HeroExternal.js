import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Wrapper from '../Wrapper';

import { settings } from '../../globals/js';
const { prefix } = settings;

const HeroExternal = ({title, subTitle, image, children}) => {
  return (
    // TODO: Provide a prop to set the backgrond image (linear-gradient should be not editable)
    // TODO: Provide a prop [string] to set the backgrond position (optional).
    <div
      className={`${prefix}--hero-ext`}
      // TODO: do we need a token for the linear gradient?
      style={{
        backgroundImage: `linear-gradient(rgba(26, 66, 98, 0.8), rgba(26, 66, 98, 0.8)), url(${image})`,
        backgroundPosition: 'center right',
      }}>
      <Wrapper pageWidth="md">
        <div className={`${prefix}--hero-ext__content`}>
          <h1 className={`${prefix}--hero-ext__heading`}>{title}</h1>
          <p className={`${prefix}--hero-ext__body-copy`}>{subTitle}</p>
        </div>
        {children}
      </Wrapper>
    </div>
  );
};

HeroExternal.propTypes = {
  title: PropTypes.node, 
  subTitle: PropTypes.node, 
  image: PropTypes.string, 
  children: PropTypes.node
}

export default HeroExternal;
