import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';


const SubMenuItem = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-menu__item', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubMenuItem.propTypes = {
};

SubMenuItem.defaultProps = {
};


const SubMenuSection = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-menu__section', {
    className
  });

  return (
      <div className={classes} {...other}>
        <h3 className="wfp--sub-menu__section__title">{title}</h3>
        {children}
      </div>
    );
}

SubMenuSection.propTypes = {
};

SubMenuSection.defaultProps = {
};

const SubMenuList = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-menu', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubMenuList.propTypes = {
  image: PropTypes.string,

};

SubMenuList.defaultProps = {
};

export { SubMenuList, SubMenuSection, SubMenuItem };
