import React from 'react';
import PropTypes from 'prop-types';
// import Button from '../Button';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

import useSettings from '../../hooks/useSettings';

const HeroExternal = ({
  title,
  subTitle,
  image,
  children,
  className,
  // ...other
}) => {
  const { prefix } = useSettings();

  const wrapperClasses = classNames(`${prefix}--hero-ext`, {
    [`${className}`]: className,
  });

  return (
    // TODO: Provide a prop to set the backgrond image (linear-gradient should be not editable)
    // TODO: Provide a prop [string] to set the backgrond position (optional).
    <div
      className={wrapperClasses}
      // TODO: do we need a token for the linear gradient?
      style={{
        backgroundImage: `linear-gradient(rgba(26, 66, 98, 0.8), rgba(26, 66, 98, 0.8)), url(${image})`,
        backgroundPosition: 'center right',
      }}>
      <Wrapper pageWidth="md">
        <div className={`${prefix}--hero-ext__content`}>
          {title && <h1 className={`${prefix}--hero-ext__heading`}>{title}</h1>}
          {subTitle && (
            <p className={`${prefix}--hero-ext__body-copy`}>{subTitle}</p>
          )}
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
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HeroExternal;
