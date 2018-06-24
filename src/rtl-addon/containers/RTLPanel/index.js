import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RTLPanelComponent from '../../components/RTLPanel';
import { getDefaultTextDirection } from '../../utils';
import { INITIALIZE_EVENT_ID, UPDATE_EVENT_ID } from '../../constants';

export default class RTLPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: getDefaultTextDirection(props.api),
    };

    this.handleInitializeEvent = this.handleInitializeEvent.bind(this);
    this.handlePanelChange = this.handlePanelChange.bind(this);
  }

  componentDidMount() {
    this.props.channel.on(INITIALIZE_EVENT_ID, this.handleInitializeEvent);
  }

  componentWillUnmount() {
    this.props.channel.removeListener(
      INITIALIZE_EVENT_ID,
      this.handleInitializeEvent
    );
  }

  componentDidUpdate() {
    this.handleInitializeEvent();
  }

  handleInitializeEvent() {
    this.props.channel.emit(UPDATE_EVENT_ID, this.state);
  }

  handlePanelChange(checked) {
    const state = { direction: checked ? 'rtl' : 'ltr' };
    this.setState(state);
  }

  render() {
    const { direction } = this.state;

    return (
      <RTLPanelComponent
        checked={direction === 'rtl'}
        onChange={this.handlePanelChange}
      />
    );
  }
}

RTLPanel.propTypes = {
  api: PropTypes.object.isRequired,
  channel: PropTypes.object.isRequired,
};
