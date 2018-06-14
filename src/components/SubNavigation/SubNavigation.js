import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';


const SubNavigation = ({
  children,
  ...other
}) => {

  return (
    <div 
      {...other}
    >
      {children}
    </div>
  )
}

SubNavigation.propTypes = {
  children: PropTypes.element.isRequired,
};



const SubNavigationItem = ({
  children,
  className,
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




const SubNavigationHeader = ({
  children,
  className,
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



const SubNavigationFilter = ({
  children,
  className,
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
  children: PropTypes.node,
  className: PropTypes.string,
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


const SubNavigationLink = ({
  children,
  className,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__link', {
    className
  });

  return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
}

SubNavigationLink.propTypes = {
  image: PropTypes.string,
};


const SubNavigationGroup = ({
  children,
  columns,
  className,
  title,
  ...other
}) => {

  const classes = classNames('wfp--sub-navigation__group',
    {
      className
    },
    {'wfp--sub-navigation__group--columns': columns }
  );

  return (
      <div className={classes} {...other}>
        {title &&
          <h3 className="wfp--sub-navigation__group__title">
            {title}
          </h3>
        }
        <div>
          {children}
        </div>
      </div>
    );
}

SubNavigationGroup.propTypes = {
  image: PropTypes.string,
};


export { SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationLink, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem };
