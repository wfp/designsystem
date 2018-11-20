import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Values } from 'redux-form-website-template';
import Button from '../../components/Button';
import Blockquote from '../../components/Blockquote';
import FormLabel from '../../components/FormLabel/RfFormLabel';
import { load as loadAccount } from '../../internal/loadDefaultData';

import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';

const text = (props) => {
  console.log("props", props)
  return (
    <input onChange={props.onChange} value={props.value}  type="text"/>
  )
};

/*
const textbbbcc = WrappedComponent => ({
  input
}) => {
  return (
    <input {...input} type="text"/>
  );
};
*/

const textbbbcc = (input, touched, error) => (
  <div className="input-row">
    <input {...input} type="text"/>
    {touched && error && 
     <span className="error">{error}</span>}
  </div>
);


const textbbb = (field) => {
  console.log("tectbbb", field);
  return (
  <div className="input-row">
    <field.inputComponent {...field} />
  </div>
  )
};


const inputComponent = (field) => (
  <div className="input-row">
    <input {...field.input} type="text"/>
    {field.meta.touched && field.meta.error && 
     <span className="error">{field.meta.error}</span>}
  </div>
);

/* const textbbb = (field) => (
  <div className="input-row">
    <input {...field.input} type="text"/>
    {field.meta.touched && field.meta.error && 
     <span className="error">{field.meta.error}</span>}
  </div>
); */

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
          input: 13,
        };

    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        {this.props.children}
        <div>
          <br />
          <FormLabel>Form Debug Controls</FormLabel>
          <br />
            <Field
              id="lastNamedddcc"
              name="lastNamedddcc"
              component={ReduxFormWrapper}
              InputComponent={TextInput}
              labelText="Last Name"
            />
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

/*
// You have to connect() to any reducers that you wish to connect to yourself
Form = connect(
  state => ({
    initialValues: state.account.data, // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(Form); */

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
