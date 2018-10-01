import PropTypes from 'prop-types';
import React from 'react';
import TextArea from './TextArea';

const RfSelect = ({ children, input, ...other }) => {
  return (
    <TextArea {...other} onChange={input ? input.onChange : undefined}>
      {children}
    </TextArea>
  );
};

RfSelect.propTypes = {
  children: PropTypes.node,
  input: PropTypes.node,
};

RfSelect.defaultProps = {};

export default RfSelect;
