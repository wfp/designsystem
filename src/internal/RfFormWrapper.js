import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Values } from 'redux-form-website-template'
import Button from '../components/Button';
import Blockquote from '../components/Blockquote';
import FormItem from '../components/FormItem/RfFormItem';
import FormLabel from '../components/FormLabel/RfFormLabel';

class FormEl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
          {this.props.children}
        <FormItem>
          <br/>
          <FormLabel>
            Form Debug Controls
          </FormLabel>
          <br/>
          <Button
            type="submit"
            disabled={pristine || submitting}>
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
          <Blockquote>
            <Values form="SimpleForm" />
          </Blockquote>
        </FormItem>
      </form>
    )
  }
}

const Form = reduxForm({
    form: 'SimpleForm',  //Form name is same
    enableReinitialize: true
})(FormEl)



class RfFormWrapper extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(submit) {
    console.log("Submit", submit);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {this.props.children}
      </Form>
    )
  }
}

export default RfFormWrapper;