import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { load as loadAccount } from './loadDefaultData';

class FormEl extends Component {

  render() {
    const {
      handleSubmit,
      sampleData,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        {this.props.children}
      </form>
    );
  }
}

let Form = reduxForm({
  form: 'SimpleForm', //Form name is same
  enableReinitialize: true,
})(FormEl);

// You have to connect() to any reducers that you wish to connect to yourself
Form = connect(
  state => ({
    initialValues: state.account.data, // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(Form);

class RfFormWrapper extends Component {

  onSubmit(submit) {
    alert('Submitted: ' + JSON.stringify(submit));
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} {...this.props}>
        {this.props.children}
      </Form>
    );
  }
}

export default RfFormWrapper;
