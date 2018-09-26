import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from './Checkbox';

const RfCheckbox = ({ input, ...other }) => {
  return <Checkbox {...other} onChange={input ? input.onChange : undefined} />;
};

RfCheckbox.propTypes = {
  children: PropTypes.node,
  input: PropTypes.node,
};

RfCheckbox.defaultProps = {};

export default RfCheckbox;
