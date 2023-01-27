import React, { PropsWithChildren } from 'react';

interface TabContentProps {
  selected?: boolean;
}

const TabContent: React.FC<PropsWithChildren<TabContentProps>> = (props) => {
  const { selected, children, ...other } = props;

  return (
    <div {...other} data-selected={selected} hidden={!selected}>
      {children}
    </div>
  );
};

// TabContent.propTypes = {
//   /**
//    * Specify whether the TabContent is selected
//    */
//   selected: PropTypes.bool,

//   /**
//    * Pass in content to render inside of the TabContent
//    */
//   children: PropTypes.node,
// };

// TabContent.defaultProps = {
//   selected: false,
// };

export default TabContent;
