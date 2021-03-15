import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/** The SubNavigation is a toogleable part of the MainNavigation */
const SubNavigation = ({ children, ...other }) => {
  return <div {...other}>{children}</div>;
};

SubNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

const SubNavigationItem = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__item', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationItem.propTypes = {
  children: PropTypes.node,

  className: PropTypes.string,
};

const SubNavigationHeader = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__header', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationHeader.propTypes = {
  children: PropTypes.node,

  className: PropTypes.string,
};

const SubNavigationFilter = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__filter', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationFilter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const SubNavigationList = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__list', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const SubNavigationContent = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__content', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationContent.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes.node,

  className: PropTypes.string,
};

const SubNavigationTitle = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__title', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationTitle.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes.string,

  className: PropTypes.string,
};

const SubNavigationLink = ({ children, className, ...other }) => {
  const classes = classNames('wfp--sub-navigation__link', 
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

SubNavigationLink.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes.string,

  className: PropTypes.string,
};

const SubNavigationGroup = ({
  children,
  columns,
  className,
  title,
  ...other
}) => {
  const classes = classNames(
    'wfp--sub-navigation__group',
    {
      className,
    },
    { 'wfp--sub-navigation__group--columns': columns }
  );

  return (
    <div className={classes} {...other}>
      {title && <h3 className="wfp--sub-navigation__group__title">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

SubNavigationGroup.propTypes = {
  /**
   * Provide amount of columns shown
   */
  columns: PropTypes.number,
  /**
   * Provide a title for the grop
   */
  title: PropTypes.node,
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  image: PropTypes.string,
};

export {
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationLink,
  SubNavigationFilter,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationItem,
};
