import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';



const SubNavigation = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigation.propTypes = {
};

SubNavigation.defaultProps = {
};


const SubNavigationItem = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__item', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationItem.propTypes = {
};

SubNavigationItem.defaultProps = {
};


const SubNavigationHeader = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__header', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationHeader.propTypes = {
};

SubNavigationHeader.defaultProps = {
};

const SubNavigationFilter = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__filter', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationFilter.propTypes = {
  image: PropTypes.string,

};

SubNavigationFilter.defaultProps = {
};

const SubNavigationList = ({
  children,
  className,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__list', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationList.propTypes = {
  image: PropTypes.string,

};

SubNavigationList.defaultProps = {
};


const SubNavigationContent = ({
  children,
  className,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__content', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationContent.propTypes = {
  image: PropTypes.string,

};

const SubNavigationTitle = ({
  children,
  className,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__title', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationTitle.propTypes = {
  image: PropTypes.string,

};

SubNavigationTitle.defaultProps = {
};

const SubNavigationGroup = ({
  children,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__group', {
    className
  });

  return (
      <div className={classes} {...other}>
        {title &&
          <h3 className="wfp--sub-navigation__group__title">
            {title}
          </h3>
        }
        {children}
      </div>
    );
}

SubNavigationGroup.propTypes = {
  image: PropTypes.string,

};

SubNavigationGroup.defaultProps = {
};

export { SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem };
