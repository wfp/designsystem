import PropTypes from 'prop-types';
import React from 'react';
import Select from './Select';

const RfSelect = ({ children, input, ...other }) => {
  return (
    <Select {...other} onChange={input ? input.onChange : undefined}>
      {children}
    </Select>
  );
};

RfSelect.propTypes = {
  children: PropTypes.node,
  input: PropTypes.node,
};

RfSelect.defaultProps = {};

export default RfSelect;
