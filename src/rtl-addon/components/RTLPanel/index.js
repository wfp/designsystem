import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RTLToggle from '../RTLToggle';
import { Panel } from './styles';

export default class RTLPanel extends Component {
  render() {
    const { checked, onChange } = this.props;

    return (
      <Panel>
        <RTLToggle checked={checked} onChange={onChange} />
      </Panel>
    );
  }
}

RTLPanel.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

RTLPanel.defaultProps = {
  checked: false,
};
