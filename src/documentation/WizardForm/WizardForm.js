import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Values } from 'redux-form-website-template';

import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';

import Blockquote from '../../components/Blockquote';

import Wrapper from '../../components/Wrapper';
import FormWizard from '../../components/FormWizard';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleTabClick = index => {
    this.setState({ page: index });
  };

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <Wrapper pageWidth="md" spacing="xl">
        <FormWizard
          sidebar={
            <StepNavigation
              selectedPage={page}
              handleTabClick={this.handleTabClick}>
              <StepNavigationItem label="Name and last name" page={0} />
              <StepNavigationItem
                label="Additional information with long description"
                page={1}
                status="not-started"
              />
              <StepNavigationItem label="Tab label 3" page={2} locked />
            </StepNavigation>
          }>
          {page === 0 && <WizardFormFirstPage onSubmit={this.nextPage} />}
          {page === 1 && (
            <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 2 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />
          )}

          <Blockquote>
            <Values form="wizard" />
          </Blockquote>
        </FormWizard>
      </Wrapper>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/*
export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardForm);
*/

export default WizardForm;
