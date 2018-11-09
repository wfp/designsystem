import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Values } from 'redux-form-website-template';
import Button from '../components/Button';
import Blockquote from '../components/Blockquote';
import FormLabel from '../components/FormLabel/RfFormLabel';
import { load as loadAccount } from './loadDefaultData';

class FormEl extends Component {

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      sampleData,
      submitting,
    } = this.props;

    const data = sampleData
      ? sampleData
      : {
          // used to populate "account" reducer when "Load" is clicked
          Input: 13,
        };

    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        {this.props.children}
        <div>
          <br />
          <FormLabel>Form Debug Controls</FormLabel>
          <br />
          <Button type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
          &nbsp;
          <Button
            type="button"
            kind="secondary"
            disabled={pristine || submitting}
            onClick={reset}>
            Clear Values
          </Button>
          &nbsp;
          <Button
            type="button"
            kind="secondary"
            disabled={pristine || submitting}
            onClick={() => this.props.load(data)}>
            Load Sample Data
          </Button>
          <Blockquote>
            <Values form="SimpleForm" />
          </Blockquote>
        </div>
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
