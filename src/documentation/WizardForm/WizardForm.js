import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StepNavigation from '../../components/StepNavigation';
import StepNavigationSection from '../../components/StepNavigationSection';
import StepNavigationItem from '../../components/StepNavigationItem';
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
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <Wrapper pageWidth="md">
        <FormWizard
          sidebar={
            <StepNavigation selectedPage={page}>
              <StepNavigationSection label="Credentials">
                <StepNavigationItem label="Name and last name" page={1} />
                <StepNavigationItem label="Additional information" page={2} />
              </StepNavigationSection>
              <StepNavigationSection label="Tab label 1">
                <StepNavigationItem label="Tab label 3" page={3} />
              </StepNavigationSection>
            </StepNavigation>
          }>
          {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
          {page === 2 && (
            <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />
          )}
        </FormWizard>
      </Wrapper>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
